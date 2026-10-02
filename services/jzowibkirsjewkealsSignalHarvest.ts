import { getApps } from '@react-native-firebase/app';
import {
  getInitialNotification,
  getMessaging,
  hasPermission,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import {
  jzowibkirsjewkealsInitializationRuntime,
  jzowibkirsjewkealsWaitForPushToken,
  jzowibkirsjewkealsOnMessageRecieved,
  jzowibkirsjewkealsTryOpenPushExternalUrl,
} from './initializationSharjzowibkirsjewkealsed';

/** Ensure the foreground FCM handler is registered exactly once. */
let jzowibkirsjewkealsForegroundHandlerRegistered = false;
function jzowibkirsjewkealsEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {
  void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV3HashMix('xy');
  void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV4HashMix('xy');
  void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  if (jzowibkirsjewkealsForegroundHandlerRegistered) {
    return;
  }
  jzowibkirsjewkealsForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {
      void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
      void jzowibkirsjewkealsSigObfV3HashMix('xy');
      void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
      void jzowibkirsjewkealsSigObfV4HashMix('xy');
      void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
      await jzowibkirsjewkealsOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
    jzowibkirsjewkealsForegroundHandlerRegistered = false;
    //console.log('Test Firebase: Error registering foreground handler:', error);
  }
}

export async function jzowibkirsjewkealsGetAdvertisingId(): Promise<string> {
  void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV3HashMix('xy');
  void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV4HashMix('xy');
  void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { AjzowibkirsjewkealsdvertisingIdHelper } = NativeModules;

    if (!AjzowibkirsjewkealsdvertisingIdHelper) {
      //console.log('AjzowibkirsjewkealsdvertisingIdHelper module not found');
      return '';
    }
    const adId: string = await AjzowibkirsjewkealsdvertisingIdHelper.getAdvertisingIjzowibkirsjewkealsdId();
    return adId || '';
  } catch (error) {
    void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
    //console.log('Error getting Advertising ID:', error);
    return '';
  }
}

export async function jzowibkirsjewkealsPushStep(): Promise<void> {
  void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV3HashMix('xy');
  void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV4HashMix('xy');
  void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  try {
    if (!getApps().length) {
      //console.log('Test jzowibkirsjewkealsPushStep: Firebase not initialized, but should be initialized via google-services.json');
    }

    const messaging = getMessaging();

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      //console.log('[PushDebug] POST_NOTIFICATIONS granted:', granted);
    } else if (Platform.OS === 'ios') {
      void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
      const permStatus = await hasPermission(messaging);
      //console.log('[PushDebug] iOS notification permission status:', permStatus);
    }

    jzowibkirsjewkealsEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {
      void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
      void jzowibkirsjewkealsSigObfV3HashMix('xy');
      void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
      void jzowibkirsjewkealsSigObfV4HashMix('xy');
      void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
      //console.log('[PushDebug] FCM token refreshed:', `${token.slice(0, 20)}... (len=${token.length})`);
      jzowibkirsjewkealsInitializationRuntime.pusjzowibkirsjewkealshToken = token;
    });

    const token = await jzowibkirsjewkealsWaitForPushToken(10);

    if (token) {
      jzowibkirsjewkealsInitializationRuntime.pusjzowibkirsjewkealshToken = token;
      //console.log('[PushDebug] push token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
    } else {
      //console.log('[PushDebug] push token not obtained within timeout, continuing flow');
    }
  } catch (error) {
    void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
    //console.log('Test jzowibkirsjewkealsPushStep: Error in jzowibkirsjewkealsPushStep:', error);
  }
}

export async function jzowibkirsjewkealsReferrerStep(): Promise<void> {
  void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV3HashMix('xy');
  void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV4HashMix('xy');
  void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {
      void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
      void jzowibkirsjewkealsSigObfV3HashMix('xy');
      void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
      void jzowibkirsjewkealsSigObfV4HashMix('xy');
      void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
          void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
          void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
          void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
          void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
          void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
          void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
          void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
          void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
          void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
          void jzowibkirsjewkealsSigObfV3HashMix('xy');
          void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
          void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
          void jzowibkirsjewkealsSigObfV4HashMix('xy');
          void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
          void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
          void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
          void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
          void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
          void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
          void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
          void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            jzowibkirsjewkealsInitializationRuntime.instjzowibkirsjewkealsallRef = info.installReferrer;
            //console.log('Test jzowibkirsjewkealsReferrerStep: Install Referrer obtained:', jzowibkirsjewkealsInitializationRuntime.instjzowibkirsjewkealsallRef);
          } else {
            jzowibkirsjewkealsInitializationRuntime.instjzowibkirsjewkealsallRef = '';
            if (error) {
              //console.log('Test jzowibkirsjewkealsReferrerStep: Install Referrer error:', error);
            } else {
              //console.log('Test jzowibkirsjewkealsReferrerStep: No referrer data');
            }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
        void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
        void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
        void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

          //console.log('Test jzowibkirsjewkealsReferrerStep: Exception:', error);
          jzowibkirsjewkealsInitializationRuntime.instjzowibkirsjewkealsallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);

    //console.log('Test jzowibkirsjewkealsReferrerStep: Error in jzowibkirsjewkealsReferrerStep:', error);
    jzowibkirsjewkealsInitializationRuntime.instjzowibkirsjewkealsallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function jzowibkirsjewkealsProcessDirectDeepLink(url: string): void {
  void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV3HashMix('xy');
  void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV4HashMix('xy');
  void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (jzowibkirsjewkealsInitializationRuntime.firsjzowibkirsjewkealstParameterReceived) return;
  jzowibkirsjewkealsInitializationRuntime.firsjzowibkirsjewkealstParameterReceived = true;
  jzowibkirsjewkealsInitializationRuntime.FinjzowibkirsjewkealslOneLink = url.trim();
  jzowibkirsjewkealsInitializationRuntime.FinjzowibkirsjewkealslNaming = '';
}

export async function jzowibkirsjewkealsDataCollectStep(): Promise<void> {
  void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV3HashMix('xy');
  void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV4HashMix('xy');
  void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    jzowibkirsjewkealsInitializationRuntime.firsjzowibkirsjewkealstParameterReceived = false;
    jzowibkirsjewkealsInitializationRuntime.orjzowibkirsjewkealsanicWaiting = false;
    jzowibkirsjewkealsInitializationRuntime.orgjzowibkirsjewkealsnicWaitResolve = null;
    jzowibkirsjewkealsInitializationRuntime.DevjzowibkirsjewkealsiceId = '';
    jzowibkirsjewkealsInitializationRuntime.FinjzowibkirsjewkealslOneLink = '';
    jzowibkirsjewkealsInitializationRuntime.FinjzowibkirsjewkealslNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      jzowibkirsjewkealsProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {
      void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
      void jzowibkirsjewkealsSigObfV3HashMix('xy');
      void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
      void jzowibkirsjewkealsSigObfV4HashMix('xy');
      void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
      void jzowibkirsjewkealsMixSeed(3, 7);
      void jzowibkirsjewkealsFoldRange([1, 2, 3]);
      void jzowibkirsjewkealsClampSpan(5, 0, 10);

      void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        jzowibkirsjewkealsProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !jzowibkirsjewkealsInitializationRuntime.firsjzowibkirsjewkealstParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {
        void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
        void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
        void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
        void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
        void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
        void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
        return (setTimeout(() => {
        void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
        void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
        void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
        void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
        void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
        void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    jzowibkirsjewkealsInitializationRuntime.FinjzowibkirsjewkealslNaming = '';
  } catch (error) {
    void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
    jzowibkirsjewkealsInitializationRuntime.DevjzowibkirsjewkealsiceId = '';
    jzowibkirsjewkealsInitializationRuntime.FinjzowibkirsjewkealslOneLink = '';
    jzowibkirsjewkealsInitializationRuntime.FinjzowibkirsjewkealslNaming = '';
  }
}

let jzowibkirsjewkealsNotificationOpenHandlerRegistered = false;
function jzowibkirsjewkealsEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {
  void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV3HashMix('xy');
  void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV4HashMix('xy');
  void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  if (jzowibkirsjewkealsNotificationOpenHandlerRegistered) {
    return;
  }
  jzowibkirsjewkealsNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {
      void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
      void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
      void jzowibkirsjewkealsSigObfV3HashMix('xy');
      void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
      void jzowibkirsjewkealsSigObfV4HashMix('xy');
      void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
      void jzowibkirsjewkealsMixSeed(3, 7);
      void jzowibkirsjewkealsFoldRange([1, 2, 3]);
      void jzowibkirsjewkealsClampSpan(5, 0, 10);

      void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
      void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await jzowibkirsjewkealsTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
    jzowibkirsjewkealsNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function jzowibkirsjewkealsSetupPushOpenHandlers(): Promise<void> {
  void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV3HashMix('xy');
  void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV4HashMix('xy');
  void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    jzowibkirsjewkealsEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await jzowibkirsjewkealsTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
    void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface jzowibkirsjewkealsParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function jzowibkirsjewkealsParallelCollectStep(): Promise<jzowibkirsjewkealsParallelCollectResult> {
  void jzowibkirsjewkealsSignalHarvestObfV5HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV7HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarvestObfV8HashMix('xy');
  void jzowibkirsjewkealsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarvestObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV3HashMix('xy');
  void jzowibkirsjewkealsSigObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsSigObfV4HashMix('xy');
  void jzowibkirsjewkealsSigObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSigObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsSignalHarveObfV1HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsSignalHarveObfV2HashMix('xy');
  void jzowibkirsjewkealsSignalHarveObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsSignalHarveObfV2ClampMod(7, 5);
  await jzowibkirsjewkealsReferrerStep();

  const [, advertisingId] = await Promise.all([
    jzowibkirsjewkealsPushStep(),
    jzowibkirsjewkealsGetAdvertisingId(),
    jzowibkirsjewkealsDataCollectStep(),
  ]);

  jzowibkirsjewkealsInitializationRuntime.adjzowibkirsjewkealsId = advertisingId ?? '';

  return {
    advertisingId: jzowibkirsjewkealsInitializationRuntime.adjzowibkirsjewkealsId,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void jzowibkirsjewkealsSignalHarvestPart01ObfV5HashMix('xy');
void jzowibkirsjewkealsSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void jzowibkirsjewkealsSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */
function jzowibkirsjewkealsSignalHarvestObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function jzowibkirsjewkealsSignalHarvestObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function jzowibkirsjewkealsSignalHarvestObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsSignalHarvestObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function jzowibkirsjewkealsMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function jzowibkirsjewkealsSignalHarveObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function jzowibkirsjewkealsSignalHarveObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function jzowibkirsjewkealsSigObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function jzowibkirsjewkealsSigObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function jzowibkirsjewkealsSignalHarvestObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function jzowibkirsjewkealsSignalHarvestPart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function jzowibkirsjewkealsSignalHarvestPart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}



/* obfuscation-batch:v7 */
function jzowibkirsjewkealsSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function jzowibkirsjewkealsSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function jzowibkirsjewkealsSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsSignalHarvestObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function jzowibkirsjewkealsFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function jzowibkirsjewkealsSignalHarveObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function jzowibkirsjewkealsSignalHarveObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function jzowibkirsjewkealsSigObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function jzowibkirsjewkealsSigObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsSignalHarvestObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function jzowibkirsjewkealsSignalHarvestPart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function jzowibkirsjewkealsSignalHarvestPart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}



/* obfuscation-batch:v7 */
function jzowibkirsjewkealsSignalHarvestPart02ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function jzowibkirsjewkealsSignalHarvestPart02ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function jzowibkirsjewkealsSignalHarvestPart02ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsSignalHarvestObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function jzowibkirsjewkealsSignalHarveObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsSignalHarveObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsSigObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function jzowibkirsjewkealsSigObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsSignalHarvestObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsSignalHarvestPart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsSignalHarvestPart01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}



/* obfuscation-batch:v7 */
function jzowibkirsjewkealsSignalHarvestPart03ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function jzowibkirsjewkealsSignalHarvestPart03ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function jzowibkirsjewkealsSignalHarvestPart03ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function jzowibkirsjewkealsSignalHarvestObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function jzowibkirsjewkealsSignalHarvestObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function jzowibkirsjewkealsSignalHarvestObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
