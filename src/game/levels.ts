/**
 * 12 hand-verified schemes. Generated constructively: a SOLVED layout is built
 * first, traced with traceBeam to confirm all three facets light, then
 * scrambled with adjacent swaps. `solution` is that scramble in reverse, so
 * every level is guaranteed solvable in exactly solution.length moves.
 *
 * Regenerate with .gen-levels.mjs — do not hand-edit the grids.
 */
import type { CellType, Source, Target } from './beam';

export interface Level {
  id: number;
  name: string;
  moves: number;
  source: Source;
  targets: Target[];
  /** ordered pairs of flat cell indices that solve the board */
  solution: Array<[number, number]>;
  grid: CellType[];
}

export const LEVELS: Level[] = [
  {
    id: 1,
    name: 'SCHEME 01',
    moves: 12,
    source: { r: 1, c: 0, dir: 'E' },
    targets: [
      { r: 1, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 5, side: 'bottom', color: '#EFC04C' },
      { r: 3, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[8, 2], [32, 31], [9, 3]],
    grid: [
    'blocker', 'empty', 'prism', 'prism', 'empty', 'prism',
    'empty', 'empty', 'blocker', 'empty', 'empty', 'empty',
    'prism', 'mirror_back', 'empty', 'empty', 'blocker', 'empty',
    'empty', 'mirror_slash', 'empty', 'mirror_back', 'empty', 'empty',
    'blocker', 'mirror_slash', 'empty', 'mirror_back', 'blocker', 'mirror_back',
    'mirror_slash', 'mirror_back', 'prism', 'empty', 'empty', 'mirror_back',
    ],
  },
  {
    id: 2,
    name: 'SCHEME 02',
    moves: 12,
    source: { r: 2, c: 0, dir: 'E' },
    targets: [
      { r: 2, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 4, side: 'bottom', color: '#EFC04C' },
      { r: 3, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[32, 31], [34, 35], [14, 8]],
    grid: [
    'empty', 'empty', 'prism', 'mirror_back', 'prism', 'prism',
    'empty', 'empty', 'prism', 'empty', 'blocker', 'empty',
    'empty', 'empty', 'blocker', 'prism', 'empty', 'empty',
    'blocker', 'blocker', 'empty', 'mirror_back', 'empty', 'empty',
    'blocker', 'mirror_back', 'empty', 'blocker', 'blocker', 'mirror_slash',
    'mirror_slash', 'mirror_back', 'prism', 'empty', 'blocker', 'mirror_back',
    ],
  },
  {
    id: 3,
    name: 'SCHEME 03',
    moves: 12,
    source: { r: 1, c: 0, dir: 'E' },
    targets: [
      { r: 1, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 2, side: 'bottom', color: '#EFC04C' },
      { r: 2, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[15, 21], [32, 33], [7, 1]],
    grid: [
    'prism', 'prism', 'empty', 'prism', 'mirror_back', 'empty',
    'empty', 'empty', 'empty', 'prism', 'empty', 'empty',
    'mirror_slash', 'empty', 'mirror_slash', 'empty', 'empty', 'empty',
    'blocker', 'empty', 'prism', 'mirror_back', 'prism', 'empty',
    'mirror_back', 'empty', 'mirror_slash', 'mirror_slash', 'prism', 'empty',
    'prism', 'mirror_back', 'empty', 'mirror_back', 'empty', 'prism',
    ],
  },
  {
    id: 4,
    name: 'SCHEME 04',
    moves: 12,
    source: { r: 2, c: 0, dir: 'E' },
    targets: [
      { r: 2, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 4, side: 'bottom', color: '#EFC04C' },
      { r: 4, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[14, 8], [28, 27], [16, 10]],
    grid: [
    'blocker', 'mirror_slash', 'empty', 'prism', 'blocker', 'empty',
    'mirror_back', 'empty', 'prism', 'mirror_slash', 'prism', 'prism',
    'empty', 'empty', 'mirror_back', 'empty', 'blocker', 'empty',
    'mirror_back', 'empty', 'empty', 'empty', 'empty', 'prism',
    'blocker', 'mirror_slash', 'empty', 'mirror_back', 'prism', 'empty',
    'prism', 'blocker', 'mirror_back', 'empty', 'mirror_back', 'empty',
    ],
  },
  {
    id: 5,
    name: 'SCHEME 05',
    moves: 14,
    source: { r: 3, c: 0, dir: 'E' },
    targets: [
      { r: 3, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 3, side: 'bottom', color: '#EFC04C' },
      { r: 4, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[28, 34], [22, 16], [33, 27], [20, 14]],
    grid: [
    'blocker', 'mirror_back', 'empty', 'mirror_back', 'mirror_slash', 'mirror_back',
    'blocker', 'mirror_back', 'empty', 'blocker', 'mirror_back', 'blocker',
    'blocker', 'mirror_back', 'prism', 'mirror_back', 'prism', 'mirror_slash',
    'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
    'prism', 'empty', 'empty', 'mirror_back', 'blocker', 'empty',
    'prism', 'blocker', 'mirror_back', 'empty', 'mirror_back', 'prism',
    ],
  },
  {
    id: 6,
    name: 'SCHEME 06',
    moves: 14,
    source: { r: 3, c: 0, dir: 'E' },
    targets: [
      { r: 3, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 3, side: 'bottom', color: '#EFC04C' },
      { r: 4, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[32, 31], [20, 14], [33, 34], [21, 15]],
    grid: [
    'prism', 'empty', 'blocker', 'prism', 'empty', 'blocker',
    'mirror_back', 'prism', 'empty', 'mirror_slash', 'empty', 'empty',
    'empty', 'blocker', 'prism', 'prism', 'mirror_back', 'mirror_back',
    'empty', 'empty', 'mirror_back', 'mirror_back', 'empty', 'empty',
    'blocker', 'mirror_back', 'empty', 'mirror_back', 'empty', 'empty',
    'blocker', 'mirror_back', 'empty', 'empty', 'mirror_back', 'mirror_back',
    ],
  },
  {
    id: 7,
    name: 'SCHEME 07',
    moves: 14,
    source: { r: 3, c: 0, dir: 'E' },
    targets: [
      { r: 3, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 5, side: 'bottom', color: '#EFC04C' },
      { r: 4, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[31, 30], [22, 16], [19, 13], [28, 27]],
    grid: [
    'prism', 'mirror_back', 'mirror_slash', 'prism', 'empty', 'empty',
    'empty', 'empty', 'empty', 'empty', 'empty', 'blocker',
    'mirror_back', 'prism', 'empty', 'empty', 'prism', 'empty',
    'empty', 'blocker', 'empty', 'empty', 'mirror_back', 'empty',
    'prism', 'empty', 'mirror_back', 'mirror_back', 'mirror_slash', 'empty',
    'mirror_back', 'blocker', 'empty', 'empty', 'empty', 'mirror_back',
    ],
  },
  {
    id: 8,
    name: 'SCHEME 08',
    moves: 14,
    source: { r: 1, c: 0, dir: 'E' },
    targets: [
      { r: 1, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 3, side: 'bottom', color: '#EFC04C' },
      { r: 2, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[8, 2], [33, 27], [9, 3], [15, 21]],
    grid: [
    'mirror_slash', 'mirror_slash', 'prism', 'prism', 'blocker', 'mirror_slash',
    'empty', 'empty', 'mirror_slash', 'blocker', 'empty', 'empty',
    'blocker', 'blocker', 'empty', 'blocker', 'empty', 'empty',
    'empty', 'mirror_back', 'empty', 'mirror_back', 'mirror_back', 'empty',
    'empty', 'blocker', 'empty', 'mirror_back', 'prism', 'empty',
    'empty', 'mirror_back', 'mirror_back', 'mirror_slash', 'empty', 'prism',
    ],
  },
  {
    id: 9,
    name: 'SCHEME 09',
    moves: 14,
    source: { r: 1, c: 0, dir: 'E' },
    targets: [
      { r: 1, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 3, side: 'bottom', color: '#EFC04C' },
      { r: 4, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[10, 4], [7, 1], [33, 34], [31, 30]],
    grid: [
    'prism', 'prism', 'empty', 'mirror_back', 'prism', 'mirror_slash',
    'empty', 'empty', 'empty', 'empty', 'mirror_back', 'empty',
    'mirror_slash', 'empty', 'blocker', 'mirror_back', 'empty', 'prism',
    'mirror_back', 'empty', 'empty', 'mirror_slash', 'empty', 'empty',
    'prism', 'empty', 'mirror_back', 'mirror_back', 'mirror_back', 'empty',
    'mirror_back', 'mirror_slash', 'empty', 'prism', 'mirror_back', 'blocker',
    ],
  },
  {
    id: 10,
    name: 'SCHEME 10',
    moves: 14,
    source: { r: 1, c: 0, dir: 'E' },
    targets: [
      { r: 1, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 2, side: 'bottom', color: '#EFC04C' },
      { r: 3, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[9, 3], [31, 30], [32, 33], [7, 1]],
    grid: [
    'mirror_back', 'prism', 'empty', 'prism', 'mirror_back', 'mirror_slash',
    'empty', 'blocker', 'empty', 'blocker', 'empty', 'empty',
    'blocker', 'empty', 'mirror_back', 'empty', 'mirror_back', 'empty',
    'blocker', 'empty', 'prism', 'mirror_back', 'empty', 'empty',
    'mirror_slash', 'empty', 'empty', 'prism', 'prism', 'mirror_back',
    'mirror_back', 'blocker', 'empty', 'mirror_back', 'blocker', 'mirror_back',
    ],
  },
  {
    id: 11,
    name: 'SCHEME 11',
    moves: 14,
    source: { r: 3, c: 0, dir: 'E' },
    targets: [
      { r: 3, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 3, side: 'bottom', color: '#EFC04C' },
      { r: 4, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[32, 31], [33, 27], [28, 34], [20, 14]],
    grid: [
    'mirror_back', 'prism', 'empty', 'blocker', 'empty', 'blocker',
    'mirror_back', 'mirror_back', 'mirror_slash', 'prism', 'blocker', 'empty',
    'empty', 'mirror_slash', 'prism', 'mirror_back', 'prism', 'empty',
    'empty', 'empty', 'empty', 'empty', 'prism', 'empty',
    'mirror_slash', 'empty', 'empty', 'mirror_back', 'prism', 'empty',
    'empty', 'mirror_back', 'prism', 'prism', 'mirror_back', 'blocker',
    ],
  },
  {
    id: 12,
    name: 'SCHEME 12',
    moves: 14,
    source: { r: 3, c: 0, dir: 'E' },
    targets: [
      { r: 3, c: 5, side: 'right', color: '#D93A67' },
      { r: 5, c: 3, side: 'bottom', color: '#EFC04C' },
      { r: 4, c: 5, side: 'right', color: '#34B9AB' },
    ],
    solution: [[22, 16], [33, 34], [28, 27], [32, 31]],
    grid: [
    'blocker', 'empty', 'prism', 'blocker', 'blocker', 'mirror_back',
    'mirror_slash', 'empty', 'blocker', 'mirror_back', 'prism', 'empty',
    'empty', 'blocker', 'prism', 'mirror_back', 'prism', 'blocker',
    'empty', 'empty', 'prism', 'empty', 'mirror_slash', 'empty',
    'mirror_back', 'empty', 'empty', 'mirror_back', 'mirror_slash', 'empty',
    'prism', 'mirror_back', 'blocker', 'prism', 'mirror_back', 'empty',
    ],
  },
];

export function getLevel(index: number): Level {
  const safe = ((index % LEVELS.length) + LEVELS.length) % LEVELS.length;
  return LEVELS[safe];
}
