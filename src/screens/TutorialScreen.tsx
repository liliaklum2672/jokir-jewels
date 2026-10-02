import React from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Circle, Polyline } from 'react-native-svg';
import { ArrowLeft, Play } from 'lucide-react-native';

import { bgGame, mirrorBack, prism } from '../assets';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import theme from '../constants/theme';

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

export function TutorialScreen({ onGo, onBack }: Props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0A14" />
      <ImageBackground source={bgGame} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={theme.grad.overVeil} style={styles.veil} />

        <ScreenHeader title="TUTORIAL"
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
                <Image source={mirrorBack} style={styles.miniArt} resizeMode="contain" />
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
                stroke={theme.colors.gold}
                strokeWidth={10}
                strokeOpacity={0.18}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Polyline
                points={`0,${MINI / 2} ${MINI / 2},${MINI / 2} ${MINI * 2.5},${MINI / 2} ${MINI * 2.5},${MINI}`}
                fill="none"
                stroke={theme.colors.gold}
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Circle cx={MINI * 2.5} cy={MINI / 2} r={4} fill={theme.colors.gold} />
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
          <PrimaryButton
            label="START PLAYING"
            Icon={Play}
            onPress={onGo}
            colors={theme.grad.ctaTeal}
            shadowColor={theme.colors.teal}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.bgDeep },
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
    borderColor: theme.colors.surfaceBorder,
    backgroundColor: theme.colors.surface,
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
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.surfaceBorder,
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
    color: theme.colors.text,
  },
  stepBody: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 17,
    color: theme.colors.textDim,
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

export default TutorialScreen;
