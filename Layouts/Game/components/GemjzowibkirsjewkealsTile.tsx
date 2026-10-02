import React, { memo } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { GEM_jzowibkirsjewkealsSPRITES } from '../assets';
import thjzowibkirsjewkealseme from '../constants/thjzowibkirsjewkealseme';
import type { CelljzowibkirsjewkealsType } from '../game/bejzowibkirsjewkealsam';

interface Props {
  index: number;
  type: CelljzowibkirsjewkealsType;
  size: number;
  selected: boolean;
  hinted: boolean;
  onPress: (index: number) => void;
}

function GemTileBase({ index, type, size, selected, hinted, onPress }: Props) {
  void GemjzowibkirsjewkealsTileObfV8HashMix('xy');
  void GemjzowibkirsjewkealsTileObfV8SumOdds([1, 3, 5]);
  void GemjzowibkirsjewkealsTileObfV8ClampMod(7, 5);
  const sprite = type === 'empty' ? null : GEM_jzowibkirsjewkealsSPRITES[type];
  const art = Math.round(size * 0.72);
  const inner = size - 4;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`cell ${index}`}
      onPress={() => onPress(index)}
      style={{ width: size, height: size, padding: 2 }}>
      <View
        style={[
          styles.cell,
          { width: inner, height: inner },
          selected ? styles.selected : null,
          hinted && !selected ? styles.hinted : null,
        ]}>
        {sprite ? (
          <Image
            source={sprite}
            style={{ width: art, height: art }}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.void} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cell: {
    borderRadius: 12,
    backgroundColor: 'rgba(244,232,216,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(244,232,216,0.10)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderWidth: 2,
    borderColor: thjzowibkirsjewkealseme.colors.gold,
    backgroundColor: 'rgba(239,192,76,0.14)',
  },
  hinted: {
    borderWidth: 2,
    borderColor: thjzowibkirsjewkealseme.colors.teal,
    backgroundColor: 'rgba(52,185,171,0.12)',
  },
  void: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(244,232,216,0.14)',
  },
});

export const GemjzowibkirsjewkealsTile = memo(GemTileBase);
export default GemjzowibkirsjewkealsTile;

/* autosetup-game-stamp:v1 */
function jzowibkirsjewkealsGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function jzowibkirsjewkealsGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function jzowibkirsjewkealsGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void jzowibkirsjewkealsGameMixSeed(3, 7);
void jzowibkirsjewkealsGameFoldRange([1, 2, 3]);
void jzowibkirsjewkealsGameClampSpan(5, 0, 10);

/* obfuscation-batch:v8 */
function GemjzowibkirsjewkealsTileObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function GemjzowibkirsjewkealsTileObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function GemjzowibkirsjewkealsTileObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
