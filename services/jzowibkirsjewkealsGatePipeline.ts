import { jzowibkirsjewkealsDecoyHubTouch } from './jzowibkirsjewkealsDecoyHub';
import { Utils } from './UtjzowibkirsjewkealsilService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, BackHandler } from 'react-native';
import { finjzowibkirsjewkealsKey } from './constants/constjzowibkirsjewkealsntsVariable';
import {
  InitializationState,
  jzowibkirsjewkealsInitTarget,
  jzowibkirsjewkealsResetInitializationRuntime,
  jzowibkirsjewkealsSynncPendingSendIdFromNative,
  jzowibkirsjewkealsSynncPendingPushUrlFromNative,
  jzowibkirsjewkealsAppenndSendId,
  jzowibkirsjewkealsInitializationRuntime,
} from './initializationSharjzowibkirsjewkealsed';

export type { InitializationState };
import {
  jzowibkirsjewkealsParallelCollectStep,
  jzowibkirsjewkealsSetupPushOpenHandlers,
} from './jzowibkirsjewkealsSignalHarvest';
import {
  jzowibkirsjewkealsInitStep,
  jzowibkirsjewkealsUnsubscribeFirebase,
} from './jzowibkirsjewkealsOfferResolve';
import { jzowibkirsjewkealsViewportShow } from './jzowibkirsjewkealsViewportHost';
// autosetup-split-begin
import { jzowibkirsjewkealsGatePipelineObfV5HashMix, jzowibkirsjewkealsGatObfV4SumOdds, jzowibkirsjewkealsGatePipelinObfV2ClampMod, jzowibkirsjewkealsGatePipelinePart01ObfV5HashMix, jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix, jzowibkirsjewkealsMixSeed, jzowibkirsjewkealsGatObfV3ClampMod, jzowibkirsjewkealsGatePipelinObfV1SumOdds, jzowibkirsjewkealsGatePipelineObfV6SumOdds, jzowibkirsjewkealsGatePipelineObfV5ClampMod, jzowibkirsjewkealsGatePipelinObfV1ClampMod, jzowibkirsjewkealsGatObfV3HashMix, jzowibkirsjewkealsGatePipelinePart01ObfV5ClampMod, jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod, jzowibkirsjewkealsGatePipelineObfV7SumOdds, jzowibkirsjewkealsGatePipelineObfV8SumOdds } from './jzowibkirsjewkealsGatePipelinePart01';
import { jzowibkirsjewkealsGatePipelinObfV1HashMix, jzowibkirsjewkealsClampSpan, jzowibkirsjewkealsGatObfV4HashMix, jzowibkirsjewkealsGatePipelineObfV6HashMix, jzowibkirsjewkealsGatePipelineObfV5SumOdds, jzowibkirsjewkealsGatePipelinObfV2HashMix, jzowibkirsjewkealsGatePipelinObfV2SumOdds, jzowibkirsjewkealsGatePipelinePart01ObfV5SumOdds, jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds, jzowibkirsjewkealsGatObfV3SumOdds, jzowibkirsjewkealsGatObfV4ClampMod, jzowibkirsjewkealsFoldRange, jzowibkirsjewkealsGatePipelineObfV6ClampMod, jzowibkirsjewkealsGatePipelineObfV7HashMix, jzowibkirsjewkealsGatePipelineObfV8HashMix, jzowibkirsjewkealsGatePipelineObfV7ClampMod, jzowibkirsjewkealsGatePipelineObfV8ClampMod } from './jzowibkirsjewkealsGatePipelinePart02';
// autosetup-split-end

const PLACEHOLDER_RESULT: InitializationState = { isLoadPlaceholder: true };
const INTERNET_FAILED_RESULT: InitializationState = { isLoadPlaceholder: false };
const WEBVIEW_RESULT: InitializationState = {
  isLoadPlaceholder: false,
  initTarget: jzowibkirsjewkealsInitTarget.webview,
};

export type jzowibkirsjewkealsMachineRunOptions = {
  retryInitialize?: () => Promise<InitializationState>;
};

async function jzowibkirsjewkealsCheckInternetConnection(
  jzowibkirsjewkealsInitialize: () => Promise<InitializationState>,
): Promise<boolean> {
  void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV3HashMix('xy');
  void jzowibkirsjewkealsGatObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV4HashMix('xy');
  void jzowibkirsjewkealsGatObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
      void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
      void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
      void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
      return (controller.abort());
    }, 15000);

    const response = await fetch('https://www.google.com', {
      method: 'HEAD',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
    void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
    void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
    return new Promise<boolean>((resolve) => {
      void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
      void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
      void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
      void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
      void jzowibkirsjewkealsGatObfV3HashMix('xy');
      void jzowibkirsjewkealsGatObfV3SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatObfV3ClampMod(7, 5);
      void jzowibkirsjewkealsGatObfV4HashMix('xy');
      void jzowibkirsjewkealsGatObfV4SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatObfV4ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
      void jzowibkirsjewkealsMixSeed(3, 7);
      void jzowibkirsjewkealsFoldRange([1, 2, 3]);
      void jzowibkirsjewkealsClampSpan(5, 0, 10);

      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
      Alert.alert(
        'No internet connection',
        'Please check your internet connection and try again',
        [
          {
            text: 'Retry',
            onPress: () => {
              void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
              void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
              void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
              void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
              void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
              void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
              void jzowibkirsjewkealsGatObfV3HashMix('xy');
              void jzowibkirsjewkealsGatObfV3SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatObfV3ClampMod(7, 5);
              void jzowibkirsjewkealsGatObfV4HashMix('xy');
              void jzowibkirsjewkealsGatObfV4SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatObfV4ClampMod(7, 5);
              void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
              void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
              void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
              void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
              void jzowibkirsjewkealsMixSeed(3, 7);
              void jzowibkirsjewkealsFoldRange([1, 2, 3]);
              void jzowibkirsjewkealsClampSpan(5, 0, 10);

              void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
              void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
              void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
              void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
              jzowibkirsjewkealsInitialize()
                .then(() => {
                  void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
                  void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
                  void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
                  void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
                  void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
                  void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
                  void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
                  void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
                  void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
                  return (resolve(false));
                })
                .catch(() => {
                  void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
                  void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
                  void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
                  void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
                  void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
                  void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
                  void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
                  void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
                  void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
                  return (resolve(false));
                });
            },
          },
          {
            text: 'Exit',
            onPress: () => {
              void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
              void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
              void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
              void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
              void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
              void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
              void jzowibkirsjewkealsGatObfV3HashMix('xy');
              void jzowibkirsjewkealsGatObfV3SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatObfV3ClampMod(7, 5);
              void jzowibkirsjewkealsGatObfV4HashMix('xy');
              void jzowibkirsjewkealsGatObfV4SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatObfV4ClampMod(7, 5);
              void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
              void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
              void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
              void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
              void jzowibkirsjewkealsMixSeed(3, 7);
              void jzowibkirsjewkealsFoldRange([1, 2, 3]);
              void jzowibkirsjewkealsClampSpan(5, 0, 10);

              void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
              void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
              void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
              void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
              void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
              BackHandler.exitApp();
              resolve(false);
            },
            style: 'destructive',
          },
        ],
        { cancelable: false },
      );
    });
  }
}

async function jzowibkirsjewkealsCheckBlockUser(): Promise<boolean> {
  void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV3HashMix('xy');
  void jzowibkirsjewkealsGatObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV4HashMix('xy');
  void jzowibkirsjewkealsGatObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
  try {
    const userBlock = await Utils.jzowibkirsjewkealsGetUserBlocke();
    return !!userBlock;
  } catch (error) {
    void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
    void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
    void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
    throw error;
  }
}

async function jzowibkirsjewkealsCheckFinalUrl(): Promise<string> {
  void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV3HashMix('xy');
  void jzowibkirsjewkealsGatObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV4HashMix('xy');
  void jzowibkirsjewkealsGatObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
  const finalUrl = await AsyncStorage.getItem(finjzowibkirsjewkealsKey);
  if (finalUrl && finalUrl !== '') {
    return jzowibkirsjewkealsAppenndSendId(
      finalUrl,
      jzowibkirsjewkealsInitializationRuntime.penjzowibkirsjewkealsdingSendId,
    );
  }
  return '';
}

async function jzowibkirsjewkealsCompletePlaceholder(
  result: InitializationState = PLACEHOLDER_RESULT,
): Promise<InitializationState> {
  void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV3HashMix('xy');
  void jzowibkirsjewkealsGatObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV4HashMix('xy');
  void jzowibkirsjewkealsGatObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
  return result;
}

async function jzowibkirsjewkealsErrorFallback(): Promise<InitializationState> {
  void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV3HashMix('xy');
  void jzowibkirsjewkealsGatObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV4HashMix('xy');
  void jzowibkirsjewkealsGatObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
  try {
    await jzowibkirsjewkealsUnsubscribeFirebase('error fallback');
  } catch {
    // Best-effort cleanup.
  }
  return jzowibkirsjewkealsCompletePlaceholder();
}

/**
 * Diversified gate pipeline (different order/shape from Henway):
 * reset+decoy → internet → signal intake (sendId + pending push URL + push handlers)
 * → blocked → cached URL OR (getLink → collect → init)
 */
export async function jzowibkirsjewkealsRunInitializationFlow(
  options?: jzowibkirsjewkealsMachineRunOptions,
): Promise<InitializationState> {
  // autosetup-decoy-begin
  void jzowibkirsjewkealsDecoyHubTouch();
  // autosetup-decoy-end
  void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV3HashMix('xy');
  void jzowibkirsjewkealsGatObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV4HashMix('xy');
  void jzowibkirsjewkealsGatObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
  jzowibkirsjewkealsResetInitializationRuntime();

  try {
    const retry =
      options?.retryInitialize ??
      (async (): Promise<InitializationState> => {
        void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
        void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
        void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
        void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
        void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
        void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
        return (INTERNET_FAILED_RESULT);
      });

    // 1) Internet check FIRST
    let hasInternet = false;
    try {
      hasInternet = await jzowibkirsjewkealsCheckInternetConnection(retry);
    } catch (error) {
      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
      hasInternet = false;
    }
    if (!hasInternet) {
      return INTERNET_FAILED_RESULT;
    }

    // 2) Signal intake: sendId + pending push URL + push open handlers
    try {
      await jzowibkirsjewkealsSynncPendingSendIdFromNative();
    } catch (error) {
      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
    }
    try {
      await jzowibkirsjewkealsSynncPendingPushUrlFromNative();
    } catch (error) {
      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
    }
    try {
      await jzowibkirsjewkealsSetupPushOpenHandlers();
    } catch (error) {
      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
    }

    // 3) Blocked check
    let isBlocked = false;
    try {
      isBlocked = await jzowibkirsjewkealsCheckBlockUser();
    } catch (error) {
      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
      return jzowibkirsjewkealsErrorFallback();
    }
    if (isBlocked) {
      try {
        await jzowibkirsjewkealsUnsubscribeFirebase('user blocked');
      } catch (error) {
        void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
        void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
        void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
        void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
      }
      return jzowibkirsjewkealsCompletePlaceholder();
    }

    // 4) Prefer cached final URL; getLink validation only when no cache
    let finalUrl = '';
    try {
      finalUrl = await jzowibkirsjewkealsCheckFinalUrl();
    } catch (error) {
      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
      return jzowibkirsjewkealsErrorFallback();
    }
    if (finalUrl) {
      try {
        await jzowibkirsjewkealsViewportShow(finalUrl);
      } catch (error) {
        void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
        void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
        void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
        void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
      }
      return WEBVIEW_RESULT;
    }

    let link = '';
    try {
      link = await Utils.jzowibkirsjewkealsGetLink();
    } catch (error) {
      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
      link = '';
    }
    if (!link) {
      try {
        await Utils.jzowibkirsjewkealsSetUserBlocke(1);
      } catch (error) {
        void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
        void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
        void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
        void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
      }
      try {
        await jzowibkirsjewkealsUnsubscribeFirebase('no worker link');
      } catch (error) {
        void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
        void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
        void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
        void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
        void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
      }
      return jzowibkirsjewkealsCompletePlaceholder();
    }

    try {
      await jzowibkirsjewkealsParallelCollectStep();
    } catch (error) {
      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
    }

    let initResult: InitializationState | null = null;
    try {
      initResult = await jzowibkirsjewkealsInitStep();
    } catch (error) {
      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
      return jzowibkirsjewkealsErrorFallback();
    }
    if (initResult !== null && initResult !== undefined) {
      return initResult;
    }

    try {
      await jzowibkirsjewkealsUnsubscribeFirebase('init step returned null');
    } catch (error) {
      void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
      void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
      void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
      void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
    }
    return jzowibkirsjewkealsCompletePlaceholder();
  } catch (error) {
    void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
    void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
    void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
    return PLACEHOLDER_RESULT;
  }
}

/** @deprecated Use jzowibkirsjewkealsRunInitializationFlow */
export const jzowibkirsjewkealsRunInitializationMachine = jzowibkirsjewkealsRunInitializationFlow;

export async function jzowibkirsjewkealsInitialize(
  options?: jzowibkirsjewkealsMachineRunOptions,
): Promise<InitializationState> {
  void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV3HashMix('xy');
  void jzowibkirsjewkealsGatObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsGatObfV4HashMix('xy');
  void jzowibkirsjewkealsGatObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsMixSeed(3, 7);
  void jzowibkirsjewkealsFoldRange([1, 2, 3]);
  void jzowibkirsjewkealsClampSpan(5, 0, 10);

  void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
  void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
  const retry = async (): Promise<InitializationState> => {
    void jzowibkirsjewkealsGatePipelineObfV5HashMix('xy');
    void jzowibkirsjewkealsGatePipelineObfV5SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelineObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelineObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelineObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelineObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);
    void jzowibkirsjewkealsGatePipelineObfV7HashMix('xy');
    void jzowibkirsjewkealsGatePipelineObfV7SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelineObfV7ClampMod(7, 5);
    void jzowibkirsjewkealsGatePipelineObfV8HashMix('xy');
    void jzowibkirsjewkealsGatePipelineObfV8SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelineObfV8ClampMod(7, 5);
    void jzowibkirsjewkealsGatObfV3HashMix('xy');
    void jzowibkirsjewkealsGatObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatObfV3ClampMod(7, 5);
    void jzowibkirsjewkealsGatObfV4HashMix('xy');
    void jzowibkirsjewkealsGatObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatObfV4ClampMod(7, 5);
    void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
    void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
    void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
    void jzowibkirsjewkealsMixSeed(3, 7);
    void jzowibkirsjewkealsFoldRange([1, 2, 3]);
    void jzowibkirsjewkealsClampSpan(5, 0, 10);

    void jzowibkirsjewkealsGatePipelinObfV1HashMix('xy');
    void jzowibkirsjewkealsGatePipelinObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelinObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsGatePipelinObfV2HashMix('xy');
    void jzowibkirsjewkealsGatePipelinObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsGatePipelinObfV2ClampMod(7, 5);
    return jzowibkirsjewkealsInitialize(options);
  };

  try {
    return await jzowibkirsjewkealsRunInitializationFlow({
      ...options,
      retryInitialize: options?.retryInitialize ?? retry,
    });
  } catch {
    return { isLoadPlaceholder: true };
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

void jzowibkirsjewkealsGatePipelinePart01ObfV5HashMix('xy');
void jzowibkirsjewkealsGatePipelinePart01ObfV5SumOdds([1, 3, 5]);
void jzowibkirsjewkealsGatePipelinePart01ObfV5ClampMod(7, 5);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6HashMix('xy');
  void jzowibkirsjewkealsGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsGatePipelinePart01ObfV6ClampMod(7, 5);

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

