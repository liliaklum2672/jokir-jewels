import React, { useEffect, useRef } from 'react';
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
import Svg, { Line } from 'react-native-svg';
import { Home, LayoutGrid, RotateCcw } from 'lucide-react-native';

import { bgGame, gemHero } from '../assets';
import GlowOrb from '../components/GlowOrb';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import SecondaryButton from '../components/SecondaryButton';
import StatCard from '../components/StatCard';
import { SCREEN_H, SCREEN_W } from '../constants/config';
import { LEVELS } from '../game/levels';
import type { RoundResult } from '../game/scoring';
import { subtitleFor, titleFor } from '../game/scoring';
import theme from '../constants/theme';

interface Props {
  result: RoundResult;
  onAgain: () => void;
  onSchemes: () => void;
  onMenu: () => void;
}

const PANEL = 200;

export function GameOverScreen({ result, onAgain, onSchemes, onMenu }: Props) {
  const enter = useRef(new Animated.Value(0)).current;
  const level = LEVELS[(result.levelId - 1) % LEVELS.length];

  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 320,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [enter]);

  const lift = enter.interpolate({ inputRange: [0, 1], outputRange: [16, 0] });
  const accent = result.win ? theme.colors.gold : theme.colors.hot;

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0A14" />
      <ImageBackground source={bgGame} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={theme.grad.overVeil} style={styles.veil} />

        {result.win ? (
          <Svg
            pointerEvents="none"
            style={StyleSheet.absoluteFill}
            width={SCREEN_W}
            height={SCREEN_H}>
            <Line
              x1={SCREEN_W / 2}
              y1={SCREEN_H * 0.34}
              x2={-60}
              y2={SCREEN_H * 0.06}
              stroke={theme.colors.hot}
              strokeWidth={2}
              strokeOpacity={0.35}
            />
            <Line
              x1={SCREEN_W / 2}
              y1={SCREEN_H * 0.34}
              x2={SCREEN_W + 60}
              y2={SCREEN_H * 0.04}
              stroke={theme.colors.gold}
              strokeWidth={2}
              strokeOpacity={0.35}
            />
            <Line
              x1={SCREEN_W / 2}
              y1={SCREEN_H * 0.34}
              x2={SCREEN_W + 60}
              y2={SCREEN_H * 0.26}
              stroke={theme.colors.teal}
              strokeWidth={2}
              strokeOpacity={0.3}
            />
          </Svg>
        ) : null}

        <ScreenHeader title={level ? level.name : 'SCHEME'}
          right={<Text style={styles.headerSparks}>{`+${result.sparks}`}</Text>}
        />

        <Animated.View
          pointerEvents="box-none"
          style={[styles.body, { opacity: enter, transform: [{ translateY: lift }] }]}>
          <View style={styles.panel}>
            <View style={styles.panelGlow}>
              <GlowOrb size={170} color={accent} opacity={0.24} />
            </View>
            <Image source={gemHero} style={styles.gem} resizeMode="contain" />
            <View style={styles.facets}>
              {level
                ? level.targets.map((t, i) => (
                    <View
                      key={`f-${i}`}
                      style={[
                        styles.facetBar,
                        {
                          backgroundColor: t.color,
                          opacity: i < result.lit ? 1 : 0.22,
                        },
                      ]}
                    />
                  ))
                : null}
            </View>
          </View>

          <Text style={[styles.title, { color: accent }]}>{titleFor(result)}</Text>
          <Text style={styles.subtitle}>{subtitleFor(result)}</Text>

          <View style={styles.stars}>
            {[0, 1, 2].map((s) => (
              <Text
                key={s}
                style={[
                  styles.star,
                  s < result.stars ? { color: theme.colors.gold } : null,
                ]}>
                ★
              </Text>
            ))}
          </View>

          <View style={styles.stats}>
            <StatCard
              value={`${result.lit}/3`}
              label="FACETS"
              accent={theme.colors.teal}
            />
            <StatCard
              value={`${result.movesLeft}`}
              label="SWAPS LEFT"
              accent={theme.colors.hot}
            />
            <StatCard
              value={`${result.sparks}`}
              label="SPARKS"
              accent={theme.colors.gold}
            />
          </View>
        </Animated.View>

        <View style={styles.footer}>
          <Text style={styles.hint}>
            {result.win ? 'THE STAGE IS LIT. TAKE ANOTHER RUN.' : 'REROUTE THE LIGHT AND TRY ONCE MORE.'}
          </Text>

          <PrimaryButton
            label="PLAY AGAIN"
            Icon={RotateCcw}
            onPress={onAgain}
            colors={theme.grad.ctaHot}
            shadowColor={theme.colors.hot}
          />

          <View style={styles.secondRow}>
            <SecondaryButton label="SCHEMES" Icon={LayoutGrid} onPress={onSchemes} />
            <SecondaryButton label="MENU" Icon={Home} onPress={onMenu} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.bgDeep },
  bg: { flex: 1 },
  veil: { ...StyleSheet.absoluteFillObject },
  headerSparks: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
    color: theme.colors.gold,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  panel: {
    width: PANEL,
    height: PANEL,
    borderRadius: 24,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.surfaceBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  panelGlow: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gem: {
    width: 108,
    height: 108,
  },
  facets: {
    position: 'absolute',
    bottom: 16,
    flexDirection: 'row',
    gap: 8,
  },
  facetBar: {
    width: 38,
    height: 6,
    borderRadius: 3,
  },
  title: {
    marginTop: 22,
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowRadius: 10,
    textShadowOffset: { width: 0, height: 2 },
  },
  subtitle: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.6,
    textAlign: 'center',
    color: theme.colors.textDim,
  },
  stars: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 10,
  },
  star: {
    fontSize: 28,
    color: 'rgba(244,232,216,0.22)',
  },
  stats: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'stretch',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 58,
  },
  hint: {
    marginBottom: 10,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    textAlign: 'center',
    color: 'rgba(244,232,216,0.45)',
  },
  secondRow: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 12,
  },
});

export default GameOverScreen;
