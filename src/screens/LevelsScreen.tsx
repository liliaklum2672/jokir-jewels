import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ArrowLeft } from 'lucide-react-native';

import { bgGame } from '../assets';
import ScreenHeader from '../components/ScreenHeader';
import SchemeTile from '../components/SchemeTile';
import { LEVELS } from '../game/levels';
import theme from '../constants/theme';

interface Props {
  unlocked: number;
  stars: Record<number, number>;
  onPick: (index: number) => void;
  onBack: () => void;
}

const ACCENTS = ['#D93A67', '#EFC04C', '#34B9AB'];

export function LevelsScreen({ unlocked, stars, onPick, onBack }: Props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0A14" />
      <ImageBackground source={bgGame} style={styles.bg} resizeMode="cover">
        <LinearGradient colors={theme.grad.overVeil} style={styles.veil} />

        <ScreenHeader title="SCHEME GALLERY"
          onBack={onBack}
          BackIcon={ArrowLeft}
          right={<Text style={styles.count}>{`${unlocked}/${LEVELS.length}`}</Text>}
        />

        <Text style={styles.lead}>PICK A STAGE AND ROUTE ITS BEAM</Text>

        <View style={styles.grid}>
          {LEVELS.map((lv, i) => (
            <SchemeTile
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
  root: { flex: 1, backgroundColor: theme.colors.bgDeep },
  bg: { flex: 1 },
  veil: { ...StyleSheet.absoluteFillObject },
  count: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    color: theme.colors.teal,
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

export default LevelsScreen;
