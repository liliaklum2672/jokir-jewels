import React from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import theme from '../constants/theme';
import { usePressScale } from '../hooks/usePressScale';

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

export function PrimaryButton({
  label,
  onPress,
  colors = theme.grad.ctaHot,
  Icon,
  iconColor = '#FFFFFF',
  textColor = '#FFFFFF',
  shadowColor = theme.colors.hot,
  disabled = false,
  flex = false,
}: Props) {
  const { scale, onPressIn, onPressOut } = usePressScale(0.96);

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

export default PrimaryButton;
