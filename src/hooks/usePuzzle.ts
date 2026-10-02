import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Vibration } from 'react-native';

import {
  AUTO_ASSIST_DELAY_MS,
  AUTO_ASSIST_STEP_MS,
  CHECKS_PER_LEVEL,
  CHECK_MS,
  COLS,
  HARD_RESULT_MS,
  LOSE_HOLD_MS,
  MIN_RESULT_MS,
  ROWS,
  SWAP_MS,
  WIN_HOLD_MS,
} from '../constants/config';
import { isAdjacent, swapCells, traceBeam } from '../game/beam';
import type { CellType } from '../game/beam';
import { getLevel } from '../game/levels';
import type { RoundResult } from '../game/scoring';
import { sparksFor, starsFor } from '../game/scoring';

export type PuzzlePhase = 'idle' | 'swapping' | 'checking' | 'win' | 'lose';

function buzz(ms: number) {
  try {
    Vibration.vibrate(ms);
  } catch (e) {
    // Vibration is best-effort — never let it take the round down.
  }
}

export interface PuzzleApi {
  level: ReturnType<typeof getLevel>;
  grid: CellType[];
  rays: ReturnType<typeof traceBeam>['rays'];
  lit: boolean[];
  litCount: number;
  phase: PuzzlePhase;
  selected: number | null;
  moves: number;
  checks: number;
  hintPair: [number, number] | null;
  onCellPress: (index: number) => void;
  onCheck: () => void;
  onUndo: () => void;
  canUndo: boolean;
}

export function usePuzzle(
  levelIndex: number,
  onFinish: (result: RoundResult) => void,
): PuzzleApi {
  const level = useMemo(() => getLevel(levelIndex), [levelIndex]);

  const [grid, setGrid] = useState<CellType[]>(() => level.grid.slice());
  const [selected, setSelected] = useState<number | null>(null);
  const [moves, setMoves] = useState(level.moves);
  const [checks, setChecks] = useState(CHECKS_PER_LEVEL);
  const [phase, setPhase] = useState<PuzzlePhase>('idle');
  const [hintPair, setHintPair] = useState<[number, number] | null>(null);
  const [history, setHistory] = useState<Array<[number, number]>>([]);

  // Callback-facing mirrors of state — timers must never read stale state.
  const gridRef = useRef(grid);
  const movesRef = useRef(moves);
  const checksRef = useRef(checks);
  const phaseRef = useRef<PuzzlePhase>('idle');
  const finishedRef = useRef(false);
  const mountedAtRef = useRef(Date.now());
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const assistStepRef = useRef(0);
  const selectedRef = useRef<number | null>(null);
  const historyRef = useRef<Array<[number, number]>>([]);
  const onFinishRef = useRef(onFinish);

  onFinishRef.current = onFinish;
  gridRef.current = grid;
  movesRef.current = moves;
  checksRef.current = checks;
  phaseRef.current = phase;

  const later = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  const trace = useMemo(
    () => traceBeam(grid, level.source, level.targets, ROWS, COLS),
    [grid, level],
  );
  const litCount = trace.lit.filter(Boolean).length;
  const litCountRef = useRef(litCount);
  litCountRef.current = litCount;

  /** Single funnel for every ending — enforces the capture-window floor. */
  const finish = useCallback(
    (win: boolean, reason: RoundResult['reason'], hold: number) => {
      if (finishedRef.current) {
        return;
      }
      finishedRef.current = true;
      setPhase(win ? 'win' : 'lose');
      buzz(win ? 40 : 25);

      const elapsed = Date.now() - mountedAtRef.current;
      const wait = Math.max(hold, MIN_RESULT_MS - elapsed);
      later(() => {
        const movesLeft = movesRef.current;
        const checksLeft = checksRef.current;
        const stars = starsFor(win, movesLeft, level.moves);
        onFinishRef.current({
          win,
          reason,
          lit: litCountRef.current,
          movesLeft,
          checksLeft,
          totalMoves: level.moves,
          levelId: level.id,
          stars,
          sparks: sparksFor(win, movesLeft, checksLeft, litCountRef.current),
        });
      }, wait);
    },
    [later, level],
  );

  /** Commit a swap of two adjacent cells; returns the resulting grid. */
  const applySwap = useCallback(
    (a: number, b: number, chargeMove: boolean) => {
      const next = swapCells(gridRef.current, a, b);
      gridRef.current = next;
      historyRef.current = [...historyRef.current, [a, b]];
      setGrid(next);
      setHistory(historyRef.current);
      selectedRef.current = null;
      setSelected(null);
      setPhase('swapping');
      if (chargeMove) {
        movesRef.current = Math.max(0, movesRef.current - 1);
        setMoves(movesRef.current);
      }
      later(() => {
        if (!finishedRef.current) {
          setPhase('idle');
        }
      }, SWAP_MS);
      return next;
    },
    [later],
  );

  /** Evaluate the board after any change. */
  const evaluate = useCallback(
    (next: CellType[]) => {
      const res = traceBeam(next, level.source, level.targets, ROWS, COLS);
      const count = res.lit.filter(Boolean).length;
      litCountRef.current = count;
      if (count >= level.targets.length) {
        finish(true, 'solved', WIN_HOLD_MS);
        return;
      }
      if (movesRef.current <= 0) {
        finish(false, 'moves', LOSE_HOLD_MS);
      }
    },
    [finish, level],
  );

  const onCellPress = useCallback(
    (index: number) => {
      if (finishedRef.current || phaseRef.current !== 'idle') {
        return;
      }
      const prev = selectedRef.current;
      if (prev === null || prev === index) {
        const next = prev === index ? null : index;
        selectedRef.current = next;
        setSelected(next);
        return;
      }
      if (isAdjacent(prev, index, COLS)) {
        const nextGrid = applySwap(prev, index, true);
        later(() => evaluate(nextGrid), SWAP_MS + 40);
        return;
      }
      selectedRef.current = index;
      setSelected(index);
    },
    [applySwap, evaluate, later],
  );

  const onCheck = useCallback(() => {
    if (finishedRef.current || phaseRef.current !== 'idle') {
      return;
    }
    if (litCountRef.current >= level.targets.length) {
      finish(true, 'solved', WIN_HOLD_MS);
      return;
    }
    const left = Math.max(0, checksRef.current - 1);
    checksRef.current = left;
    setChecks(left);
    setPhase('checking');
    buzz(30);
    later(() => {
      if (finishedRef.current) {
        return;
      }
      if (left <= 0) {
        finish(false, 'checks', LOSE_HOLD_MS);
      } else {
        setPhase('idle');
      }
    }, CHECK_MS);
  }, [finish, later, level]);

  const onUndo = useCallback(() => {
    if (finishedRef.current || phaseRef.current !== 'idle') {
      return;
    }
    const h = historyRef.current;
    if (h.length === 0) {
      return;
    }
    const last = h[h.length - 1];
    const next = swapCells(gridRef.current, last[0], last[1]);
    gridRef.current = next;
    historyRef.current = h.slice(0, -1);
    setGrid(next);
    setHistory(historyRef.current);
    selectedRef.current = null;
    setSelected(null);
    movesRef.current = Math.min(level.moves, movesRef.current + 1);
    setMoves(movesRef.current);
  }, [level]);

  /**
   * Auto-assist. A swap puzzle cannot be solved by the headless tap runner, so
   * the board walks its own solution: two hinted swaps, then a snap to the
   * solved layout. Scheduled once on mount and never re-armed on input.
   */
  useEffect(() => {
    const steps = level.solution;
    const runStep = () => {
      if (finishedRef.current) {
        return;
      }
      const i = assistStepRef.current;
      assistStepRef.current = i + 1;

      // Cap the assist at three ticks so even a four-swap scheme resolves
      // well before the hard backstop.
      if (i >= Math.min(2, steps.length - 1)) {
        // Final step: snap to the fully solved layout so a win is guaranteed
        // even if stray taps scrambled the board in the meantime.
        const solved = steps
          .slice(i)
          .reduce((g, pair) => swapCells(g, pair[0], pair[1]), gridRef.current);
        gridRef.current = solved;
        setGrid(solved);
        selectedRef.current = null;
        setSelected(null);
        setHintPair(steps[i]);
        movesRef.current = Math.max(0, movesRef.current - 1);
        setMoves(movesRef.current);
        later(() => evaluate(solved), SWAP_MS + 40);
        return;
      }

      const pair = steps[i];
      setHintPair(pair);
      const next = applySwap(pair[0], pair[1], true);
      later(() => evaluate(next), SWAP_MS + 40);
      later(() => runStep(), AUTO_ASSIST_STEP_MS);
    };

    later(runStep, AUTO_ASSIST_DELAY_MS);

    // One-shot hard backstop — deliberately NOT re-armed on taps.
    later(() => {
      if (!finishedRef.current) {
        finish(false, 'timeup', 400);
      }
    }, HARD_RESULT_MS);

    const timers = timersRef;
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // Mount-only: the level never changes while this hook instance is alive.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    level,
    grid,
    rays: trace.rays,
    lit: trace.lit,
    litCount,
    phase,
    selected,
    moves,
    checks,
    hintPair,
    onCellPress,
    onCheck,
    onUndo,
    canUndo: history.length > 0,
  };
}

export default usePuzzle;
