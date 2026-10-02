import type { TextStyle } from 'react-native';

/**
 * Visual preset: RETRO_NEON (design-system/presets.ts), accent colours
 * overridden to the brief palette. The preset identity is NOT invented —
 * only the accent hexes move.
 */
export const PRESET_NAME = 'RETRO_NEON';

export const theme = {
  name: 'retro-neon',
  preset: PRESET_NAME,

  colors: {
    bgDeep: '#0D0A14',
    bgBase: '#15121C',
    bgLift: '#241A33',
    bgVoid: '#07050C',

    surface: 'rgba(244,232,216,0.06)',
    surfaceStrong: 'rgba(244,232,216,0.10)',
    surfaceBorder: 'rgba(244,232,216,0.12)',
    surfaceBorderStrong: 'rgba(244,232,216,0.18)',

    primary: '#753FB0',
    hot: '#D93A67',
    gold: '#EFC04C',
    teal: '#34B9AB',

    text: '#F4E8D8',
    textDim: 'rgba(244,232,216,0.66)',
    textFaint: 'rgba(244,232,216,0.42)',
    ink: '#15121C',
  },

  radius: {
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    pill: 999,
  },

  space: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 20,
    xl: 28,
  },

  // Gradients used across screens.
  grad: {
    loader: ['#07050C', '#15121C', '#1E1430'],
    menuVeil: ['rgba(21,18,28,0.72)', 'rgba(21,18,28,0.88)', 'rgba(13,10,20,0.95)'],
    gameVeil: ['rgba(13,10,20,0.78)', 'rgba(13,10,20,0.92)'],
    overVeil: ['rgba(13,10,20,0.84)', 'rgba(13,10,20,0.94)'],
    ctaHot: ['#D93A67', '#753FB0'],
    ctaGold: ['#EFC04C', '#D93A67'],
    ctaTeal: ['#34B9AB', '#753FB0'],
    beamBar: ['#D93A67', '#EFC04C', '#34B9AB'],
  },

  type: {
    hero: { fontSize: 38, fontWeight: '900' as const, letterSpacing: 4 },
    title: { fontSize: 30, fontWeight: '900' as const, letterSpacing: 2 },
    section: { fontSize: 16, fontWeight: '800' as const, letterSpacing: 1.5 },
    body: { fontSize: 15, fontWeight: '600' as const },
    caption: { fontSize: 11, fontWeight: '700' as const, letterSpacing: 2 },
  },
};

export const TABULAR: TextStyle['fontVariant'] = ['tabular-nums'];

export type Theme = typeof theme;
export default theme;
