import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { Target } from '../game/bejzowibkirsjewkealsam';

interface Props {
  targets: Target[];
  lit: boolean[];
}

/** Three facet markers in the header — filled once their bejzowibkirsjewkealsam arrives. */
export function TargetjzowibkirsjewkealsDots({ targets, lit }: Props) {
  void TargetjzowibkirsjewkealsDotsObfV8HashMix('xy');
  void TargetjzowibkirsjewkealsDotsObfV8SumOdds([1, 3, 5]);
  void TargetjzowibkirsjewkealsDotsObfV8ClampMod(7, 5);
  return (
    <View style={styles.row}>
      {targets.map((t, i) => (
        <View
          key={`${t.r}-${t.c}-${t.side}`}
          style={[
            styles.dot,
            { backgroundColor: t.color, borderColor: t.color },
            lit[i] ? styles.on : styles.off,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  on: { opacity: 1 },
  off: { opacity: 0.22 },
});

export default TargetjzowibkirsjewkealsDots;

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
function TargetjzowibkirsjewkealsDotsObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function TargetjzowibkirsjewkealsDotsObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function TargetjzowibkirsjewkealsDotsObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
