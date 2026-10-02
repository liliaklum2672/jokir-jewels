import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useAppjzowibkirsjewkealsInitialization } from './services/initjzowibkirsjewkealsializationFlow';
import AppjzowibkirsjewkealsPlaceholder from './Layouts/Game/GamejzowibkirsjewkealsInit';
import LoaderjzowibkirsjewkealsScreen from './Layouts/Game/screens/LoaderjzowibkirsjewkealsScreen';
import { jzowibkirsjewkealsViewportGetState, jzowibkirsjewkealsViewportRestore } from './services/jzowibkirsjewkealsViewportHost';

function App() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AppjzowibkirsjewkealsContent />
    </SafeAreaProvider>
  );
}

function AppjzowibkirsjewkealsContent() {
  const { isjzowibkirsjewkealsLoading, isjzowibkirsjewkealsLoadPlaceholder } = useAppjzowibkirsjewkealsInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menujzowibkirsjewkealsArmed, setMenujzowibkirsjewkealsArmed] = useState(false);
  const appjzowibkirsjewkealsState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const showjzowibkirsjewkealsGame =
    !isjzowibkirsjewkealsLoading && isjzowibkirsjewkealsLoadPlaceholder;

  const handlejzowibkirsjewkealsFirstProgress = useCallback(() => {
    setMenujzowibkirsjewkealsArmed(true);
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = appjzowibkirsjewkealsState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = jzowibkirsjewkealsViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          jzowibkirsjewkealsViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      appjzowibkirsjewkealsState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menujzowibkirsjewkealsArmed || showjzowibkirsjewkealsGame) && (
        <AppjzowibkirsjewkealsPlaceholder startjzowibkirsjewkealsAtMenu />
      )}
      {!showjzowibkirsjewkealsGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderjzowibkirsjewkealsScreen
            doneOnFijzowibkirsjewkealsrstCycle
            onDjzowibkirsjewkealsone={handlejzowibkirsjewkealsFirstProgress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
