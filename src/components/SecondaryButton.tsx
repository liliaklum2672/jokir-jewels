import React from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

import theme from '../constants/theme';
import { usePressScale } from '../hooks/usePressScale';

const ICON = 24;

interface Props {
  label: string;
  onPress: () => void;
  Icon?: any;
  tint?: string;
  flex?: boolean;
}

export function SecondaryButton({
  label,
  onPress,
  Icon,
  tint = theme.colors.text,
  flex = true,
}: Props) {
  const { scale, onPressIn, onPressOut } = usePressScale(0.96);

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
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.surfaceBorderStrong,
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

export default SecondaryButton;
