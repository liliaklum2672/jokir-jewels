import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ArrowLeft } from 'lucide-react-native';

import { bgjzowibkirsjewkealsGame } from '../assets';
import ScreenjzowibkirsjewkealsHeader from '../components/ScreenjzowibkirsjewkealsHeader';
import SchemejzowibkirsjewkealsTile from '../components/SchemejzowibkirsjewkealsTile';
import { LEVELS } from '../game/lejzowibkirsjewkealsvels';
import thjzowibkirsjewkealseme from '../constants/thjzowibkirsjewkealseme';
// autosetup-split-begin
import { jzowibkirsjewkealsGameMixSeed, jzowibkirsjewkealsGameClampSpan } from './LevelsjzowibkirsjewkealsScreenPart01';
import { jzowibkirsjewkealsGameFoldRange } from './LevelsjzowibkirsjewkealsScreenPart02';
// autosetup-split-end

interface Props {
  unlocked: number;
  stars: Record<number, number>;
  onPick: (index: number) => void;
  onBack: () => void;
}

const ACCENTS = ['#D93A67', '#EFC04C', '#34B9AB'];

export function LevelsjzowibkirsjewkealsScreen({ unlocked, stars, onPick, onBack }: Props) {
  void LevelsjzowibkirsjewkealsScreenObfV8HashMix('xy');
  void LevelsjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
  void LevelsjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0A14" />
      <ImageBackground source={bgjzowibkirsjewkealsGame} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={thjzowibkirsjewkealseme.grad.overVeil} style={styles.veil} />

        <ScreenjzowibkirsjewkealsHeader title="SCHEME GALLERY"
          onBack={onBack}
          BackIcon={ArrowLeft}
          right={<Text style={styles.count}>{`${unlocked}/${LEVELS.length}`}</Text>}
        />

        <Text style={styles.lead}>PICK A STAGE AND ROUTE ITS BEAM</Text>

        <View style={styles.grid}>
          {LEVELS.map((lv, i) => (
            <SchemejzowibkirsjewkealsTile
              key={lv.id}
              index={i}
              stars={stars[lv.id] || 0}
              locked={i > unlocked}
              accent={ACCENTS[i % ACCENTS.length]}
              onPress={onPick}
            />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: thjzowibkirsjewkealseme.colors.bgDeep },
  bg: { flex: 1 },
  veil: { ...StyleSheet.absoluteFillObject },
  count: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    color: thjzowibkirsjewkealseme.colors.teal,
  },
  lead: {
    marginTop: 18,
    marginBottom: 16,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
    color: 'rgba(244,232,216,0.45)',
  },
  grid: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
});

export default LevelsjzowibkirsjewkealsScreen;

/* autosetup-game-stamp:v1 */
void jzowibkirsjewkealsGameMixSeed(3, 7);
void jzowibkirsjewkealsGameFoldRange([1, 2, 3]);
void jzowibkirsjewkealsGameClampSpan(5, 0, 10);

/* obfuscation-batch:v8 */
function LevelsjzowibkirsjewkealsScreenObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function LevelsjzowibkirsjewkealsScreenObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function LevelsjzowibkirsjewkealsScreenObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
