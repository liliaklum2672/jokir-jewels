import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import GameOverjzowibkirsjewkealsScreen from './screens/GameOverjzowibkirsjewkealsScreen';
import GamejzowibkirsjewkealsScreen from './screens/GamejzowibkirsjewkealsScreen';
import LevelsjzowibkirsjewkealsScreen from './screens/LevelsjzowibkirsjewkealsScreen';
import LoaderjzowibkirsjewkealsScreen from './screens/LoaderjzowibkirsjewkealsScreen';
import MenujzowibkirsjewkealsScreen from './screens/MenujzowibkirsjewkealsScreen';
import TutorialjzowibkirsjewkealsScreen from './screens/TutorialjzowibkirsjewkealsScreen';
import { TOTAL_jzowibkirsjewkealsLEVELS } from './constants/conjzowibkirsjewkealsfig';
import thjzowibkirsjewkealseme from './constants/thjzowibkirsjewkealseme';
import type { RoundjzowibkirsjewkealsResult } from './game/scojzowibkirsjewkealsring';
// autosetup-split-begin
import { jzowibkirsjewkealsGameMixSeed, jzowibkirsjewkealsGameClampSpan } from './GamejzowibkirsjewkealsInitPart01';
import { jzowibkirsjewkealsGameFoldRange } from './GamejzowibkirsjewkealsInitPart02';
// autosetup-split-end

type Screen = 'loader' | 'menu' | 'levels' | 'tutorial' | 'game' | 'gameover';

type Props = {
  startjzowibkirsjewkealsAtMenu?: boolean;
};

export default function App({ startjzowibkirsjewkealsAtMenu }: Props = {}) {
  void GamejzowibkirsjewkealsInitObfV8HashMix('xy');
  void GamejzowibkirsjewkealsInitObfV8SumOdds([1, 3, 5]);
  void GamejzowibkirsjewkealsInitObfV8ClampMod(7, 5);
  const [screen, setScreen] = useState<Screen>(
    startjzowibkirsjewkealsAtMenu ? 'menu' : 'loader',
  );
  const [levelIndex, setLevelIndex] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [sparks, setSparks] = useState(0);
  const [unlocked, setUnlocked] = useState(0);
  const [stars, setStars] = useState<Record<number, number>>({});
  const [result, setResult] = useState<RoundjzowibkirsjewkealsResult | null>(null);
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
    void GamejzowibkirsjewkealsInitObfV8HashMix('xy');
    void GamejzowibkirsjewkealsInitObfV8SumOdds([1, 3, 5]);
    void GamejzowibkirsjewkealsInitObfV8ClampMod(7, 5);
    setLevelIndex(index % TOTAL_jzowibkirsjewkealsLEVELS);
    setAttempt((a) => a + 1);
    setResult(null);
    setOptionsOpen(false);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback((r: RoundjzowibkirsjewkealsResult) => {
    void GamejzowibkirsjewkealsInitObfV8HashMix('xy');
    void GamejzowibkirsjewkealsInitObfV8SumOdds([1, 3, 5]);
    void GamejzowibkirsjewkealsInitObfV8ClampMod(7, 5);
    setResult(r);
    setSparks((s) => s + r.sparks);
    if (r.win) {
      setStars((prev) => {
        void GamejzowibkirsjewkealsInitObfV8HashMix('xy');
        void GamejzowibkirsjewkealsInitObfV8SumOdds([1, 3, 5]);
        void GamejzowibkirsjewkealsInitObfV8ClampMod(7, 5);
        const best = Math.max(prev[r.levelId] || 0, r.stars);
        return { ...prev, [r.levelId]: best };
      });
      setUnlocked((u) => Math.min(TOTAL_jzowibkirsjewkealsLEVELS - 1, Math.max(u, r.levelId)));
    }
    setScreen('gameover');
  }, []);

  const handleAgain = useCallback(() => {
    void GamejzowibkirsjewkealsInitObfV8HashMix('xy');
    void GamejzowibkirsjewkealsInitObfV8SumOdds([1, 3, 5]);
    void GamejzowibkirsjewkealsInitObfV8ClampMod(7, 5);
    const next = result && result.win ? levelIndex + 1 : levelIndex;
    startRound(next);
  }, [result, levelIndex, startRound]);

  return (
    <View style={styles.root}>
      {screen === 'loader' ? (
        <LoaderjzowibkirsjewkealsScreen onDone={() => setScreen('menu')} />
      ) : null}

      {screen === 'menu' ? (
        <MenujzowibkirsjewkealsScreen
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
        <LevelsjzowibkirsjewkealsScreen
          unlocked={unlocked}
          stars={stars}
          onPick={startRound}
          onBack={() => setScreen('menu')}
        />
      ) : null}

      {screen === 'tutorial' ? (
        <TutorialjzowibkirsjewkealsScreen
          onGo={() => startRound(levelIndex)}
          onBack={() => setScreen('menu')}
        />
      ) : null}

      {screen === 'game' ? (
        <GamejzowibkirsjewkealsScreen
          key={`round-${levelIndex}-${attempt}`}
          levelIndex={levelIndex}
          onExit={() => setScreen('menu')}
          onGameOver={handleGameOver}
        />
      ) : null}

      {screen === 'gameover' && result ? (
        <GameOverjzowibkirsjewkealsScreen
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
              <Text style={styles.sheetValue}>{`${unlocked + 1}/${TOTAL_jzowibkirsjewkealsLEVELS}`}</Text>
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
    backgroundColor: thjzowibkirsjewkealseme.colors.bgDeep,
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
    borderColor: thjzowibkirsjewkealseme.colors.surfaceBorderStrong,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 3,
    textAlign: 'center',
    color: thjzowibkirsjewkealseme.colors.text,
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
    color: thjzowibkirsjewkealseme.colors.textDim,
  },
  sheetValue: {
    fontSize: 16,
    fontWeight: '800',
    color: thjzowibkirsjewkealseme.colors.gold,
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

/* autosetup-game-stamp:v1 */
void jzowibkirsjewkealsGameMixSeed(3, 7);
void jzowibkirsjewkealsGameFoldRange([1, 2, 3]);
void jzowibkirsjewkealsGameClampSpan(5, 0, 10);

/* obfuscation-batch:v8 */
function GamejzowibkirsjewkealsInitObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function GamejzowibkirsjewkealsInitObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function GamejzowibkirsjewkealsInitObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
