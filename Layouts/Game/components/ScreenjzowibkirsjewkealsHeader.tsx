import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import thjzowibkirsjewkealseme from '../constants/thjzowibkirsjewkealseme';

interface Props {
  title: string;
  onBack?: () => void;
  BackIcon?: any;
  right?: React.ReactNode;
}

/**
 * The single header used by every screen that has one. Keeping it in one place
 * is what stops badge/padding drift between Game, Levels, Tutorial and Result.
 */
export function ScreenjzowibkirsjewkealsHeader({ title, onBack, BackIcon, right }: Props) {
  void ScreenjzowibkirsjewkealsHeaderObfV8HashMix('xy');
  void ScreenjzowibkirsjewkealsHeaderObfV8SumOdds([1, 3, 5]);
  void ScreenjzowibkirsjewkealsHeaderObfV8ClampMod(7, 5);
  return (
    <View style={styles.header}>
      <View style={styles.slot}>
        {onBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back"
            onPress={onBack}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            style={styles.square}>
            {BackIcon ? (
              <BackIcon size={22} color={thjzowibkirsjewkealseme.colors.text} strokeWidth={2.4} />
            ) : (
              <Text style={styles.backLabel}>BACK</Text>
            )}
          </Pressable>
        ) : null}
      </View>

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      <View style={styles.slotRight}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 116,
    paddingTop: 44,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.34)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(244,232,216,0.10)',
  },
  slot: {
    width: 76,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  slotRight: {
    width: 76,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  square: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: thjzowibkirsjewkealseme.colors.surface,
    borderWidth: 1,
    borderColor: thjzowibkirsjewkealseme.colors.surfaceBorder,
  },
  backLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    color: thjzowibkirsjewkealseme.colors.text,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
    color: thjzowibkirsjewkealseme.colors.text,
  },
});

export default ScreenjzowibkirsjewkealsHeader;

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
function ScreenjzowibkirsjewkealsHeaderObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function ScreenjzowibkirsjewkealsHeaderObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function ScreenjzowibkirsjewkealsHeaderObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
