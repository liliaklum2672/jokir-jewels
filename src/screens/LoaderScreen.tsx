import React, { useEffect, useMemo, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Circle } from 'react-native-svg';

import { bgLoader, gemHero } from '../assets';
import { LOADER_DURATION_MS, SCREEN_H, SCREEN_W } from '../constants/config';
import theme from '../constants/theme';
import GlowOrb from '../components/GlowOrb';

const BAR_W = 200;
const BAR_H = 4;
const GRAIN_COUNT = 1400;

interface Props {
  onDone: () => void;
}

/**
 * Brand card. Deliberately darker than every other screen and free of any
 * interactive control — it is a still frame with a progress indicator.
 */
export function LoaderScreen({ onDone }: Props) {
  const enter = useRef(new Animated.Value(0)).current;
  const breath = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(0)).current;

  const grain = useMemo(() => {
    let seed = 1337;
    const next = () => {
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
        x: Math.round(next() * SCREEN_W),
        y: Math.round(next() * SCREEN_H),
        o: 0.05 + next() * 0.06,
      });
    }
    return dots;
  }, []);

  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 520,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(breath, {
          toValue: 1,
          duration: 1800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(breath, {
          toValue: 0,
          duration: 1800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.timing(slide, {
      toValue: 1,
      duration: LOADER_DURATION_MS - 400,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(onDone, LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, [enter, breath, slide, onDone]);

  const gemScale = Animated.add(
    enter.interpolate({ inputRange: [0, 1], outputRange: [0.82, 1] }),
    breath.interpolate({ inputRange: [0, 1], outputRange: [0, 0.045] }),
  );
  const shift = slide.interpolate({
    inputRange: [0, 1],
    outputRange: [-BAR_W, 0],
  });

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#07050C" />
      <ImageBackground source={bgLoader} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={theme.grad.loader} style={styles.veil} />
        <View pointerEvents="none" style={styles.dark} />

        <Svg
          pointerEvents="none"
          style={StyleSheet.absoluteFill}
          width={SCREEN_W}
          height={SCREEN_H}>
          {grain.map((g, i) => (
            <Circle
              key={i}
              cx={g.x}
              cy={g.y}
              r={0.7}
              fill={theme.colors.text}
              fillOpacity={g.o}
            />
          ))}
        </Svg>

        <View style={styles.halo}>
          <GlowOrb size={420} color="#753FB0" opacity={0.2} />
        </View>

        <View style={styles.center}>
          <View style={styles.gemGlow}>
            <GlowOrb size={190} color="#D93A67" opacity={0.22} />
          </View>
          <Animated.View
            pointerEvents="none"
            style={{ opacity: enter, transform: [{ scale: gemScale }] }}>
            <Image source={gemHero} style={styles.gem} resizeMode="contain" />
          </Animated.View>

          <Animated.View pointerEvents="none" style={{ opacity: enter }}>
            <Text style={styles.brand}>JOKIR JEWELS</Text>
            <Text style={styles.tag}>BEND THE LIGHT</Text>
          </Animated.View>
        </View>

        <View style={styles.footer}>
          <View style={styles.track}>
            <Animated.View
              pointerEvents="none"
              style={[styles.fillWrap, { transform: [{ translateX: shift }] }]}>
              <LinearGradient
                colors={theme.grad.beamBar}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.fill}
              />
            </Animated.View>
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
    left: (SCREEN_W - 420) / 2,
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
    color: theme.colors.text,
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
    color: theme.colors.gold,
    opacity: 0.85,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 92,
  },
  track: {
    width: BAR_W,
    height: BAR_H,
    borderRadius: BAR_H / 2,
    backgroundColor: 'rgba(244,232,216,0.12)',
    overflow: 'hidden',
  },
  fillWrap: {
    width: BAR_W,
    height: BAR_H,
  },
  fill: {
    width: BAR_W,
    height: BAR_H,
    borderRadius: BAR_H / 2,
  },
  loading: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    color: 'rgba(244,232,216,0.5)',
  },
});

export default LoaderScreen;
