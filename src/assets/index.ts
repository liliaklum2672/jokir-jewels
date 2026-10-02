/**
 * Re-export of the AI-generated PNGs in ../../assets (created by the asset
 * step of the pipeline). Keep every path a literal require() — Metro resolves
 * these statically.
 */
import type { ImageSourcePropType } from 'react-native';
import type { CellType } from '../game/beam';

export const bgLoader: ImageSourcePropType = require('../../assets/bg_loader.png');
export const bgMenu: ImageSourcePropType = require('../../assets/bg_menu.png');
export const bgGame: ImageSourcePropType = require('../../assets/bg_game.png');

export const gemHero: ImageSourcePropType = require('../../assets/sprite_gem_hero.png');
export const mirrorSlash: ImageSourcePropType = require('../../assets/sprite_mirror_slash.png');
export const mirrorBack: ImageSourcePropType = require('../../assets/sprite_mirror_back.png');
export const prism: ImageSourcePropType = require('../../assets/sprite_prism.png');
export const blocker: ImageSourcePropType = require('../../assets/sprite_blocker.png');
export const lens: ImageSourcePropType = require('../../assets/sprite_lens.png');

export const GEM_SPRITES: Record<Exclude<CellType, 'empty'>, ImageSourcePropType> = {
  mirror_slash: mirrorSlash,
  mirror_back: mirrorBack,
  prism,
  blocker,
};
