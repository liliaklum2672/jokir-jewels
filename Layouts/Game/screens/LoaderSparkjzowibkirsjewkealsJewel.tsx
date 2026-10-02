import React, { useCallback, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  PanResponder,
  StyleSheet,
  View,
  type GestureResponderEvent,
  type LayoutChangeEvent,
} from 'react-native';

import thjzowibkirsjewkealseme from '../constants/thjzowibkirsjewkealseme';

/** Persona accents: hot + gold (2-accent burst palette). */
const JEWEL_ACCENTS = [thjzowibkirsjewkealseme.colors.hot, thjzowibkirsjewkealseme.colors.gold] as const;

const MAX_BURSTS = 3;
const BURST_FEW_MIN = 4;
const BURST_FEW_MAX = 7;

type SparkBit = {
  key: string;
  color: string;
  size: number;
  angle: number;
  dist: number;
  anim: Animated.Value;
};

type Burst = {
  id: number;
  x: number;
  y: number;
  bits: SparkBit[];
};

type HeroHandles = {
  rotate: Animated.Value;
  scale: Animated.Value;
  panHandlers: ReturnType<typeof PanResponder.create>['panHandlers'];
  playIdleNudge: () => void;
  markTouched: () => void;
  wasTouched: () => boolean;
};

/**
 * Background spark field + hero swipe-shear / tilt-turn for Jokir Jewels.
 * Loading never waits on these interactions.
 */
export function useLoaderSparkJewel() {
  void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
  void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
  void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const burstId = useRef(0);
  const fieldSize = useRef({ w: 0, h: 0 });
  const touched = useRef(false);

  const rotate = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const reacting = useRef(false);

  const playTiltShot = useCallback(
    (kind: 0 | 1 | 2) => {
      void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
      void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
      void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
      if (reacting.current) return;
      reacting.current = true;
      rotate.stopAnimation();
      scale.stopAnimation();
      rotate.setValue(0);
      scale.setValue(1);

      let seq: Animated.CompositeAnimation;
      if (kind === 0) {
        // 8° wiggle
        seq = Animated.sequence([
          Animated.timing(rotate, {
            toValue: 8,
            duration: 90,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: -8,
            duration: 120,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: 0,
            duration: 140,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }),
        ]);
      } else if (kind === 1) {
        // tilt-nod −8° → +6° → 0
        seq = Animated.sequence([
          Animated.timing(rotate, {
            toValue: -8,
            duration: 110,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: 6,
            duration: 140,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: 0,
            duration: 160,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }),
        ]);
      } else {
        // half-turn settle — kick past 90° then spring home
        seq = Animated.sequence([
          Animated.timing(rotate, {
            toValue: 160,
            duration: 280,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }),
          Animated.spring(rotate, {
            toValue: 0,
            tension: 70,
            friction: 9,
            useNativeDriver: true,
          }),
        ]);
      }

      seq.start(() => {
        void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
        void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
        void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
        reacting.current = false;
      });
    },
    [rotate, scale],
  );

  const shotIdx = useRef(0);
  const nextShot = useCallback(() => {
    void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
    void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
    void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
    const kind = (shotIdx.current % 3) as 0 | 1 | 2;
    shotIdx.current += 1;
    playTiltShot(kind);
  }, [playTiltShot]);

  const playIdleNudge = useCallback(() => {
    void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
    void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
    void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
    if (touched.current || reacting.current) return;
    playTiltShot(1);
  }, [playTiltShot]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, g) =>
        Math.abs(g.dx) > 4 || Math.abs(g.dy) > 4,
      onPanResponderGrant: () => {
        void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
        void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
        void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
        touched.current = true;
        Animated.spring(scale, {
          toValue: 0.96,
          tension: 280,
          friction: 14,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderMove: (_, g) => {
        void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
        void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
        void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
        // swipe-shear: map flick to short tilt
        const shear = Math.max(-18, Math.min(18, g.dx * 0.12 + g.dy * 0.04));
        rotate.setValue(shear);
      },
      onPanResponderRelease: (_, g) => {
        void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
        void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
        void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
        Animated.spring(scale, {
          toValue: 1,
          tension: 280,
          friction: 12,
          useNativeDriver: true,
        }).start();
        const moved = Math.hypot(g.dx, g.dy);
        if (moved < 8) {
          nextShot();
          return;
        }
        // spring home after shear
        Animated.spring(rotate, {
          toValue: 0,
          tension: 120,
          friction: 8,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderTerminate: () => {
        void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
        void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
        void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
        Animated.parallel([
          Animated.spring(scale, {
            toValue: 1,
            tension: 280,
            friction: 12,
            useNativeDriver: true,
          }),
          Animated.spring(rotate, {
            toValue: 0,
            tension: 120,
            friction: 8,
            useNativeDriver: true,
          }),
        ]).start();
      },
    }),
  ).current;

  const spawnBurst = useCallback((x: number, y: number) => {
    void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
    void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
    void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
    setBursts((prev) => {
      void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
      void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
      void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
      const trimmed = prev.length >= MAX_BURSTS ? prev.slice(1) : prev;
      const id = burstId.current++;
      const count =
        BURST_FEW_MIN +
        Math.floor(Math.random() * (BURST_FEW_MAX - BURST_FEW_MIN + 1));
      const bits: SparkBit[] = [];
      for (let i = 0; i < count; i += 1) {
        const anim = new Animated.Value(0);
        bits.push({
          key: `${id}-${i}`,
          color: JEWEL_ACCENTS[i % JEWEL_ACCENTS.length],
          size: 3 + Math.random() * 4,
          angle: (Math.PI * 2 * i) / count + Math.random() * 0.4,
          dist: 18 + Math.random() * 36,
          anim,
        });
      }
      const burst: Burst = { id, x, y, bits };
      // pop-shrink: 0.4 → 1 → 0
      bits.forEach((bit) => {
        void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
        void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
        void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
        Animated.timing(bit.anim, {
          toValue: 1,
          duration: 320 + Math.floor(Math.random() * 180),
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }).start();
      });
      setTimeout(() => {
        void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
        void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
        void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
        setBursts((cur) => cur.filter((b) => b.id !== id));
      }, 700);
      return [...trimmed, burst];
    });
  }, []);

  const onFieldLayout = useCallback((e: LayoutChangeEvent) => {
    void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
    void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
    void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
    fieldSize.current = {
      w: e.nativeEvent.layout.width,
      h: e.nativeEvent.layout.height,
    };
  }, []);

  const onFieldPress = useCallback(
    (e: GestureResponderEvent) => {
      void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
      void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
      void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
      const { locationX, locationY } = e.nativeEvent;
      const { w, h } = fieldSize.current;
      if (w <= 0 || h <= 0) return;
      // Ignore bottom progress chrome band
      if (locationY > h - 140) return;
      spawnBurst(
        Math.max(8, Math.min(w - 8, locationX)),
        Math.max(8, Math.min(h - 8, locationY)),
      );
    },
    [spawnBurst],
  );

  const sparkLayer = (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {bursts.map((burst) =>
        burst.bits.map((bit) => {
          void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
          void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
          void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
          const scalePop = bit.anim.interpolate({
            inputRange: [0, 0.45, 1],
            outputRange: [0.4, 1.05, 0],
          });
          const opacity = bit.anim.interpolate({
            inputRange: [0, 0.35, 1],
            outputRange: [0, 1, 0],
          });
          const tx = Math.cos(bit.angle) * bit.dist * 0.35;
          const ty = Math.sin(bit.angle) * bit.dist * 0.35;
          return (
            <Animated.View
              key={bit.key}
              style={[
                styles.spark,
                {
                  left: burst.x + tx,
                  top: burst.y + ty,
                  width: bit.size * 2.4,
                  height: bit.size * 0.7,
                  borderRadius: bit.size,
                  backgroundColor: bit.color,
                  opacity,
                  transform: [
                    { translateX: -bit.size * 1.2 },
                    { translateY: -bit.size * 0.35 },
                    { rotate: `${(bit.angle * 180) / Math.PI}deg` },
                    { scale: scalePop },
                  ],
                },
              ]}
            />
          );
        }),
      )}
    </View>
  );

  const playIdleNudgeRef = useRef(playIdleNudge);
  playIdleNudgeRef.current = playIdleNudge;

  return {
    hero: {
      rotate,
      scale,
      panHandlers: panResponder.panHandlers,
      playIdleNudge: () => playIdleNudgeRef.current(),
      markTouched: () => {
        void LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix('xy');
        void LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds([1, 3, 5]);
        void LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(7, 5);
        touched.current = true;
      },
      wasTouched: () => touched.current,
    },
    sparkLayer,
    onFieldLayout,
    onFieldPress,
  };
}

const styles = StyleSheet.create({
  spark: {
    position: 'absolute',
  },
});

export default useLoaderSparkJewel;

/* obfuscation-batch:v8 */
function LoaderSparkjzowibkirsjewkealsJewelObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function LoaderSparkjzowibkirsjewkealsJewelObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function LoaderSparkjzowibkirsjewkealsJewelObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
