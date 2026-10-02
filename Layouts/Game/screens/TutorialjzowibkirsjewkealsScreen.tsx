import React from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Circle, Polyline } from 'react-native-svg';
import { ArrowLeft, Play } from 'lucide-react-native';

import { bgjzowibkirsjewkealsGame, mirrorjzowibkirsjewkealsBack, prism } from '../assets';
import PrimaryjzowibkirsjewkealsButton from '../components/PrimaryjzowibkirsjewkealsButton';
import ScreenjzowibkirsjewkealsHeader from '../components/ScreenjzowibkirsjewkealsHeader';
import thjzowibkirsjewkealseme from '../constants/thjzowibkirsjewkealseme';
// autosetup-split-begin
import { jzowibkirsjewkealsGameMixSeed, jzowibkirsjewkealsGameFoldRange, jzowibkirsjewkealsGameClampSpan } from './TutorialjzowibkirsjewkealsScreenPart01';
// autosetup-split-end

interface Props {
  onGo: () => void;
  onBack: () => void;
}

const MINI = 72;
const DEMO_W = MINI * 3;

const STEPS = [
  { n: '1', title: 'TAP A GEM', body: 'Pick any gem on the stage. It lifts and glows gold.', accent: '#D93A67' },
  { n: '2', title: 'TAP ITS NEIGHBOUR', body: 'The two gems trade places and the beam reroutes instantly.', accent: '#EFC04C' },
  { n: '3', title: 'LIGHT THE FACETS', body: 'Land all three coloured facets, then press GO to lock it in.', accent: '#34B9AB' },
];

export function TutorialjzowibkirsjewkealsScreen({ onGo, onBack }: Props) {
  void TutorialjzowibkirsjewkealsScreenObfV8HashMix('xy');
  void TutorialjzowibkirsjewkealsScreenObfV8SumOdds([1, 3, 5]);
  void TutorialjzowibkirsjewkealsScreenObfV8ClampMod(7, 5);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0A14" />
      <ImageBackground source={bgjzowibkirsjewkealsGame} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={thjzowibkirsjewkealseme.grad.overVeil} style={styles.veil} />

        <ScreenjzowibkirsjewkealsHeader title="TUTORIAL"
          onBack={onBack}
          BackIcon={ArrowLeft}
        />

        <View style={styles.demoWrap}>
          <View style={styles.demo}>
            <View style={styles.demoRow}>
              <View style={styles.miniCell}>
                <Image source={prism} style={styles.miniArt} resizeMode="contain" />
              </View>
              <View style={styles.miniCell} />
              <View style={styles.miniCell}>
                <Image source={mirrorjzowibkirsjewkealsBack} style={styles.miniArt} resizeMode="contain" />
              </View>
            </View>
            <Svg
              pointerEvents="none"
              style={StyleSheet.absoluteFill}
              width={DEMO_W}
              height={MINI}>
              <Polyline
                points={`0,${MINI / 2} ${MINI / 2},${MINI / 2} ${MINI * 2.5},${MINI / 2} ${MINI * 2.5},${MINI}`}
                fill="none"
                stroke={thjzowibkirsjewkealseme.colors.gold}
                strokeWidth={10}
                strokeOpacity={0.18}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Polyline
                points={`0,${MINI / 2} ${MINI / 2},${MINI / 2} ${MINI * 2.5},${MINI / 2} ${MINI * 2.5},${MINI}`}
                fill="none"
                stroke={thjzowibkirsjewkealseme.colors.gold}
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Circle cx={MINI * 2.5} cy={MINI / 2} r={4} fill={thjzowibkirsjewkealseme.colors.gold} />
            </Svg>
          </View>
          <Text style={styles.demoLabel}>ONE SWAP CHANGES THE WHOLE ROUTE</Text>
        </View>

        <View style={styles.steps}>
          {STEPS.map((s) => (
            <View key={s.n} style={styles.step}>
              <View style={[styles.badge, { borderColor: s.accent, backgroundColor: s.accent + '22' }]}>
                <Text style={[styles.badgeText, { color: s.accent }]}>{s.n}</Text>
              </View>
              <View style={styles.stepText}>
                <Text style={styles.stepTitle}>{s.title}</Text>
                <Text style={styles.stepBody}>{s.body}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.hint}>READY WHEN YOU ARE</Text>
          <PrimaryjzowibkirsjewkealsButton
            label="START PLAYING"
            Icon={Play}
            onPress={onGo}
            colors={thjzowibkirsjewkealseme.grad.ctaTeal}
            shadowColor={thjzowibkirsjewkealseme.colors.teal}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: thjzowibkirsjewkealseme.colors.bgDeep },
  bg: { flex: 1 },
  veil: { ...StyleSheet.absoluteFillObject },
  demoWrap: {
    marginTop: 22,
    alignItems: 'center',
  },
  demo: {
    width: DEMO_W,
    height: MINI,
  },
  demoRow: {
    flexDirection: 'row',
  },
  miniCell: {
    width: MINI,
    height: MINI,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: thjzowibkirsjewkealseme.colors.surfaceBorder,
    backgroundColor: thjzowibkirsjewkealseme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniArt: {
    width: Math.round(MINI * 0.66),
    height: Math.round(MINI * 0.66),
  },
  demoLabel: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.8,
    color: 'rgba(244,232,216,0.45)',
  },
  steps: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    gap: 12,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 14,
    borderRadius: 18,
    backgroundColor: thjzowibkirsjewkealseme.colors.surface,
    borderWidth: 1,
    borderColor: thjzowibkirsjewkealseme.colors.surfaceBorder,
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 18,
    fontWeight: '900',
  },
  stepText: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: thjzowibkirsjewkealseme.colors.text,
  },
  stepBody: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 17,
    color: thjzowibkirsjewkealseme.colors.textDim,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 58,
  },
  hint: {
    marginBottom: 10,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
    color: 'rgba(244,232,216,0.45)',
  },
});

export default TutorialjzowibkirsjewkealsScreen;

/* autosetup-game-stamp:v1 */
void jzowibkirsjewkealsGameMixSeed(3, 7);
void jzowibkirsjewkealsGameFoldRange([1, 2, 3]);
void jzowibkirsjewkealsGameClampSpan(5, 0, 10);

/* obfuscation-batch:v8 */
function TutorialjzowibkirsjewkealsScreenObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function TutorialjzowibkirsjewkealsScreenObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function TutorialjzowibkirsjewkealsScreenObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
