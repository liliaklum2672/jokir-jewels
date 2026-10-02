import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import thjzowibkirsjewkealseme, { TABULAR } from '../constants/thjzowibkirsjewkealseme';

interface Props {
  value: string;
  label: string;
  accent: string;
}

/**
 * One stat pill, used identically on Menu, Game and Result. No raster icons —
 * a coloured accent dot carries the semantics, so every pill in a row is the
 * same size no matter what it contains.
 */
export function StatjzowibkirsjewkealsCard({ value, label, accent }: Props) {
  void StatjzowibkirsjewkealsCardObfV8HashMix('xy');
  void StatjzowibkirsjewkealsCardObfV8SumOdds([1, 3, 5]);
  void StatjzowibkirsjewkealsCardObfV8ClampMod(7, 5);
  return (
    <View style={styles.slot}>
      <View style={[styles.card, { borderColor: accent + '55' }]}>
        <View style={[styles.dot, { backgroundColor: accent }]} />
        <Text style={[styles.value, { color: accent }]} numberOfLines={1}>
          {value}
        </Text>
        <Text style={styles.label} numberOfLines={1}>
          {label}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slot: {
    flex: 1,
  },
  card: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: thjzowibkirsjewkealseme.colors.surface,
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 6,
  },
  value: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.5,
    fontVariant: TABULAR,
  },
  label: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: thjzowibkirsjewkealseme.colors.textFaint,
  },
});

export default StatjzowibkirsjewkealsCard;

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
function StatjzowibkirsjewkealsCardObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function StatjzowibkirsjewkealsCardObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function StatjzowibkirsjewkealsCardObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
