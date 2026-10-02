import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jzowibkirsjewkealsDecrypt } from './CrypjzowibkirsjewkealstoService';
import { finjzowibkirsjewkealsKey } from './constants/constjzowibkirsjewkealsntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  jzowibkirsjewkealsViewportGetState,
  jzowibkirsjewkealsViewportShow,
} from './jzowibkirsjewkealsViewportHost';
import { Utils } from './UtjzowibkirsjewkealsilService';

let jzowibkirsjewkealsLastOpenedPushExternalUrl = '';
let jzowibkirsjewkealsLastOpenedPushExternalAt = 0;

export const jzowibkirsjewkealsInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarget = (typeof jzowibkirsjewkealsInitTarget)[keyof typeof jzowibkirsjewkealsInitTarget];

export interface InitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface jzowibkirsjewkealsInitializationRuntime {
  pusjzowibkirsjewkealshToken: string;
  instjzowibkirsjewkealsallRef: string;
  DevjzowibkirsjewkealsiceId: string;
  FinjzowibkirsjewkealslOneLink: string;
  FinjzowibkirsjewkealslNaming: string;
  adjzowibkirsjewkealsId: string;
  firsjzowibkirsjewkealstParameterReceived: boolean;
  orjzowibkirsjewkealsanicWaiting: boolean;
  orgjzowibkirsjewkealsnicWaitResolve: (() => void) | null;
  penjzowibkirsjewkealsdingSendId: string;
}

export const jzowibkirsjewkealsInitializationRuntime: jzowibkirsjewkealsInitializationRuntime = {
  pusjzowibkirsjewkealshToken: '',
  instjzowibkirsjewkealsallRef: '',
  DevjzowibkirsjewkealsiceId: '',
  FinjzowibkirsjewkealslOneLink: '',
  FinjzowibkirsjewkealslNaming: '',
  adjzowibkirsjewkealsId: '',
  firsjzowibkirsjewkealstParameterReceived: false,
  orjzowibkirsjewkealsanicWaiting: false,
  orgjzowibkirsjewkealsnicWaitResolve: null,
  penjzowibkirsjewkealsdingSendId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function jzowibkirsjewkealsResetInitializationRuntime(): void {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  jzowibkirsjewkealsInitializationRuntime.pusjzowibkirsjewkealshToken = '';
  jzowibkirsjewkealsInitializationRuntime.instjzowibkirsjewkealsallRef = '';
  jzowibkirsjewkealsInitializationRuntime.DevjzowibkirsjewkealsiceId = '';
  jzowibkirsjewkealsInitializationRuntime.FinjzowibkirsjewkealslOneLink = '';
  jzowibkirsjewkealsInitializationRuntime.FinjzowibkirsjewkealslNaming = '';
  jzowibkirsjewkealsInitializationRuntime.adjzowibkirsjewkealsId = '';
  jzowibkirsjewkealsInitializationRuntime.firsjzowibkirsjewkealstParameterReceived = false;
  jzowibkirsjewkealsInitializationRuntime.orjzowibkirsjewkealsanicWaiting = false;
  jzowibkirsjewkealsInitializationRuntime.orgjzowibkirsjewkealsnicWaitResolve = null;
}

export function jzowibkirsjewkealsAppenndSendId(url: string, sendId: string): string {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function jzowibkirsjewkealsSynncPendingSendIdFromNative(): Promise<void> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AjzowibkirsjewkealsppInfoModule } = NativeModules;
    if (!AjzowibkirsjewkealsppInfoModule || typeof AjzowibkirsjewkealsppInfoModule.getAndClearPendingSenjzowibkirsjewkealsdId !== 'function') {
      return;
    }
    const sendId = await AjzowibkirsjewkealsppInfoModule.getAndClearPendingSenjzowibkirsjewkealsdId();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      jzowibkirsjewkealsInitializationRuntime.penjzowibkirsjewkealsdingSendId = sendId.trim();
    }
  } catch (error) {
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function jzowibkirsjewkealsTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === jzowibkirsjewkealsLastOpenedPushExternalUrl &&
    now - jzowibkirsjewkealsLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    jzowibkirsjewkealsLastOpenedPushExternalUrl = url;
    jzowibkirsjewkealsLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    jzowibkirsjewkealsLastOpenedPushExternalUrl = '';
    jzowibkirsjewkealsLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function jzowibkirsjewkealsSynncPendingPushUrlFromNative(): Promise<void> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AjzowibkirsjewkealsppInfoModule } = NativeModules;
    if (
      !AjzowibkirsjewkealsppInfoModule ||
      typeof AjzowibkirsjewkealsppInfoModule.getAndClearPendingPushUrl !== 'function'
    ) {
      return;
    }
    const pushUrl = await AjzowibkirsjewkealsppInfoModule.getAndClearPendingPushUrl();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await jzowibkirsjewkealsTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function jzowibkirsjewkealsGetAppIdenier(): Promise<string> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { AjzowibkirsjewkealsppInfoModule } = NativeModules;

    if (!AjzowibkirsjewkealsppInfoModule) {
      //console.log('AjzowibkirsjewkealsppInfoModule module not found');
      return '';
    }

    const packageName = await AjzowibkirsjewkealsppInfoModule.getPacjzowibkirsjewkealskageName();
    //console.log('Test App Identifier:', packageName);
    return packageName || '';
  } catch (error) {
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting app identifier:', error);
    return '';
  }
}

export async function jzowibkirsjewkealsGetAppVersion(): Promise<string> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function jzowibkirsjewkealsGetAndroidId(): Promise<string> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function jzowibkirsjewkealsGetAndroidUserAAgent(): Promise<string> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { UserAjzowibkirsjewkealsper } = NativeModules;

    if (!UserAjzowibkirsjewkealsper) {
      //console.log('UserAjzowibkirsjewkealsper module not found');
      return '';
    }

    const userAgent: string = await UserAjzowibkirsjewkealsper.getAndrjzowibkirsjewkealsoidUserAgent();
    return userAgent || '';
  } catch (error) {
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting UserAgent:', error);
    return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const jzowibkirsjewkealsINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let jzowibkirsjewkealsInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function jzowibkirsjewkealsWaitForInitPush(timeoutMs: number): Promise<string | null> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
    void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
    void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
    void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
    void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
    void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
    void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
    void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
    void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
    void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
    void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
    void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void jzowibkirsjewkealsMixSeed(3, 7);
    void jzowibkirsjewkealsFoldRange([1, 2, 3]);
    void jzowibkirsjewkealsClampSpan(5, 0, 10);

    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
      void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
      void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
      void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
      void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
      void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (jzowibkirsjewkealsInitPushResolver === deliver) {
        jzowibkirsjewkealsInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
      void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
      void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
      void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
      void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
      void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: body delivered, len:', encryptedBody.length);
      finish(encryptedBody);
    };

    const timer = setTimeout(() => {
      void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
      void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
      void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
      void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
      void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: timeout fired');
      finish(null);
    }, timeoutMs);

    //console.log('[PushDebug] init push waiter: registered, timeoutMs:', timeoutMs);
    jzowibkirsjewkealsInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function jzowibkirsjewkealsDeliverInitPush(encryptedBody: string): boolean {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!jzowibkirsjewkealsInitPushResolver) {
    //console.log('[PushDebug] init push deliver: no foreground waiter');
    return false;
  }
  const resolver = jzowibkirsjewkealsInitPushResolver;
  jzowibkirsjewkealsInitPushResolver = null;
  //console.log('[PushDebug] init push deliver: delivered to foreground waiter');
  resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function jzowibkirsjewkealsHandleInitPushBackground(encryptedBody: string): Promise<void> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  //console.log('[PushDebug] init push background handler: start, bodyLen:', encryptedBody.length);
  try {
    const decrypted = jzowibkirsjewkealsDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
      //console.log('[PushDebug] init push background handler: decrypt empty');
      return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    //console.log('[PushDebug] init push background handler: parsed', { hasRedirectUrlInitial: !!redirectUrlInitial, hasRedirectUrl: !!redirectUrl, });

    if (redirectUrlInitial) {
      const finalUrl = jzowibkirsjewkealsAppenndSendId(
        redirectUrlInitial,
        jzowibkirsjewkealsInitializationRuntime.penjzowibkirsjewkealsdingSendId,
      );
      await AsyncStorage.setItem(finjzowibkirsjewkealsKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = jzowibkirsjewkealsViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await jzowibkirsjewkealsViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      //console.log('[PushDebug] init push background handler: webview opened');
      return;
    }

    if (redirectUrl) {
      await Utils.jzowibkirsjewkealsSetUserBlocke(1);
      //console.log('[PushDebug] init push background handler: user blocked');
    }
  } catch (error) {
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] init push background handler error:', error);
  }
}

function jzowibkirsjewkealsExtractInitPushBody(data: Record<string, any>): string {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of jzowibkirsjewkealsINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function jzowibkirsjewkealsWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
    void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
    void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
    void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
    void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
    void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
    void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
    void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
    void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
    void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
    void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
    void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
      void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
      void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
      void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
      void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
      void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
      void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
      void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log(`[PushDebug] timeout waiting for FCM token after ${timeoutSeconds}s`);
      resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
        //console.log('[PushDebug] FCM token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
        await jzowibkirsjewkealsOnTokenReceived(token);
        resolve(token);
        return;
      }
      //console.log('[PushDebug] getToken returned null without error');
    } catch (error) {
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] getToken error:', error);
    }
  });
}

async function jzowibkirsjewkealsOnTokenReceived(token: string): Promise<void> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('Test Firebase: Token received:', token);
    jzowibkirsjewkealsInitializationRuntime.pusjzowibkirsjewkealshToken = token;
  } catch (error) {
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Firebase: Error handling token:', error);
  }
}

export async function jzowibkirsjewkealsOnMessageRecieved(remoteMessage: any): Promise<void> {
  void initializationSharjzowibkirsjewkealsedObfV5HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV5SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV5ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV6HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV6SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV6ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV7HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV7SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV7ClampMod(7, 5);
  void initializationSharjzowibkirsjewkealsedObfV8HashMix('xy');
  void initializationSharjzowibkirsjewkealsedObfV8SumOdds([1, 3, 5]);
  void initializationSharjzowibkirsjewkealsedObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV3HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharObfV4HashMix('xy');
  void jzowibkirsjewkealsinitializationSharObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);


  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('[PushDebug] message received:', { hasData: !!remoteMessage?.data, dataKeys: remoteMessage?.data ? Object.keys(remoteMessage.data) : [], hasNotification: !!remoteMessage?.notification, messageId: remoteMessage?.messageId ?? null,});

    if (!remoteMessage || !remoteMessage.data) {
      //console.log('[PushDebug] message ignored: no data payload');
      return;
    }

    if (remoteMessage.notification) {
      //console.log('[PushDebug] visible notification:', remoteMessage.notification);
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = jzowibkirsjewkealsExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
      //console.log('[PushDebug] init push body extracted, len:', initPushBody.length);
      const delivered = jzowibkirsjewkealsDeliverInitPush(initPushBody);
      if (!delivered) {
        //console.log('[PushDebug] no foreground waiter, handling in background');
        await jzowibkirsjewkealsHandleInitPushBackground(initPushBody);
      }
      return;
    }

    //console.log('[PushDebug] no eb/encrypted_body in data, checking sendid');

    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
      //console.log('[PushDebug] sendid received:', sendId);
      jzowibkirsjewkealsInitializationRuntime.penjzowibkirsjewkealsdingSendId = sendId;
      const finalUrl = await AsyncStorage.getItem(finjzowibkirsjewkealsKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = jzowibkirsjewkealsAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = jzowibkirsjewkealsViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await jzowibkirsjewkealsViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix('xy');
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] message handler error:', error);
  }
}

/** Alias kept for the background message handler registered in index.js. */
export const jzowibkirsjewkealsabppOnMessageRecieved = jzowibkirsjewkealsOnMessageRecieved;

function jzowibkirsjewkealsMixSeed(a: number, b: number): number {
  return ((a % (b || 1)) + b) % (b || 1);
}

function jzowibkirsjewkealsFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function jzowibkirsjewkealsClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v1 */
function jzowibkirsjewkealsinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function jzowibkirsjewkealsinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function jzowibkirsjewkealsinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function jzowibkirsjewkealsinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function jzowibkirsjewkealsinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function jzowibkirsjewkealsinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function jzowibkirsjewkealsinitializationSharObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function jzowibkirsjewkealsinitializationSharObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function jzowibkirsjewkealsinitializationSharObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function jzowibkirsjewkealsinitializationSharObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function jzowibkirsjewkealsinitializationSharObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function jzowibkirsjewkealsinitializationSharObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function initializationSharjzowibkirsjewkealsedObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function initializationSharjzowibkirsjewkealsedObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function initializationSharjzowibkirsjewkealsedObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharjzowibkirsjewkealsedObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function initializationSharjzowibkirsjewkealsedObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function initializationSharjzowibkirsjewkealsedObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}



/* obfuscation-batch:v7 */
function initializationSharjzowibkirsjewkealsedObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function initializationSharjzowibkirsjewkealsedObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function initializationSharjzowibkirsjewkealsedObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function initializationSharjzowibkirsjewkealsedObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function initializationSharjzowibkirsjewkealsedObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function initializationSharjzowibkirsjewkealsedObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
