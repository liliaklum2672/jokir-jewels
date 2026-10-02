import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import GameOverScreen from './src/screens/GameOverScreen';
import GameScreen from './src/screens/GameScreen';
import LevelsScreen from './src/screens/LevelsScreen';
import LoaderScreen from './src/screens/LoaderScreen';
import MenuScreen from './src/screens/MenuScreen';
import TutorialScreen from './src/screens/TutorialScreen';
import { TOTAL_LEVELS } from './src/constants/config';
import theme from './src/constants/theme';
import type { RoundResult } from './src/game/scoring';

type Screen = 'loader' | 'menu' | 'levels' | 'tutorial' | 'game' | 'gameover';

export default function App() {
  const [screen, setScreen] = useState<Screen>('loader');
  const [levelIndex, setLevelIndex] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [sparks, setSparks] = useState(0);
  const [unlocked, setUnlocked] = useState(0);
  const [stars, setStars] = useState<Record<number, number>>({});
  const [result, setResult] = useState<RoundResult | null>(null);
  const [optionsOpen, setOptionsOpen] = useState(false);

  const bestStars = useMemo(
    () =>
      Object.keys(stars).reduce(
        (max, key) => Math.max(max, stars[Number(key)] || 0),
        0,
      ),
    [stars],
  );

  const startRound = useCallback((index: number) => {
    setLevelIndex(index % TOTAL_LEVELS);
    setAttempt((a) => a + 1);
    setResult(null);
    setOptionsOpen(false);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback((r: RoundResult) => {
    setResult(r);
    setSparks((s) => s + r.sparks);
    if (r.win) {
      setStars((prev) => {
        const best = Math.max(prev[r.levelId] || 0, r.stars);
        return { ...prev, [r.levelId]: best };
      });
      setUnlocked((u) => Math.min(TOTAL_LEVELS - 1, Math.max(u, r.levelId)));
    }
    setScreen('gameover');
  }, []);

  const handleAgain = useCallback(() => {
    const next = result && result.win ? levelIndex + 1 : levelIndex;
    startRound(next);
  }, [result, levelIndex, startRound]);

  return (
    <View style={styles.root}>
      {screen === 'loader' ? (
        <LoaderScreen onDone={() => setScreen('menu')} />
      ) : null}

      {screen === 'menu' ? (
        <MenuScreen
          sparks={sparks}
          levelIndex={levelIndex}
          bestStars={bestStars}
          onGo={() => startRound(levelIndex)}
          onSchemes={() => setScreen('levels')}
          onTutorial={() => setScreen('tutorial')}
          onOptions={() => setOptionsOpen(true)}
        />
      ) : null}

      {screen === 'levels' ? (
        <LevelsScreen
          unlocked={unlocked}
          stars={stars}
          onPick={startRound}
          onBack={() => setScreen('menu')}
        />
      ) : null}

      {screen === 'tutorial' ? (
        <TutorialScreen
          onGo={() => startRound(levelIndex)}
          onBack={() => setScreen('menu')}
        />
      ) : null}

      {screen === 'game' ? (
        <GameScreen
          key={`round-${levelIndex}-${attempt}`}
          levelIndex={levelIndex}
          onExit={() => setScreen('menu')}
          onGameOver={handleGameOver}
        />
      ) : null}

      {screen === 'gameover' && result ? (
        <GameOverScreen
          result={result}
          onAgain={handleAgain}
          onSchemes={() => setScreen('levels')}
          onMenu={() => setScreen('menu')}
        />
      ) : null}

      {optionsOpen ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Dismiss options"
          onPress={() => setOptionsOpen(false)}
          style={styles.backdrop}>
          <View style={styles.sheet}>
            <Text style={styles.sheetTitle}>OPTIONS</Text>
            <View style={styles.sheetRow}>
              <Text style={styles.sheetLabel}>SPARKS EARNED</Text>
              <Text style={styles.sheetValue}>{sparks}</Text>
            </View>
            <View style={styles.sheetRow}>
              <Text style={styles.sheetLabel}>SCHEMES UNLOCKED</Text>
              <Text style={styles.sheetValue}>{`${unlocked + 1}/${TOTAL_LEVELS}`}</Text>
            </View>
            <View style={styles.sheetRow}>
              <Text style={styles.sheetLabel}>BEST RATING</Text>
              <Text style={styles.sheetValue}>{`${bestStars} ★`}</Text>
            </View>
            <Text style={styles.sheetHint}>TAP ANYWHERE TO DISMISS</Text>
          </View>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.bgDeep,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(7,5,12,0.82)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  sheet: {
    width: '100%',
    borderRadius: 24,
    padding: 22,
    backgroundColor: 'rgba(36,26,51,0.96)',
    borderWidth: 1,
    borderColor: theme.colors.surfaceBorderStrong,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 3,
    textAlign: 'center',
    color: theme.colors.text,
    marginBottom: 16,
  },
  sheetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(244,232,216,0.08)',
  },
  sheetLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: theme.colors.textDim,
  },
  sheetValue: {
    fontSize: 16,
    fontWeight: '800',
    color: theme.colors.gold,
  },
  sheetHint: {
    marginTop: 16,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
    color: 'rgba(244,232,216,0.4)',
  },
});
