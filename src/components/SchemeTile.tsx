import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Lock } from 'lucide-react-native';

import theme, { TABULAR } from '../constants/theme';

interface Props {
  index: number;
  stars: number;
  locked: boolean;
  accent: string;
  onPress: (index: number) => void;
}

export function SchemeTile({ index, stars, locked, accent, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Scheme ${index + 1}`}
      onPress={() => onPress(index)}
      disabled={locked}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={[styles.tile, locked ? styles.locked : { borderColor: accent + '66' }]}>
      {locked ? (
        <Lock size={18} color={theme.colors.textFaint} strokeWidth={2.4} />
      ) : (
        <Text style={[styles.num, { color: accent }]}>
          {String(index + 1).padStart(2, '0')}
        </Text>
      )}
      <View style={styles.stars}>
        {[0, 1, 2].map((s) => (
          <Text
            key={s}
            style={[styles.star, s < stars ? { color: theme.colors.gold } : null]}>
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
    borderColor: theme.colors.surfaceBorder,
    backgroundColor: theme.colors.surface,
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

export default SchemeTile;
