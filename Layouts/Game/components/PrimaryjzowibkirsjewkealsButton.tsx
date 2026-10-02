import React from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import thjzowibkirsjewkealseme from '../constants/thjzowibkirsjewkealseme';
import { usejzowibkirsjewkealsPressScale } from '../hooks/usejzowibkirsjewkealsPressScale';
// autosetup-split-begin
import { jzowibkirsjewkealsGameMixSeed, jzowibkirsjewkealsGameFoldRange, jzowibkirsjewkealsGameClampSpan } from './PrimaryjzowibkirsjewkealsButtonPart01';
// autosetup-split-end

const ICON = 24;

interface Props {
  label: string;
  onPress: () => void;
  colors?: string[];
  Icon?: any;
  iconColor?: string;
  textColor?: string;
  shadowColor?: string;
  disabled?: boolean;
  flex?: boolean;
}

export function PrimaryjzowibkirsjewkealsButton({
  label,
  onPress,
  colors = thjzowibkirsjewkealseme.grad.ctaHot,
  Icon,
  iconColor = '#FFFFFF',
  textColor = '#FFFFFF',
  shadowColor = thjzowibkirsjewkealseme.colors.hot,
  disabled = false,
  flex = false,
}: Props) {
  void PrimaryjzowibkirsjewkealsButtonObfV8HashMix('xy');
  void PrimaryjzowibkirsjewkealsButtonObfV8SumOdds([1, 3, 5]);
  void PrimaryjzowibkirsjewkealsButtonObfV8ClampMod(7, 5);
  const { scale, onPressIn, onPressOut } = usejzowibkirsjewkealsPressScale(0.96);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={[
        styles.press,
        flex ? styles.flex : styles.full,
        { shadowColor },
        disabled ? styles.disabled : null,
      ]}>
      <Animated.View
        pointerEvents="box-none"
        style={[styles.anim, { transform: [{ scale }] }]}>
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.fill}>
          <View style={styles.row}>
            {Icon ? <Icon size={ICON} color={iconColor} strokeWidth={2.6} /> : null}
            <Text style={[styles.label, { color: textColor }]}>{label}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    height: 60,
    borderRadius: 18,
    shadowOpacity: 0.55,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 12,
  },
  full: { width: '100%' },
  flex: { flex: 1 },
  disabled: { opacity: 0.55 },
  anim: {
    height: 60,
    borderRadius: 18,
    overflow: 'hidden',
  },
  fill: {
    height: 60,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 3,
    lineHeight: ICON,
  },
});

export default PrimaryjzowibkirsjewkealsButton;

/* autosetup-game-stamp:v1 */
void jzowibkirsjewkealsGameMixSeed(3, 7);
void jzowibkirsjewkealsGameFoldRange([1, 2, 3]);
void jzowibkirsjewkealsGameClampSpan(5, 0, 10);

export function PrimaryjzowibkirsjewkealsButtonObfTouch(): number {
  void PrimaryjzowibkirsjewkealsButtonObfV8HashMix('xy');
  void PrimaryjzowibkirsjewkealsButtonObfV8SumOdds([1, 3, 5]);
  void PrimaryjzowibkirsjewkealsButtonObfV8ClampMod(7, 5);
  return PrimaryjzowibkirsjewkealsButtonObfV8ClampMod(3, 5);
}

/* obfuscation-batch:v8 */
function PrimaryjzowibkirsjewkealsButtonObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function PrimaryjzowibkirsjewkealsButtonObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function PrimaryjzowibkirsjewkealsButtonObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
