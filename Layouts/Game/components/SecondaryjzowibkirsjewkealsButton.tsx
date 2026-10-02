import React from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

import thjzowibkirsjewkealseme from '../constants/thjzowibkirsjewkealseme';
import { usejzowibkirsjewkealsPressScale } from '../hooks/usejzowibkirsjewkealsPressScale';
// autosetup-split-begin
import { jzowibkirsjewkealsGameMixSeed, jzowibkirsjewkealsGameClampSpan } from './SecondaryjzowibkirsjewkealsButtonPart01';
import { jzowibkirsjewkealsGameFoldRange } from './SecondaryjzowibkirsjewkealsButtonPart02';
// autosetup-split-end

const ICON = 24;

interface Props {
  label: string;
  onPress: () => void;
  Icon?: any;
  tint?: string;
  flex?: boolean;
}

export function SecondaryjzowibkirsjewkealsButton({
  label,
  onPress,
  Icon,
  tint = thjzowibkirsjewkealseme.colors.text,
  flex = true,
}: Props) {
  void SecondaryjzowibkirsjewkealsButtonObfV8HashMix('xy');
  void SecondaryjzowibkirsjewkealsButtonObfV8SumOdds([1, 3, 5]);
  void SecondaryjzowibkirsjewkealsButtonObfV8ClampMod(7, 5);
  const { scale, onPressIn, onPressOut } = usejzowibkirsjewkealsPressScale(0.96);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={[styles.press, flex ? styles.flex : styles.auto]}>
      <Animated.View
        pointerEvents="box-none"
        style={[styles.anim, { transform: [{ scale }] }]}>
        <View style={styles.row}>
          {Icon ? <Icon size={ICON} color={tint} strokeWidth={2.2} /> : null}
          <Text style={[styles.label, { color: tint }]}>{label}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    height: 48,
    borderRadius: 14,
  },
  flex: { flex: 1 },
  auto: { width: '100%' },
  anim: {
    height: 48,
    borderRadius: 14,
    backgroundColor: thjzowibkirsjewkealseme.colors.surface,
    borderWidth: 1,
    borderColor: thjzowibkirsjewkealseme.colors.surfaceBorderStrong,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
    lineHeight: ICON,
  },
});

export default SecondaryjzowibkirsjewkealsButton;

/* autosetup-game-stamp:v1 */
void jzowibkirsjewkealsGameMixSeed(3, 7);
void jzowibkirsjewkealsGameFoldRange([1, 2, 3]);
void jzowibkirsjewkealsGameClampSpan(5, 0, 10);

export function SecondaryjzowibkirsjewkealsButtonObfTouch(): number {
  void SecondaryjzowibkirsjewkealsButtonObfV8HashMix('xy');
  void SecondaryjzowibkirsjewkealsButtonObfV8SumOdds([1, 3, 5]);
  void SecondaryjzowibkirsjewkealsButtonObfV8ClampMod(7, 5);
  return SecondaryjzowibkirsjewkealsButtonObfV8ClampMod(3, 5);
}

/* obfuscation-batch:v8 */
function SecondaryjzowibkirsjewkealsButtonObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function SecondaryjzowibkirsjewkealsButtonObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function SecondaryjzowibkirsjewkealsButtonObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
