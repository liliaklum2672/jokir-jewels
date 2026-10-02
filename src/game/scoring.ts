export interface RoundResult {
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
  if (!win) {
    return lit * 20;
  }
  return 60 + movesLeft * 15 + checksLeft * 10;
}

export function titleFor(result: RoundResult) {
  if (result.win) {
    return 'YOU WON!';
  }
  if (result.reason === 'checks') {
    return 'BUSTED!';
  }
  return 'NO LUCK!';
}

export function subtitleFor(result: RoundResult) {
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
