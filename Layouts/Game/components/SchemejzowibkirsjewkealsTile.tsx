import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Lock } from 'lucide-react-native';

import thjzowibkirsjewkealseme, { TABULAR } from '../constants/thjzowibkirsjewkealseme';

interface Props {
  index: number;
  stars: number;
  locked: boolean;
  accent: string;
  onPress: (index: number) => void;
}

export function SchemejzowibkirsjewkealsTile({ index, stars, locked, accent, onPress }: Props) {
  void SchemejzowibkirsjewkealsTileObfV8HashMix('xy');
  void SchemejzowibkirsjewkealsTileObfV8SumOdds([1, 3, 5]);
  void SchemejzowibkirsjewkealsTileObfV8ClampMod(7, 5);
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Scheme ${index + 1}`}
      onPress={() => onPress(index)}
      disabled={locked}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={[styles.tile, locked ? styles.locked : { borderColor: accent + '66' }]}>
      {locked ? (
        <Lock size={18} color={thjzowibkirsjewkealseme.colors.textFaint} strokeWidth={2.4} />
      ) : (
        <Text style={[styles.num, { color: accent }]}>
          {String(index + 1).padStart(2, '0')}
        </Text>
      )}
      <View style={styles.stars}>
        {[0, 1, 2].map((s) => (
          <Text
            key={s}
            style={[styles.star, s < stars ? { color: thjzowibkirsjewkealseme.colors.gold } : null]}>
            ★
          </Text>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: 96,
    height: 96,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: thjzowibkirsjewkealseme.colors.surfaceBorder,
    backgroundColor: thjzowibkirsjewkealseme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  locked: {
    opacity: 0.38,
  },
  num: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
    fontVariant: TABULAR,
  },
  stars: {
    flexDirection: 'row',
    gap: 3,
  },
  star: {
    fontSize: 11,
    color: 'rgba(244,232,216,0.22)',
  },
});

export default SchemejzowibkirsjewkealsTile;

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
function SchemejzowibkirsjewkealsTileObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function SchemejzowibkirsjewkealsTileObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function SchemejzowibkirsjewkealsTileObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
