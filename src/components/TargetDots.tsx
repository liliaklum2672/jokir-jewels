import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { Target } from '../game/beam';

interface Props {
  targets: Target[];
  lit: boolean[];
}

/** Three facet markers in the header — filled once their beam arrives. */
export function TargetDots({ targets, lit }: Props) {
  return (
    <View style={styles.row}>
      {targets.map((t, i) => (
        <View
          key={`${t.r}-${t.c}-${t.side}`}
          style={[
            styles.dot,
            { backgroundColor: t.color, borderColor: t.color },
            lit[i] ? styles.on : styles.off,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  on: { opacity: 1 },
  off: { opacity: 0.22 },
});

export default TargetDots;
