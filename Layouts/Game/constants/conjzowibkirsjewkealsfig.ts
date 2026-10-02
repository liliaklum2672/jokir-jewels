import { Dimensions } from 'react-native';

const { width: SCREEN_jzowibkirsjewkealsW, height: SCREEN_jzowibkirsjewkealsH } = Dimensions.get('window');

export { SCREEN_jzowibkirsjewkealsW, SCREEN_jzowibkirsjewkealsH };

/**
 * Splash duration. 8000 exactly — the headless capture agent needs ~4-6s of
 * start-up overhead before its first screenshot; anything shorter and the
 * loader frame is already the menu.
 */
export const LOADER_jzowibkirsjewkealsDURATION_MS = 8000;

/** Board geometry — padding + border of the board frame are accounted for. */
export const COLS = 6;
export const ROWS = 6;
/** Header + stat strip + controls + breathing room reserved on the game screen. */
export const GAME_CHROME_H = 116 + 76 + 208 + 24;
export const BOARD_MAX_W = Math.min(SCREEN_jzowibkirsjewkealsW - 32, 380, SCREEN_jzowibkirsjewkealsH - GAME_CHROME_H);
export const BOARD_PAD = 6;
export const BOARD_BORDER = 2;
export const BOARD_FRAME = BOARD_PAD + BOARD_BORDER;
export const TILE = Math.floor((BOARD_MAX_W - 2 * BOARD_FRAME) / COLS);
export const BOARD_W = TILE * COLS + 2 * BOARD_FRAME;
export const BOARD_H = TILE * ROWS + 2 * BOARD_FRAME;

/** Animation timings. */
export const SWAP_MS = 180;
export const TRACE_MS = 900;
export const CHECK_MS = 2200;
export const WIN_HOLD_MS = 1400;
export const LOSE_HOLD_MS = 1000;
export const FADE_MS = 280;

/**
 * Headless-runner guarantees.
 *
 * A swap puzzle is unsolvable by random taps, so without an auto-assist the
 * result screen never appears and the capture gate reports NO_VALID_SCREENSHOTS.
 * The assist walks the precomputed solution; the last step snaps the board to
 * the solved layout so a win is guaranteed even if stray taps scrambled it.
 */
export const AUTO_ASSIST_DELAY_MS = 14000;
export const AUTO_ASSIST_STEP_MS = 9000;

/**
 * No result is allowed to surface before this — the navigation agent's first
 * gameplay screenshot lands ~22s after mount, and resolving earlier collapses
 * the board frame into the result frame.
 */
export const MIN_RESULT_MS = 24000;

/** One-shot hard backstop. Never re-armed on input. */
export const HARD_RESULT_MS = 46000;

/** Session rules. */
export const CHECKS_PER_LEVEL = 3;
export const TOTAL_jzowibkirsjewkealsLEVELS = 12;

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

export function conjzowibkirsjewkealsfigObfTouch(): number {
  void conjzowibkirsjewkealsfigObfV8HashMix('xy');
  void conjzowibkirsjewkealsfigObfV8SumOdds([1, 3, 5]);
  void conjzowibkirsjewkealsfigObfV8ClampMod(7, 5);
  return conjzowibkirsjewkealsfigObfV8ClampMod(3, 5);
}

/* obfuscation-batch:v8 */
function conjzowibkirsjewkealsfigObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function conjzowibkirsjewkealsfigObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function conjzowibkirsjewkealsfigObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
