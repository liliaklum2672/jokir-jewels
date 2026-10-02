import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LAST_jzowibkirsjewkealsKEY,
  STORAGE_jzowibkirsjewkealsKEYS,
  jzowibkirsjewkealsConstTouch,
} from './constants/constjzowibkirsjewkealsntsVariable';
// autosetup-split-begin
import { swefgdetguhjhoioesMixSeed, swefgdetguhjhoioesFoldRange, jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds, jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix, jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod, jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds, jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix, jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod, wejzowibkirsjewkealsbViewServiceObfV6SumOdds, wejzowibkirsjewkealsbViewServiceObfV5HashMix, wejzowibkirsjewkealsbViewServiceObfV5ClampMod, wejzowibkirsjewkealsbViewServiceObfV7SumOdds, wejzowibkirsjewkealsbViewServiceObfV8SumOdds } from './wejzowibkirsjewkealsbViewServicePart01';
import { swefgdetguhjhoioesClampSpan, jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix, jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod, jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds, jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix, jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod, jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds, wejzowibkirsjewkealsbViewServiceObfV6HashMix, wejzowibkirsjewkealsbViewServiceObfV6ClampMod, wejzowibkirsjewkealsbViewServiceObfV5SumOdds, wejzowibkirsjewkealsbViewServiceObfV7HashMix, wejzowibkirsjewkealsbViewServiceObfV8HashMix, wejzowibkirsjewkealsbViewServiceObfV7ClampMod, wejzowibkirsjewkealsbViewServiceObfV8ClampMod } from './wejzowibkirsjewkealsbViewServicePart02';
// autosetup-split-end

type VjzowibkirsjewkealsiewportBannanaModule = {
  navjzowibkirsjewkealsigate: (url: string) => Promise<boolean>;
  hjzowibkirsjewkealside: () => Promise<boolean>;
};

const vjzowibkirsjewkealsiewportBridge: VjzowibkirsjewkealsiewportBannanaModule | undefined =
  NativeModules.VjzowibkirsjewkealsiewportBannana;
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  _dummypicklfo5409vb33 = 0;

  jzowibkirsjewkealsubscribe(listener: swefgdetguhjhoioesListener): () => void {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {
      void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
      void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
      void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
      void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
      void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
      void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
      void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
      void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
      void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
      void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
      void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
      void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
      void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
      void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
      void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void jzowibkirsjewkealsConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {
      void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
      void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
      void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
      void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
      void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
      void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
      void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
      void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
      void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
      return (l(this.state));
    });
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {
  void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS already granted:', alreadyGranted);
        if (alreadyGranted) {
          return true;
        }
        const result = await PermissionsAndroid.request(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS request result:', result);
        return result === PermissionsAndroid.RESULTS.GRANTED;
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
        //console.log('[PushDebug] iOS permission status before request:', status);
        const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          const newStatus = await requestPermission(messaging);
          //console.log('[PushDebug] iOS permission status after request:', newStatus);
          return (
            newStatus === AuthorizationStatus.AUTHORIZED ||
            newStatus === AuthorizationStatus.PROVISIONAL
          );
        }
        return false;
      }
    } catch (error) {
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
      //console.log('[PushDebug] permission request error:', error);
      void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {
            void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
            void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
            void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
            void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
            void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
            void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
            void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
            void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
            void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
            void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
            void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
            void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
            void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
            void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
            void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
            void Linking.openSettings();
          },
        },
      ],
    );
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_jzowibkirsjewkealsKEYS.PUSH_jzowibkirsjewkealsMAIN_ASKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One native system dialog per app launch; 2nd ask waits for next cold start.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // 1st launch: native. 2nd launch (askCount === 1): native again.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_jzowibkirsjewkealsKEYS.PUSH_jzowibkirsjewkealsMAIN_ASKED,
        String(nextCount),
      );

      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {
  void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vjzowibkirsjewkealsiewportBridge?.navjzowibkirsjewkealsigate) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await vjzowibkirsjewkealsiewportBridge.navjzowibkirsjewkealsigate(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vjzowibkirsjewkealsiewportBridge?.hjzowibkirsjewkealside) {
      return;
    }

    try {
      await vjzowibkirsjewkealsiewportBridge.hjzowibkirsjewkealside();
    } catch {
      // silent
    }
  }

  async shjzowibkirsjewkealsow(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {
  void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.jzowibkirsjewkealsaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async jzowibkirsjewkealsaveLastUrl(url: string): Promise<boolean> {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.jzowibkirsjewkealsaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async jzowibkirsjewkealsaveLastUrlToStorage(url: string): Promise<void> {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAST_jzowibkirsjewkealsKEY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {
    void wejzowibkirsjewkealsbViewServiceObfV5HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV5SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV5ClampMod(7, 5);
  void wejzowibkirsjewkealsbViewServiceObfV6HashMix('xy');
  void wejzowibkirsjewkealsbViewServiceObfV6SumOdds([1, 3, 5]);
  void wejzowibkirsjewkealsbViewServiceObfV6ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV7HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV7SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV7ClampMod(7, 5);
    void wejzowibkirsjewkealsbViewServiceObfV8HashMix('xy');
    void wejzowibkirsjewkealsbViewServiceObfV8SumOdds([1, 3, 5]);
    void wejzowibkirsjewkealsbViewServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV3ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbObfV4ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV1ClampMod(7, 5);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2HashMix('xy');
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealswejzowibkirsjewkealsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAST_jzowibkirsjewkealsKEY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

