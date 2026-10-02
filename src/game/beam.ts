/**
 * Beam tracing for the 6x6 mirror grid.
 *
 * Pure functions only — no React, no side effects. `traceBeam` is called on
 * every swap, so it must terminate on cyclic mirror layouts (visited-state set
 * plus a hard segment cap).
 */

export type CellType =
  | 'empty'
  | 'mirror_slash'
  | 'mirror_back'
  | 'prism'
  | 'blocker';

export type Dir = 'N' | 'E' | 'S' | 'W';
export type Side = 'top' | 'right' | 'bottom' | 'left';

export interface Source {
  r: number;
  c: number;
  dir: Dir;
}

export interface Target {
  r: number;
  c: number;
  side: Side;
  color: string;
}

/** A single straight run of light, in cell coordinates. */
export interface Point {
  r: number;
  c: number;
}

export interface Ray {
  /** Ordered cell-centre waypoints; first point sits on the entry edge. */
  points: Point[];
  color: string;
  /** Set when the ray leaves the grid — which cell and which side it exited. */
  exit?: { r: number; c: number; side: Side };
}

export interface TraceResult {
  rays: Ray[];
  /** index-aligned with the level's targets array */
  lit: boolean[];
}

const STEP: Record<Dir, { dr: number; dc: number }> = {
  N: { dr: -1, dc: 0 },
  E: { dr: 0, dc: 1 },
  S: { dr: 1, dc: 0 },
  W: { dr: 0, dc: -1 },
};

/** '/' mirror swaps E<->N and W<->S. */
const SLASH: Record<Dir, Dir> = { E: 'N', N: 'E', W: 'S', S: 'W' };
/** '\' mirror swaps E<->S and W<->N. */
const BACK: Record<Dir, Dir> = { E: 'S', S: 'E', W: 'N', N: 'W' };
/** 90 degrees clockwise — the prism's secondary output. */
const CW: Record<Dir, Dir> = { N: 'E', E: 'S', S: 'W', W: 'N' };

const EXIT_SIDE: Record<Dir, Side> = {
  N: 'top',
  E: 'right',
  S: 'bottom',
  W: 'left',
};

const MAX_RAYS = 10;
const MAX_STEPS = 80;

export const BEAM_COLORS = ['#D93A67', '#EFC04C', '#34B9AB'];

export function inBounds(r: number, c: number, rows: number, cols: number) {
  return r >= 0 && c >= 0 && r < rows && c < cols;
}

export function idx(r: number, c: number, cols: number) {
  return r * cols + c;
}

interface PendingRay {
  r: number;
  c: number;
  dir: Dir;
  color: string;
  points: Point[];
}

/**
 * Trace light from `source` through `grid`, returning one polyline per ray
 * and which of `targets` ended up lit.
 */
export function traceBeam(
  grid: CellType[],
  source: Source,
  targets: Target[],
  rows: number,
  cols: number,
): TraceResult {
  const rays: Ray[] = [];
  const lit = targets.map(() => false);

  const queue: PendingRay[] = [
    {
      r: source.r,
      c: source.c,
      dir: source.dir,
      color: BEAM_COLORS[0],
      points: [{ r: source.r, c: source.c }],
    },
  ];

  const visited = new Set<string>();
  let spawned = 1;

  while (queue.length > 0) {
    const ray = queue.shift() as PendingRay;
    let { r, c, dir } = ray;
    const points = ray.points;
    let exit: Ray['exit'];
    let steps = 0;

    while (steps < MAX_STEPS) {
      steps += 1;

      const key = `${r},${c},${dir}`;
      if (visited.has(key)) {
        break;
      }
      visited.add(key);

      const cell = grid[idx(r, c, cols)] || 'empty';

      if (cell === 'blocker') {
        points.push({ r, c });
        break;
      }

      let nextDir: Dir = dir;
      if (cell === 'mirror_slash') {
        nextDir = SLASH[dir];
      } else if (cell === 'mirror_back') {
        nextDir = BACK[dir];
      }

      if (cell !== 'empty') {
        // Record the turn/split point so the polyline bends at the gem.
        points.push({ r, c });
      }

      if (cell === 'prism' && spawned < MAX_RAYS) {
        const branchDir = CW[dir];
        const br = r + STEP[branchDir].dr;
        const bc = c + STEP[branchDir].dc;
        spawned += 1;
        if (inBounds(br, bc, rows, cols)) {
          // Start the branch on the NEXT cell so the prism isn't re-split.
          queue.push({
            r: br,
            c: bc,
            dir: branchDir,
            color: BEAM_COLORS[spawned % BEAM_COLORS.length],
            points: [{ r, c }],
          });
        } else {
          const side = EXIT_SIDE[branchDir];
          for (let i = 0; i < targets.length; i += 1) {
            const t = targets[i];
            if (t.r === r && t.c === c && t.side === side) {
              lit[i] = true;
            }
          }
          rays.push({
            points: [{ r, c }],
            color: BEAM_COLORS[spawned % BEAM_COLORS.length],
            exit: { r, c, side },
          });
        }
      }

      dir = nextDir;
      const nr = r + STEP[dir].dr;
      const nc = c + STEP[dir].dc;

      if (!inBounds(nr, nc, rows, cols)) {
        points.push({ r, c });
        exit = { r, c, side: EXIT_SIDE[dir] };
        for (let i = 0; i < targets.length; i += 1) {
          const t = targets[i];
          if (t.r === r && t.c === c && t.side === exit.side) {
            lit[i] = true;
          }
        }
        break;
      }

      r = nr;
      c = nc;
    }

    // Always terminate the polyline on the last visited cell.
    points.push({ r, c });
    rays.push({ points: dedupe(points), color: ray.color, exit });
  }

  return { rays, lit };
}

function dedupe(points: Point[]): Point[] {
  const out: Point[] = [];
  for (const p of points) {
    const last = out[out.length - 1];
    if (!last || last.r !== p.r || last.c !== p.c) {
      out.push(p);
    }
  }
  return out;
}

/** Are two grid cells orthogonally adjacent? */
export function isAdjacent(a: number, b: number, cols: number) {
  const ar = Math.floor(a / cols);
  const ac = a % cols;
  const br = Math.floor(b / cols);
  const bc = b % cols;
  return Math.abs(ar - br) + Math.abs(ac - bc) === 1;
}

export function swapCells(grid: CellType[], a: number, b: number): CellType[] {
  const next = grid.slice();
  const tmp = next[a];
  next[a] = next[b];
  next[b] = tmp;
  return next;
}
