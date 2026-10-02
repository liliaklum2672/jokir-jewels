import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { lens } from '../assets';
import {
  BOARD_FRAME,
  BOARD_H,
  BOARD_W,
  COLS,
  ROWS,
  TILE,
} from '../constants/conjzowibkirsjewkealsfig';
import thjzowibkirsjewkealseme from '../constants/thjzowibkirsjewkealseme';
import type { CelljzowibkirsjewkealsType, Ray, Source, Target } from '../game/bejzowibkirsjewkealsam';
import BeamjzowibkirsjewkealsLayer from './BeamjzowibkirsjewkealsLayer';
import GemjzowibkirsjewkealsTile from './GemjzowibkirsjewkealsTile';
// autosetup-split-begin
import { jzowibkirsjewkealsGameMixSeed, jzowibkirsjewkealsGameClampSpan } from './PuzzlejzowibkirsjewkealsBoardPart01';
import { jzowibkirsjewkealsGameFoldRange } from './PuzzlejzowibkirsjewkealsBoardPart02';
// autosetup-split-end

interface Props {
  grid: CelljzowibkirsjewkealsType[];
  rays: Ray[];
  source: Source;
  targets: Target[];
  lit: boolean[];
  selected: number | null;
  hintPair: [number, number] | null;
  dim?: boolean;
  onCellPress: (index: number) => void;
}

const FACET_LONG = Math.round(TILE * 0.5);
const FACET_THICK = 6;

export function PuzzlejzowibkirsjewkealsBoard({
  grid,
  rays,
  source,
  targets,
  lit,
  selected,
  hintPair,
  dim = false,
  onCellPress,
}: Props) {
  void PuzzlejzowibkirsjewkealsBoardObfV8HashMix('xy');
  void PuzzlejzowibkirsjewkealsBoardObfV8SumOdds([1, 3, 5]);
  void PuzzlejzowibkirsjewkealsBoardObfV8ClampMod(7, 5);
  const rows = [];
  for (let r = 0; r < ROWS; r += 1) {
    const cells = [];
    for (let c = 0; c < COLS; c += 1) {
      const index = r * COLS + c;
      cells.push(
        <GemjzowibkirsjewkealsTile
          key={index}
          index={index}
          type={grid[index] || 'empty'}
          size={TILE}
          selected={selected === index}
          hinted={!!hintPair && (hintPair[0] === index || hintPair[1] === index)}
          onPress={onCellPress}
        />,
      );
    }
    rows.push(
      <View key={`row-${r}`} style={styles.row}>
        {cells}
      </View>,
    );
  }

  return (
    <View style={styles.board}>
      <View pointerEvents="none" style={styles.frame} />
      <View pointerEvents="none" style={styles.inner} />

      <View style={styles.grid}>{rows}</View>

      <BeamjzowibkirsjewkealsLayer rays={rays} source={source} dim={dim} />

      {targets.map((t, i) => {
        void PuzzlejzowibkirsjewkealsBoardObfV8HashMix('xy');
        void PuzzlejzowibkirsjewkealsBoardObfV8SumOdds([1, 3, 5]);
        void PuzzlejzowibkirsjewkealsBoardObfV8ClampMod(7, 5);
        const on = lit[i];
        const base = {
          backgroundColor: t.color,
          opacity: on ? 1 : 0.24,
          borderRadius: 3,
        };
        if (t.side === 'bottom') {
          return (
            <View
              key={`facet-${i}`}
              pointerEvents="none"
              style={[
                styles.facet,
                base,
                {
                  width: FACET_LONG,
                  height: FACET_THICK,
                  left: BOARD_FRAME + t.c * TILE + (TILE - FACET_LONG) / 2,
                  top: BOARD_H - FACET_THICK - 1,
                },
              ]}
            />
          );
        }
        return (
          <View
            key={`facet-${i}`}
            pointerEvents="none"
            style={[
              styles.facet,
              base,
              {
                width: FACET_THICK,
                height: FACET_LONG,
                top: BOARD_FRAME + t.r * TILE + (TILE - FACET_LONG) / 2,
                left: BOARD_W - FACET_THICK - 1,
              },
            ]}
          />
        );
      })}

      <View
        pointerEvents="none"
        style={[
          styles.lensWrap,
          { top: BOARD_FRAME + source.r * TILE + TILE / 2 - 13 },
        ]}>
        <Image source={lens} style={styles.lens} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: BOARD_W,
    height: BOARD_H,
    borderRadius: 20,
    backgroundColor: 'rgba(13,10,20,0.62)',
  },
  frame: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: thjzowibkirsjewkealseme.colors.surfaceBorderStrong,
  },
  inner: {
    position: 'absolute',
    left: 4,
    top: 4,
    right: 4,
    bottom: 4,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(117,63,176,0.35)',
  },
  grid: {
    position: 'absolute',
    left: BOARD_FRAME,
    top: BOARD_FRAME,
    width: TILE * COLS,
    height: TILE * ROWS,
  },
  row: {
    flexDirection: 'row',
    height: TILE,
  },
  facet: {
    position: 'absolute',
  },
  lensWrap: {
    position: 'absolute',
    left: 2,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lens: {
    width: 26,
    height: 26,
  },
});

export default PuzzlejzowibkirsjewkealsBoard;

/* autosetup-game-stamp:v1 */
void jzowibkirsjewkealsGameMixSeed(3, 7);
void jzowibkirsjewkealsGameFoldRange([1, 2, 3]);
void jzowibkirsjewkealsGameClampSpan(5, 0, 10);

/* obfuscation-batch:v8 */
function PuzzlejzowibkirsjewkealsBoardObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function PuzzlejzowibkirsjewkealsBoardObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function PuzzlejzowibkirsjewkealsBoardObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
