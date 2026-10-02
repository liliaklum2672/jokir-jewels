import React, { useEffect, useRef } from 'react';
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
import Svg, { Line } from 'react-native-svg';
import { HelpCircle, LayoutGrid, Play, Settings, Zap } from 'lucide-react-native';

import { bgMenu, gemHero } from '../assets';
import GlowOrb from '../components/GlowOrb';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import StatCard from '../components/StatCard';
import { SCREEN_H, SCREEN_W, TOTAL_LEVELS } from '../constants/config';
import theme, { TABULAR } from '../constants/theme';

interface Props {
  sparks: number;
  levelIndex: number;
  bestStars: number;
  onGo: () => void;
  onSchemes: () => void;
  onTutorial: () => void;
  onOptions: () => void;
}

export function MenuScreen({
  sparks,
  levelIndex,
  bestStars,
  onGo,
  onSchemes,
  onTutorial,
  onOptions,
}: Props) {
  const rise = useRef(new Animated.Value(0)).current;
  const float = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rise, {
      toValue: 1,
      duration: 420,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(float, {
          toValue: 1,
          duration: 2600,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(float, {
          toValue: 0,
          duration: 2600,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [rise, float]);

  const lift = rise.interpolate({ inputRange: [0, 1], outputRange: [18, 0] });
  const bob = float.interpolate({ inputRange: [0, 1], outputRange: [0, -9] });
  const heroScale = rise.interpolate({
    inputRange: [0, 1],
    outputRange: [0.9, 1],
  });

  const schemeLabel = String(((levelIndex % TOTAL_LEVELS) + 1)).padStart(2, '0');

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#15121C" />
      <ImageBackground source={bgMenu} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={theme.grad.menuVeil} style={styles.veil} />

        <Svg
          pointerEvents="none"
          style={StyleSheet.absoluteFill}
          width={SCREEN_W}
          height={SCREEN_H}>
          <Line
            x1={-40}
            y1={SCREEN_H * 0.26}
            x2={SCREEN_W + 40}
            y2={SCREEN_H * 0.08}
            stroke={theme.colors.teal}
            strokeWidth={2}
            strokeOpacity={0.22}
          />
          <Line
            x1={-40}
            y1={SCREEN_H * 0.38}
            x2={SCREEN_W + 40}
            y2={SCREEN_H * 0.56}
            stroke={theme.colors.hot}
            strokeWidth={2}
            strokeOpacity={0.2}
          />
          <Line
            x1={-40}
            y1={SCREEN_H * 0.72}
            x2={SCREEN_W + 40}
            y2={SCREEN_H * 0.62}
            stroke={theme.colors.gold}
            strokeWidth={1.5}
            strokeOpacity={0.16}
          />
        </Svg>

        <View style={styles.topRow}>
          <View style={styles.pill}>
            <Zap size={18} color={theme.colors.gold} strokeWidth={2.6} />
            <Text style={styles.pillValue}>{sparks}</Text>
            <Text style={styles.pillLabel}>SPARKS</Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Options"
            onPress={onOptions}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            style={styles.gear}>
            <Settings size={22} color={theme.colors.text} strokeWidth={2.2} />
          </Pressable>
        </View>

        <View style={styles.hero}>
          <View style={styles.heroGlow}>
            <GlowOrb size={220} color="#753FB0" opacity={0.3} />
          </View>
          <Animated.View
            pointerEvents="none"
            style={{ transform: [{ translateY: bob }, { scale: heroScale }] }}>
            <Image source={gemHero} style={styles.gem} resizeMode="contain" />
          </Animated.View>
        </View>

        <Animated.View
          pointerEvents="box-none"
          style={[styles.lower, { opacity: rise, transform: [{ translateY: lift }] }]}>
          <Text style={styles.title}>JOKIR JEWELS</Text>
          <Text style={styles.tagline}>THREE FACETS. ONE BEAM.</Text>

          <View style={styles.stats}>
            <StatCard value={`NO ${schemeLabel}`} label="SCHEME" accent={theme.colors.teal} />
            <StatCard value={`${bestStars}`} label="BEST STARS" accent={theme.colors.gold} />
          </View>

          <Text style={styles.hint}>SWAP TWO GEMS TO ROUTE THE LIGHT</Text>

          <PrimaryButton
            label="PLAY"
            Icon={Play}
            onPress={onGo}
            colors={theme.grad.ctaHot}
            shadowColor={theme.colors.hot}
          />

          <View style={styles.secondRow}>
            <SecondaryButton label="SCHEMES" Icon={LayoutGrid} onPress={onSchemes} />
            <SecondaryButton label="HOW TO" Icon={HelpCircle} onPress={onTutorial} />
          </View>

          <Text style={styles.footer}>
            {`SCHEME ${schemeLabel} OF ${TOTAL_LEVELS}`}
          </Text>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.bgBase },
  bg: { flex: 1 },
  veil: { ...StyleSheet.absoluteFillObject },
  topRow: {
    paddingTop: 44,
    height: 116,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pill: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.surfaceBorder,
  },
  pillValue: {
    fontSize: 16,
    fontWeight: '800',
    color: theme.colors.gold,
    fontVariant: TABULAR,
  },
  pillLabel: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: theme.colors.textFaint,
  },
  gear: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.surfaceBorder,
  },
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroGlow: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gem: {
    width: 176,
    height: 176,
  },
  lower: {
    paddingHorizontal: 20,
    paddingBottom: 22,
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 3,
    textAlign: 'center',
    color: theme.colors.text,
    textShadowColor: '#753FB0',
    textShadowRadius: 14,
    textShadowOffset: { width: 0, height: 0 },
  },
  tagline: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.5,
    textAlign: 'center',
    color: theme.colors.textDim,
  },
  stats: {
    marginTop: 18,
    flexDirection: 'row',
    gap: 12,
  },
  hint: {
    marginTop: 18,
    marginBottom: 10,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
    textAlign: 'center',
    color: 'rgba(244,232,216,0.55)',
  },
  secondRow: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 12,
  },
  footer: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
    color: 'rgba(244,232,216,0.34)',
  },
});

export default MenuScreen;
