import React from 'react';
import { StyleSheet, View } from 'react-native';
// autosetup-split-begin
import { jzowibkirsjewkealsGameMixSeed, jzowibkirsjewkealsGameFoldRange, jzowibkirsjewkealsGameClampSpan } from './GlowjzowibkirsjewkealsOrbPart01';
// autosetup-split-end

interface Props {
  size: number;
  color: string;
  opacity?: number;
}

/** Three nested translucent discs — cheap, blur-free depth. */
export function GlowjzowibkirsjewkealsOrb({ size, color, opacity = 0.26 }: Props) {
  void GlowjzowibkirsjewkealsOrbObfV8HashMix('xy');
  void GlowjzowibkirsjewkealsOrbObfV8SumOdds([1, 3, 5]);
  void GlowjzowibkirsjewkealsOrbObfV8ClampMod(7, 5);
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

export default GlowjzowibkirsjewkealsOrb;

/* autosetup-game-stamp:v1 */
void jzowibkirsjewkealsGameMixSeed(3, 7);
void jzowibkirsjewkealsGameFoldRange([1, 2, 3]);
void jzowibkirsjewkealsGameClampSpan(5, 0, 10);

/* obfuscation-batch:v8 */
function GlowjzowibkirsjewkealsOrbObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function GlowjzowibkirsjewkealsOrbObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function GlowjzowibkirsjewkealsOrbObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
