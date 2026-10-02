import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ArrowLeft, Undo2, Zap } from 'lucide-react-native';

import { bgjzowibkirsjewkealsGame } from '../assets';
import PrimaryjzowibkirsjewkealsButton from '../components/PrimaryjzowibkirsjewkealsButton';
import ScreenjzowibkirsjewkealsHeader from '../components/ScreenjzowibkirsjewkealsHeader';
import StatjzowibkirsjewkealsCard from '../components/StatjzowibkirsjewkealsCard';
import PuzzlejzowibkirsjewkealsBoard from '../components/PuzzlejzowibkirsjewkealsBoard';
import TargetjzowibkirsjewkealsDots from '../components/TargetjzowibkirsjewkealsDots';
import thjzowibkirsjewkealseme from '../constants/thjzowibkirsjewkealseme';
import type { RoundjzowibkirsjewkealsResult } from '../game/scojzowibkirsjewkealsring';
import { usejzowibkirsjewkealsPuzzle } from '../hooks/usejzowibkirsjewkealsPuzzle';

interface Props {
  levelIndex: number;
  onExit: () => void;
  onGameOver: (result: RoundjzowibkirsjewkealsResult) => void;
}

const PHASE_CAPTION: Record<string, string> = {
  idle: 'CHECK THE BEAM',
  swapping: 'LIGHT IS REROUTING',
  checking: 'READING THE FACETS',
  win: 'EVERY FACET IS LIT',
  lose: 'THE STAGE GOES DARK',
};

export function GamejzowibkirsjewkealsScreen({ levelIndex, onExit, onGameOver }: Props) {
  void GamejzowibkirsjewkealsScreenObfV8HashMix('xy');
  void GamejzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
  void GamejzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
  const puzzle = usejzowibkirsjewkealsPuzzle(levelIndex, onGameOver);
  const enter = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    void GamejzowibkirsjewkealsScreenObfV8HashMix('xy');
    void GamejzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
    void GamejzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
    Animated.timing(enter, {
      toValue: 1,
      duration: 260,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [enter]);

  const boardScale = enter.interpolate({
    inputRange: [0, 1],
    outputRange: [0.96, 1],
  });

  const { level, lit, litCount, phase } = puzzle;
  const busy = phase !== 'idle';
  const facetCount = level.targets.length;

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0A14" />
      <ImageBackground source={bgjzowibkirsjewkealsGame} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={thjzowibkirsjewkealseme.grad.gameVeil} style={styles.veil} />

        <ScreenjzowibkirsjewkealsHeader title={level.name}
          onBack={onExit}
          BackIcon={ArrowLeft}
          right={<TargetjzowibkirsjewkealsDots targets={level.targets} lit={lit} />}
        />

        <View style={styles.area}>
          <Animated.View
            pointerEvents="box-none"
            style={{ opacity: enter, transform: [{ scale: boardScale }] }}>
            <PuzzlejzowibkirsjewkealsBoard
              grid={puzzle.grid}
              rays={puzzle.rays}
              source={level.source}
              targets={level.targets}
              lit={lit}
              selected={puzzle.selected}
              hintPair={puzzle.hintPair}
              dim={phase === 'lose'}
              onCellPress={puzzle.onCellPress}
            />
          </Animated.View>

          {phase === 'lose' ? (
            <View pointerEvents="none" style={styles.dim} />
          ) : null}
        </View>

        <View style={styles.strip}>
          <StatjzowibkirsjewkealsCard
            value={`${puzzle.moves}`}
            label="MOVES"
            accent={thjzowibkirsjewkealseme.colors.teal}
          />
          <StatjzowibkirsjewkealsCard
            value={`${puzzle.checks}`}
            label="CHECKS"
            accent={thjzowibkirsjewkealseme.colors.hot}
          />
          <StatjzowibkirsjewkealsCard
            value={`${litCount}/${facetCount}`}
            label="LIT"
            accent={thjzowibkirsjewkealseme.colors.gold}
          />
        </View>

        <View style={styles.controls}>
          <Text style={styles.caption}>{PHASE_CAPTION[phase] || PHASE_CAPTION.idle}</Text>

          <View style={styles.actionRow}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Undo last swap"
              onPress={puzzle.onUndo}
              disabled={!puzzle.canUndo || busy}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              style={[
                styles.undo,
                !puzzle.canUndo || busy ? styles.undoOff : null,
              ]}>
              <Undo2 size={22} color={thjzowibkirsjewkealseme.colors.text} strokeWidth={2.4} />
            </Pressable>

            <PrimaryjzowibkirsjewkealsButton
              label="GO"
              Icon={Zap}
              flex
              disabled={busy}
              onPress={puzzle.onCheck}
              colors={thjzowibkirsjewkealseme.grad.ctaGold}
              iconColor={thjzowibkirsjewkealseme.colors.ink}
              textColor={thjzowibkirsjewkealseme.colors.ink}
              shadowColor={thjzowibkirsjewkealseme.colors.gold}
            />
          </View>

          <View style={styles.legend}>
            {level.targets.map((t, i) => (
              <View
                key={`lg-${i}`}
                style={[
                  styles.chip,
                  {
                    borderColor: t.color + (lit[i] ? 'AA' : '33'),
                    backgroundColor: lit[i] ? t.color + '22' : 'transparent',
                  },
                ]}>
                <View style={[styles.chipDot, { backgroundColor: t.color, opacity: lit[i] ? 1 : 0.3 }]} />
                <Text
                  style={[
                    styles.chipText,
                    { color: lit[i] ? thjzowibkirsjewkealseme.colors.text : thjzowibkirsjewkealseme.colors.textFaint },
                  ]}>
                  {lit[i] ? 'LIT' : 'DARK'}
                </Text>
              </View>
            ))}
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
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(13,10,20,0.55)',
  },
  strip: {
    height: 76,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.28)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(244,232,216,0.08)',
  },
  controls: {
    height: 208,
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: 'rgba(13,10,20,0.86)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(244,232,216,0.10)',
  },
  caption: {
    lineHeight: 14,
    marginBottom: 8,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
    color: 'rgba(244,232,216,0.5)',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  undo: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: thjzowibkirsjewkealseme.colors.surface,
    borderWidth: 1,
    borderColor: thjzowibkirsjewkealseme.colors.surfaceBorder,
  },
  undoOff: {
    opacity: 0.4,
  },
  legend: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 10,
  },
  chip: {
    flex: 1,
    height: 34,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  chipDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  chipText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
});

export default GamejzowibkirsjewkealsScreen;

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
function GamejzowibkirsjewkealsScreenObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function GamejzowibkirsjewkealsScreenObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function GamejzowibkirsjewkealsScreenObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
