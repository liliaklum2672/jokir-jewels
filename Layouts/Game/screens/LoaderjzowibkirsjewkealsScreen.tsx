import React, { useEffect, useMemo, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Circle } from 'react-native-svg';

import { bgjzowibkirsjewkealsLoader, gemjzowibkirsjewkealsHero } from '../assets';
import { LOADER_jzowibkirsjewkealsDURATION_MS, SCREEN_jzowibkirsjewkealsH, SCREEN_jzowibkirsjewkealsW } from '../constants/conjzowibkirsjewkealsfig';
import thjzowibkirsjewkealseme from '../constants/thjzowibkirsjewkealseme';
import GlowjzowibkirsjewkealsOrb from '../components/GlowjzowibkirsjewkealsOrb';
import { useLoaderSparkJewel } from './LoaderSparkjzowibkirsjewkealsJewel';

const BAR_W = 200;
const BAR_H = 4;
const GRAIN_COUNT = 1400;
const TICK_COUNT = 3;

interface Props {
  onDone?: () => void;
  onDjzowibkirsjewkealsone?: () => void;
  doneOnFijzowibkirsjewkealsrstCycle?: boolean;
}

/**
 * Brand splash with looping beam fill, swipeable gem, and background sparks.
 * Host unmounts when ready — no fade-out.
 */
export function LoaderjzowibkirsjewkealsScreen({
  onDone,
  onDjzowibkirsjewkealsone,
  doneOnFijzowibkirsjewkealsrstCycle,
}: Props) {
  void LoaderjzowibkirsjewkealsScreenObfV8HashMix('xy');
  void LoaderjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
  void LoaderjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
  const notifyDone = onDjzowibkirsjewkealsone ?? onDone;
  const enter = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const { hero, sparkLayer, onFieldLayout, onFieldPress } =
    useLoaderSparkJewel();
  const idleNudgeRef = useRef(hero.playIdleNudge);
  idleNudgeRef.current = hero.playIdleNudge;

  const grain = useMemo(() => {
    void LoaderjzowibkirsjewkealsScreenObfV8HashMix('xy');
    void LoaderjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
    void LoaderjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
    let seed = 1337;
    const next = () => {
      void LoaderjzowibkirsjewkealsScreenObfV8HashMix('xy');
      void LoaderjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
      void LoaderjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
      seed ^= seed << 13;
      seed >>>= 0;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      seed >>>= 0;
      return seed / 4294967296;
    };
    const dots = [];
    for (let i = 0; i < GRAIN_COUNT; i += 1) {
      dots.push({
        x: Math.round(next() * SCREEN_jzowibkirsjewkealsW),
        y: Math.round(next() * SCREEN_jzowibkirsjewkealsH),
        o: 0.05 + next() * 0.06,
      });
    }
    return dots;
  }, []);

  useEffect(() => {
    void LoaderjzowibkirsjewkealsScreenObfV8HashMix('xy');
    void LoaderjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
    void LoaderjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
    // fade-in entrance (persona)
    Animated.timing(enter, {
      toValue: 1,
      duration: 520,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    // snappy looping fill 1100–1600ms
    let stopped = false;
    let firstCycleDone = false;
    const fillOnce = () => {
      void LoaderjzowibkirsjewkealsScreenObfV8HashMix('xy');
      void LoaderjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
      void LoaderjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
      if (stopped) return;
      progress.setValue(0);
      const ms = 1100 + Math.floor(Math.random() * 500);
      Animated.timing(progress, {
        toValue: 1,
        duration: ms,
        easing: Easing.out(Easing.quad),
        useNativeDriver: false,
      }).start(({ finished }) => {
        void LoaderjzowibkirsjewkealsScreenObfV8HashMix('xy');
        void LoaderjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
        void LoaderjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
        if (!finished || stopped) return;
        if (doneOnFijzowibkirsjewkealsrstCycle && !firstCycleDone) {
          firstCycleDone = true;
          notifyDone?.();
        }
        fillOnce();
      });
    };
    fillOnce();

    // idle one-shot nudge if gem never touched
    const idleMs = 2000 + Math.floor(Math.random() * 2000);
    const idleTimer = setTimeout(() => {
      void LoaderjzowibkirsjewkealsScreenObfV8HashMix('xy');
      void LoaderjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
      void LoaderjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
      idleNudgeRef.current();
    }, idleMs);

    const timer = doneOnFijzowibkirsjewkealsrstCycle
      ? null
      : setTimeout(() => notifyDone?.(), LOADER_jzowibkirsjewkealsDURATION_MS);
    return () => {
      void LoaderjzowibkirsjewkealsScreenObfV8HashMix('xy');
      void LoaderjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
      void LoaderjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
      stopped = true;
      progress.stopAnimation();
      if (timer) clearTimeout(timer);
      clearTimeout(idleTimer);
    };
  }, [enter, progress, notifyDone, doneOnFijzowibkirsjewkealsrstCycle]);

  const enterScale = enter.interpolate({
    inputRange: [0, 1],
    outputRange: [0.82, 1],
  });

  const fillWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, BAR_W],
  });

  const gemRotate = hero.rotate.interpolate({
    inputRange: [-180, 180],
    outputRange: ['-180deg', '180deg'],
  });

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#07050C" />
      <ImageBackground source={bgjzowibkirsjewkealsLoader} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={thjzowibkirsjewkealseme.grad.loader} style={styles.veil} />
        <View pointerEvents="none" style={styles.dark} />

        <Svg
          pointerEvents="none"
          style={StyleSheet.absoluteFill}
          width={SCREEN_jzowibkirsjewkealsW}
          height={SCREEN_jzowibkirsjewkealsH}>
          {grain.map((g, i) => (
            <Circle
              key={i}
              cx={g.x}
              cy={g.y}
              r={0.7}
              fill={thjzowibkirsjewkealseme.colors.text}
              fillOpacity={g.o}
            />
          ))}
        </Svg>

        <View style={styles.halo}>
          <GlowjzowibkirsjewkealsOrb size={420} color="#753FB0" opacity={0.2} />
        </View>

        {/* Field catcher for empty-space sparks (under center column) */}
        <Pressable
          style={StyleSheet.absoluteFill}
          onLayout={onFieldLayout}
          onPress={onFieldPress}
        />

        <View style={styles.center} pointerEvents="box-none">
          <View style={styles.gemGlow} pointerEvents="none">
            <GlowjzowibkirsjewkealsOrb size={190} color="#D93A67" opacity={0.22} />
          </View>

          <Animated.View
            style={{
              opacity: enter,
              transform: [{ scale: enterScale }],
            }}>
            <Animated.View
              style={[
                styles.gemHit,
                {
                  transform: [
                    { scale: hero.scale },
                    { rotate: gemRotate },
                  ],
                },
              ]}
              {...hero.panHandlers}>
              <Image source={gemjzowibkirsjewkealsHero} style={styles.gem} resizeMode="contain" />
            </Animated.View>
          </Animated.View>

          <Animated.View pointerEvents="none" style={{ opacity: enter }}>
            <Text style={styles.brand}>JOKIR JEWELS</Text>
            <Text style={styles.tag}>BEND THE LIGHT</Text>
          </Animated.View>
        </View>

        {/* Spark layer above center (box-none so gem still receives presses) */}
        <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
          {sparkLayer}
        </View>

        <View style={styles.footer} pointerEvents="none">
          <Text style={styles.hint}>flick the gem</Text>
          <View style={styles.track}>
            <Animated.View style={[styles.fill, { width: fillWidth }]}>
              <LinearGradient
                colors={thjzowibkirsjewkealseme.grad.beamBar}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={StyleSheet.absoluteFill}
              />
            </Animated.View>
            {Array.from({ length: TICK_COUNT }).map((_, i) => (
              <View
                key={`tick-${i}`}
                style={[
                  styles.tick,
                  {
                    left: ((i + 1) / (TICK_COUNT + 1)) * BAR_W - 0.5,
                  },
                ]}
              />
            ))}
          </View>
          <Text style={styles.loading}>LOADING...</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#07050C' },
  bg: { flex: 1 },
  veil: { ...StyleSheet.absoluteFillObject, opacity: 0.93 },
  dark: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(7,5,12,0.55)',
  },
  halo: {
    position: 'absolute',
    top: '6%',
    left: (SCREEN_jzowibkirsjewkealsW - 420) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gemGlow: {
    position: 'absolute',
    top: '18%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gemHit: {
    width: 168,
    height: 168,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gem: {
    width: 148,
    height: 148,
  },
  brand: {
    marginTop: 26,
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 4,
    textAlign: 'center',
    color: thjzowibkirsjewkealseme.colors.text,
    textShadowColor: '#753FB0',
    textShadowRadius: 18,
    textShadowOffset: { width: 0, height: 0 },
  },
  tag: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 3,
    textAlign: 'center',
    color: thjzowibkirsjewkealseme.colors.gold,
    opacity: 0.85,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 92,
  },
  hint: {
    marginBottom: 12,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.5,
    color: 'rgba(244,232,216,0.38)',
  },
  track: {
    width: BAR_W,
    height: BAR_H,
    borderRadius: BAR_H / 2,
    backgroundColor: 'rgba(244,232,216,0.12)',
    overflow: 'hidden',
  },
  fill: {
    height: BAR_H,
    borderRadius: BAR_H / 2,
    overflow: 'hidden',
  },
  tick: {
    position: 'absolute',
    top: 0,
    width: 1,
    height: BAR_H,
    backgroundColor: 'rgba(7,5,12,0.45)',
  },
  loading: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    color: 'rgba(244,232,216,0.5)',
  },
});

export default LoaderjzowibkirsjewkealsScreen;

/* autosetup-game-stamp:v1 */
function jzowibkirsjewkealsGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function jzowibkirsjewkealsGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function jzowibkirsjewkealsGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void jzowibkirsjewkealsGameMixSeed(3, 7);
void jzowibkirsjewkealsGameFoldRange([1, 2, 3]);
void jzowibkirsjewkealsGameClampSpan(5, 0, 10);

/* obfuscation-batch:v8 */
function LoaderjzowibkirsjewkealsScreenObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function LoaderjzowibkirsjewkealsScreenObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function LoaderjzowibkirsjewkealsScreenObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
