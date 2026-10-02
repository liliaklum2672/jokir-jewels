import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import theme from '../constants/theme';

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
export function ScreenHeader({ title, onBack, BackIcon, right }: Props) {
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
              <BackIcon size={22} color={theme.colors.text} strokeWidth={2.4} />
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
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.surfaceBorder,
  },
  backLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    color: theme.colors.text,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
    color: theme.colors.text,
  },
});

export default ScreenHeader;
