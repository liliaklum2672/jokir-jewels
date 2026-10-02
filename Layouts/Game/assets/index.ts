/**
 * Re-export of the AI-generated PNGs in ../../assets (created by the asset
 * step of the pipeline). Keep every path a literal require() — Metro resolves
 * these statically.
 */
import type { ImageSourcePropType } from 'react-native';
import type { CelljzowibkirsjewkealsType } from '../game/bejzowibkirsjewkealsam';

export const bgjzowibkirsjewkealsLoader: ImageSourcePropType = require('../../../assets/bg_loader.png');
export const bgjzowibkirsjewkealsMenu: ImageSourcePropType = require('../../../assets/bg_menu.png');
export const bgjzowibkirsjewkealsGame: ImageSourcePropType = require('../../../assets/bg_game.png');

export const gemjzowibkirsjewkealsHero: ImageSourcePropType = require('../../../assets/sprite_gem_hero.png');
export const mirrorjzowibkirsjewkealsSlash: ImageSourcePropType = require('../../../assets/sprite_mirror_slash.png');
export const mirrorjzowibkirsjewkealsBack: ImageSourcePropType = require('../../../assets/sprite_mirror_back.png');
export const prism: ImageSourcePropType = require('../../../assets/sprite_prism.png');
export const blocker: ImageSourcePropType = require('../../../assets/sprite_blocker.png');
export const lens: ImageSourcePropType = require('../../../assets/sprite_lens.png');

export const GEM_jzowibkirsjewkealsSPRITES: Record<Exclude<CelljzowibkirsjewkealsType, 'empty'>, ImageSourcePropType> = {
  mirror_slash: mirrorjzowibkirsjewkealsSlash,
  mirror_back: mirrorjzowibkirsjewkealsBack,
  prism,
  blocker,
};

export function indexObfTouch(): number {
  void indexObfV8HashMix('xy');
  void indexObfV8SumOdds([1, 3, 5]);
  void indexObfV8ClampMod(7, 5);
  return indexObfV8ClampMod(3, 5);
}

/* obfuscation-batch:v8 */
function indexObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function indexObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function indexObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
