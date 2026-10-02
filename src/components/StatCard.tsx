import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import theme, { TABULAR } from '../constants/theme';

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
export function StatCard({ value, label, accent }: Props) {
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
    backgroundColor: theme.colors.surface,
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
    color: theme.colors.textFaint,
  },
});

export default StatCard;
