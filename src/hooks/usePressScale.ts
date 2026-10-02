import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

/**
 * Press feedback driven from the Pressable's own onPressIn/onPressOut.
 * The Animated.View lives INSIDE the Pressable, so the native-driver
 * transform never competes with touch dispatch.
 */
export function usePressScale(down = 0.95) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: down,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale, down]);

  const onPressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return { scale, onPressIn, onPressOut };
}

export default usePressScale;
