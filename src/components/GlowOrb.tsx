import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  size: number;
  color: string;
  opacity?: number;
}

/** Three nested translucent discs — cheap, blur-free depth. */
export function GlowOrb({ size, color, opacity = 0.26 }: Props) {
  const mid = size * 0.66;
  const core = size * 0.38;
  return (
    <View
      pointerEvents="none"
      style={[
        styles.orb,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
          opacity,
        },
      ]}>
      <View
        style={{
          width: mid,
          height: mid,
          borderRadius: mid / 2,
          backgroundColor: color,
          opacity: 0.7,
        }}
      />
      <View
        style={[
          styles.core,
          {
            width: core,
            height: core,
            borderRadius: core / 2,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  orb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  core: {
    position: 'absolute',
    opacity: 0.9,
  },
});

export default GlowOrb;
