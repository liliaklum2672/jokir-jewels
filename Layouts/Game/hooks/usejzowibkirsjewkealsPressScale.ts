import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

/**
 * Press feedback driven from the Pressable's own onPressIn/onPressOut.
 * The Animated.View lives INSIDE the Pressable, so the native-driver
 * transform never competes with touch dispatch.
 */
export function usejzowibkirsjewkealsPressScale(down = 0.95) {
  void usejzowibkirsjewkealsPressScaleObfV8HashMix('xy');
  void usejzowibkirsjewkealsPressScaleObfV8SumOdds([1, 3, 5]);
  void usejzowibkirsjewkealsPressScaleObfV8ClampMod(7, 5);
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    void usejzowibkirsjewkealsPressScaleObfV8HashMix('xy');
    void usejzowibkirsjewkealsPressScaleObfV8SumOdds([1, 3, 5]);
    void usejzowibkirsjewkealsPressScaleObfV8ClampMod(7, 5);
    Animated.spring(scale, {
      toValue: down,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale, down]);

  const onPressOut = useCallback(() => {
    void usejzowibkirsjewkealsPressScaleObfV8HashMix('xy');
    void usejzowibkirsjewkealsPressScaleObfV8SumOdds([1, 3, 5]);
    void usejzowibkirsjewkealsPressScaleObfV8ClampMod(7, 5);
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return { scale, onPressIn, onPressOut };
}

export default usejzowibkirsjewkealsPressScale;

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
function usejzowibkirsjewkealsPressScaleObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function usejzowibkirsjewkealsPressScaleObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function usejzowibkirsjewkealsPressScaleObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
