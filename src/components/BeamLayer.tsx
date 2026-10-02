import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Circle, Polyline } from 'react-native-svg';

import { BOARD_FRAME, BOARD_H, BOARD_W, TILE } from '../constants/config';
import type { Ray, Source } from '../game/beam';

interface Props {
  rays: Ray[];
  source: Source;
  dim?: boolean;
}

const OPPOSITE = { N: 'S', S: 'N', E: 'W', W: 'E' } as const;
const OFF = {
  N: { x: 0, y: -1 },
  S: { x: 0, y: 1 },
  E: { x: 1, y: 0 },
  W: { x: -1, y: 0 },
};

const cx = (c: number) => BOARD_FRAME + c * TILE + TILE / 2;
const cy = (r: number) => BOARD_FRAME + r * TILE + TILE / 2;

/**
 * Static SVG rendering of the traced light. Two strokes per ray: a wide
 * low-opacity halo and a crisp core. No animated SVG props — keeping the
 * canvas still is what lets the UI automation reach an idle state.
 */
export function BeamLayer({ rays, source, dim = false }: Props) {
  const drawn = useMemo(
    () =>
      rays.map((ray) => {
        const pts = ray.points.map((p) => ({ x: cx(p.c), y: cy(p.r) }));
        if (pts.length === 0) {
          return { points: '', color: ray.color, nodes: [] as Array<{ x: number; y: number }> };
        }
        // Extend the head back onto the frame so light enters from the emitter.
        const first = ray.points[0];
        if (first.r === source.r && first.c === source.c) {
          const back = OFF[OPPOSITE[source.dir]];
          pts.unshift({
            x: pts[0].x + back.x * (TILE / 2),
            y: pts[0].y + back.y * (TILE / 2),
          });
        }
        // Extend the tail out through the exit facet.
        if (ray.exit) {
          const dir = ray.exit.side;
          const out =
            dir === 'top'
              ? OFF.N
              : dir === 'bottom'
              ? OFF.S
              : dir === 'left'
              ? OFF.W
              : OFF.E;
          const tail = pts[pts.length - 1];
          pts.push({
            x: tail.x + out.x * (TILE / 2 + BOARD_FRAME),
            y: tail.y + out.y * (TILE / 2 + BOARD_FRAME),
          });
        }
        return {
          points: pts.map((p) => `${p.x},${p.y}`).join(' '),
          color: ray.color,
          nodes: pts.slice(1, -1),
        };
      }),
    [rays, source],
  );

  return (
    <Svg
      pointerEvents="none"
      style={StyleSheet.absoluteFill}
      width={BOARD_W}
      height={BOARD_H}>
      {drawn.map((d, i) =>
        d.points ? (
          <Polyline
            key={`halo-${i}`}
            points={d.points}
            fill="none"
            stroke={d.color}
            strokeWidth={11}
            strokeOpacity={dim ? 0.08 : 0.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : null,
      )}
      {drawn.map((d, i) =>
        d.points ? (
          <Polyline
            key={`core-${i}`}
            points={d.points}
            fill="none"
            stroke={d.color}
            strokeWidth={4}
            strokeOpacity={dim ? 0.3 : 0.95}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : null,
      )}
      {drawn.map((d, i) =>
        d.nodes.map((n, j) => (
          <Circle
            key={`node-${i}-${j}`}
            cx={n.x}
            cy={n.y}
            r={3.4}
            fill={d.color}
            fillOpacity={dim ? 0.3 : 0.9}
          />
        )),
      )}
    </Svg>
  );
}

export default BeamLayer;
