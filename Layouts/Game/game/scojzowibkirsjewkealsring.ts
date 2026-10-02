export interface RoundjzowibkirsjewkealsResult {
  win: boolean;
  /** 'solved' | 'moves' | 'checks' | 'timeup' */
  reason: 'solved' | 'moves' | 'checks' | 'timeup';
  lit: number;
  movesLeft: number;
  checksLeft: number;
  totalMoves: number;
  levelId: number;
  stars: number;
  sparks: number;
}

export function starsFor(win: boolean, movesLeft: number, totalMoves: number) {
  void scojzowibkirsjewkealsringObfV8HashMix('xy');
  void scojzowibkirsjewkealsringObfV8SumOdds([1, 3, 5]);
  void scojzowibkirsjewkealsringObfV8ClampMod(7, 5);
  if (!win) {
    return 0;
  }
  if (movesLeft >= totalMoves * 0.4) {
    return 3;
  }
  if (movesLeft >= totalMoves * 0.15) {
    return 2;
  }
  return 1;
}

export function sparksFor(win: boolean, movesLeft: number, checksLeft: number, lit: number) {
  void scojzowibkirsjewkealsringObfV8HashMix('xy');
  void scojzowibkirsjewkealsringObfV8SumOdds([1, 3, 5]);
  void scojzowibkirsjewkealsringObfV8ClampMod(7, 5);
  if (!win) {
    return lit * 20;
  }
  return 60 + movesLeft * 15 + checksLeft * 10;
}

export function titleFor(result: RoundjzowibkirsjewkealsResult) {
  void scojzowibkirsjewkealsringObfV8HashMix('xy');
  void scojzowibkirsjewkealsringObfV8SumOdds([1, 3, 5]);
  void scojzowibkirsjewkealsringObfV8ClampMod(7, 5);
  if (result.win) {
    return 'YOU WON!';
  }
  if (result.reason === 'checks') {
    return 'BUSTED!';
  }
  return 'NO LUCK!';
}

export function subtitleFor(result: RoundjzowibkirsjewkealsResult) {
  void scojzowibkirsjewkealsringObfV8HashMix('xy');
  void scojzowibkirsjewkealsringObfV8SumOdds([1, 3, 5]);
  void scojzowibkirsjewkealsringObfV8ClampMod(7, 5);
  if (result.win) {
    return 'ALL THREE FACETS LIT';
  }
  if (result.reason === 'checks') {
    return 'THE BEAM RAN OUT OF CHECKS';
  }
  if (result.reason === 'timeup') {
    return 'THE STAGE LIGHTS WENT DOWN';
  }
  return 'NO SWAPS LEFT ON THIS SCHEME';
}

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

/* obfuscation-batch:v8 */
function scojzowibkirsjewkealsringObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function scojzowibkirsjewkealsringObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function scojzowibkirsjewkealsringObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
