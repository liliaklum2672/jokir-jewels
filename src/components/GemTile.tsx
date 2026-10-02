import React, { memo } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { GEM_SPRITES } from '../assets';
import theme from '../constants/theme';
import type { CellType } from '../game/beam';

interface Props {
  index: number;
  type: CellType;
  size: number;
  selected: boolean;
  hinted: boolean;
  onPress: (index: number) => void;
}

function GemTileBase({ index, type, size, selected, hinted, onPress }: Props) {
  const sprite = type === 'empty' ? null : GEM_SPRITES[type];
  const art = Math.round(size * 0.72);
  const inner = size - 4;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`cell ${index}`}
      onPress={() => onPress(index)}
      style={{ width: size, height: size, padding: 2 }}>
      <View
        style={[
          styles.cell,
          { width: inner, height: inner },
          selected ? styles.selected : null,
          hinted && !selected ? styles.hinted : null,
        ]}>
        {sprite ? (
          <Image
            source={sprite}
            style={{ width: art, height: art }}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.void} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cell: {
    borderRadius: 12,
    backgroundColor: 'rgba(244,232,216,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(244,232,216,0.10)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderWidth: 2,
    borderColor: theme.colors.gold,
    backgroundColor: 'rgba(239,192,76,0.14)',
  },
  hinted: {
    borderWidth: 2,
    borderColor: theme.colors.teal,
    backgroundColor: 'rgba(52,185,171,0.12)',
  },
  void: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(244,232,216,0.14)',
  },
});

export const GemTile = memo(GemTileBase);
export default GemTile;
