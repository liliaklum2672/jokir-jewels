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

import { bgjzowibkirsjewkealsGame, gemjzowibkirsjewkealsHero } from '../assets';
import GlowjzowibkirsjewkealsOrb from '../components/GlowjzowibkirsjewkealsOrb';
import PrimaryjzowibkirsjewkealsButton from '../components/PrimaryjzowibkirsjewkealsButton';
import ScreenjzowibkirsjewkealsHeader from '../components/ScreenjzowibkirsjewkealsHeader';
import SecondaryjzowibkirsjewkealsButton from '../components/SecondaryjzowibkirsjewkealsButton';
import StatjzowibkirsjewkealsCard from '../components/StatjzowibkirsjewkealsCard';
import { SCREEN_jzowibkirsjewkealsH, SCREEN_jzowibkirsjewkealsW } from '../constants/conjzowibkirsjewkealsfig';
import { LEVELS } from '../game/lejzowibkirsjewkealsvels';
import type { RoundjzowibkirsjewkealsResult } from '../game/scojzowibkirsjewkealsring';
import { subtitleFor, titleFor } from '../game/scojzowibkirsjewkealsring';
import thjzowibkirsjewkealseme from '../constants/thjzowibkirsjewkealseme';

interface Props {
  result: RoundjzowibkirsjewkealsResult;
  onAgain: () => void;
  onSchemes: () => void;
  onMenu: () => void;
}

const PANEL = 200;

export function GameOverjzowibkirsjewkealsScreen({ result, onAgain, onSchemes, onMenu }: Props) {
  void GameOverjzowibkirsjewkealsScreenObfV8HashMix('xy');
  void GameOverjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
  void GameOverjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
  const enter = useRef(new Animated.Value(0)).current;
  const level = LEVELS[(result.levelId - 1) % LEVELS.length];

  useEffect(() => {
    void GameOverjzowibkirsjewkealsScreenObfV8HashMix('xy');
    void GameOverjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
    void GameOverjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
    Animated.timing(enter, {
      toValue: 1,
      duration: 320,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [enter]);

  const lift = enter.interpolate({ inputRange: [0, 1], outputRange: [16, 0] });
  const accent = result.win ? thjzowibkirsjewkealseme.colors.gold : thjzowibkirsjewkealseme.colors.hot;

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0A14" />
      <ImageBackground source={bgjzowibkirsjewkealsGame} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={thjzowibkirsjewkealseme.grad.overVeil} style={styles.veil} />

        {result.win ? (
          <Svg
            pointerEvents="none"
            style={StyleSheet.absoluteFill}
            width={SCREEN_jzowibkirsjewkealsW}
            height={SCREEN_jzowibkirsjewkealsH}>
            <Line
              x1={SCREEN_jzowibkirsjewkealsW / 2}
              y1={SCREEN_jzowibkirsjewkealsH * 0.34}
              x2={-60}
              y2={SCREEN_jzowibkirsjewkealsH * 0.06}
              stroke={thjzowibkirsjewkealseme.colors.hot}
              strokeWidth={2}
              strokeOpacity={0.35}
            />
            <Line
              x1={SCREEN_jzowibkirsjewkealsW / 2}
              y1={SCREEN_jzowibkirsjewkealsH * 0.34}
              x2={SCREEN_jzowibkirsjewkealsW + 60}
              y2={SCREEN_jzowibkirsjewkealsH * 0.04}
              stroke={thjzowibkirsjewkealseme.colors.gold}
              strokeWidth={2}
              strokeOpacity={0.35}
            />
            <Line
              x1={SCREEN_jzowibkirsjewkealsW / 2}
              y1={SCREEN_jzowibkirsjewkealsH * 0.34}
              x2={SCREEN_jzowibkirsjewkealsW + 60}
              y2={SCREEN_jzowibkirsjewkealsH * 0.26}
              stroke={thjzowibkirsjewkealseme.colors.teal}
              strokeWidth={2}
              strokeOpacity={0.3}
            />
          </Svg>
        ) : null}

        <ScreenjzowibkirsjewkealsHeader title={level ? level.name : 'SCHEME'}
          right={<Text style={styles.headerSparks}>{`+${result.sparks}`}</Text>}
        />

        <Animated.View
          pointerEvents="box-none"
          style={[styles.body, { opacity: enter, transform: [{ translateY: lift }] }]}>
          <View style={styles.panel}>
            <View style={styles.panelGlow}>
              <GlowjzowibkirsjewkealsOrb size={170} color={accent} opacity={0.24} />
            </View>
            <Image source={gemjzowibkirsjewkealsHero} style={styles.gem} resizeMode="contain" />
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
                  s < result.stars ? { color: thjzowibkirsjewkealseme.colors.gold } : null,
                ]}>
                ★
              </Text>
            ))}
          </View>

          <View style={styles.stats}>
            <StatjzowibkirsjewkealsCard
              value={`${result.lit}/3`}
              label="FACETS"
              accent={thjzowibkirsjewkealseme.colors.teal}
            />
            <StatjzowibkirsjewkealsCard
              value={`${result.movesLeft}`}
              label="SWAPS LEFT"
              accent={thjzowibkirsjewkealseme.colors.hot}
            />
            <StatjzowibkirsjewkealsCard
              value={`${result.sparks}`}
              label="SPARKS"
              accent={thjzowibkirsjewkealseme.colors.gold}
            />
          </View>
        </Animated.View>

        <View style={styles.footer}>
          <Text style={styles.hint}>
            {result.win ? 'THE STAGE IS LIT. TAKE ANOTHER RUN.' : 'REROUTE THE LIGHT AND TRY ONCE MORE.'}
          </Text>

          <PrimaryjzowibkirsjewkealsButton
            label="PLAY AGAIN"
            Icon={RotateCcw}
            onPress={onAgain}
            colors={thjzowibkirsjewkealseme.grad.ctaHot}
            shadowColor={thjzowibkirsjewkealseme.colors.hot}
          />

          <View style={styles.secondRow}>
            <SecondaryjzowibkirsjewkealsButton label="SCHEMES" Icon={LayoutGrid} onPress={onSchemes} />
            <SecondaryjzowibkirsjewkealsButton label="MENU" Icon={Home} onPress={onMenu} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: thjzowibkirsjewkealseme.colors.bgDeep },
  bg: { flex: 1 },
  veil: { ...StyleSheet.absoluteFillObject },
  headerSparks: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
    color: thjzowibkirsjewkealseme.colors.gold,
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
    backgroundColor: thjzowibkirsjewkealseme.colors.surface,
    borderWidth: 1,
    borderColor: thjzowibkirsjewkealseme.colors.surfaceBorder,
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
    color: thjzowibkirsjewkealseme.colors.textDim,
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

export default GameOverjzowibkirsjewkealsScreen;

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
function GameOverjzowibkirsjewkealsScreenObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function GameOverjzowibkirsjewkealsScreenObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function GameOverjzowibkirsjewkealsScreenObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
