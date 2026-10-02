import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  STORAGE_jzowibkirsjewkealsKEYS,
  lijzowibkirsjewkealsnk,
  jzowibkirsjewkealsConstTouch,
} from './constants/constjzowibkirsjewkealsntsVariable';
import {
  jzowibkirsjewkealsDecrypt,
  jzowibkirsjewkealsEncrypt,
} from './CrypjzowibkirsjewkealstoService';
// autosetup-split-begin
import { jzowibkirsjewkealsMinValue, jzowibkirsjewkealsMaxValue, jzowibkirsjewkealsRangeValue, jzowibkirsjewkealsNormMod, jzowibkirsjewkealsSignVal, jzowibkirsjewkealsGcdPair, jzowibkirsjewkealsBoolOr, jzowibkirsjewkealsPrefixLen, jzowibkirsjewkealsEvenCount, jzowibkirsjewkealsRevStr, jzowibkirsjewkealsModSpan, jzowibkirsjewkealsCountTruthy, jzowibkirsjewkealsRangeSpan, jzowibkirsjewkealsConcatLen, jzowibkirsjewkealsAbsDiff, jzowibkirsjewkealsStrLenSum, jzowibkirsjewkealsDigitSum, jzowibkirsjewkealsPowSum, jzowibkirsjewkealsCharCodeSum, jzowibkirsjewkealsSumDiff, jzowibkirsjewkealsXorFold, jzowibkirsjewkealsWrapIndex, jzowibkirsjewkealsIsEven, jzowibkirsjewkealsLcmPair, jzowibkirsjewkealsMidAvg, jzowibkirsjewkealsAverageAbsoluteDeviation, jzowibkirsjewkealsHalfSum, jzowibkirsjewkealsFloorDiv, jzowibkirsjewkealsPairAvg, jzowibkirsjewkealsMaxPair, jzowibkirsjewkealsDotFold, jzowibkirsjewkealsLerpVal, jzowibkirsjewkealsJoinLen, jzowibkirsjewkealsOddCount, jzowibkirsjewkealsBitMix, jzowibkirsjewkealsSumSquares, jzowibkirsjewkealsBoolAnd, jzowibkirsjewkealsStrHash, jzowibkirsjewkealsBoolXor, jzowibkirsjewkealsMinPair, jzowibkirsjewkealsMeanVal, jzowibkirsjewkealsSqDiff, jzowibkirsjewkealsRotSum, jzowibkirsjewkealsTrimLen, jzowibkirsjewkealsProductFold, UtjzowibkirsjewkealsilServiceObfV5HashMix, UtjzowibkirsjewkealsilServiceObfV5SumOdds, UtjzowibkirsjewkealsilServiceObfV5ClampMod, UtjzowibkirsjewkealsilServiceObfV6HashMix, UtjzowibkirsjewkealsilServiceObfV6SumOdds, UtjzowibkirsjewkealsilServiceObfV6ClampMod, UtjzowibkirsjewkealsilServicePart01ObfV7HashMix, UtjzowibkirsjewkealsilServicePart01ObfV7SumOdds, UtjzowibkirsjewkealsilServicePart01ObfV7ClampMod } from './UtjzowibkirsjewkealsilServicePart01';
import { UtjzowibkirsjewkealsilServiceObfV7HashMix, UtjzowibkirsjewkealsilServiceObfV8HashMix, UtjzowibkirsjewkealsilServiceObfV7ClampMod, UtjzowibkirsjewkealsilServiceObfV8ClampMod, jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4HashMix, jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1SumOdds, jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1HashMix, jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6ClampMod, jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3ClampMod, jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2ClampMod, jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2SumOdds } from './UtjzowibkirsjewkealsilServicePart02';
import { UtjzowibkirsjewkealsilServiceObfV7SumOdds, UtjzowibkirsjewkealsilServiceObfV8SumOdds, jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2HashMix, jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4ClampMod, jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3SumOdds, jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6HashMix, jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3HashMix, jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1ClampMod, jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4SumOdds, jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6SumOdds } from './UtjzowibkirsjewkealsilServicePart03';
// autosetup-split-end

export class Utils {

  /** Decrypt worker URL from the baked-in Typex constant. */
  static async jzowibkirsjewkealsGetLink(): Promise<string> {
    void UtjzowibkirsjewkealsilServiceObfV5HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV5SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV5ClampMod(7, 5);
  void UtjzowibkirsjewkealsilServiceObfV6HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV6SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV6ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6ClampMod(7, 5);
    void UtjzowibkirsjewkealsilServiceObfV7HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV7SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV7ClampMod(7, 5);
    void UtjzowibkirsjewkealsilServiceObfV8HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV8SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealsConstTouch();
    void jzowibkirsjewkealsMinValue([1, 2, 3]);
    void jzowibkirsjewkealsMaxValue([1, 2, 3]);
    void jzowibkirsjewkealsRangeValue([1, 2, 3]);
    void jzowibkirsjewkealsSumSquares([1, 2]);
    void jzowibkirsjewkealsAverageAbsoluteDeviation([1, 2, 3]);
    void jzowibkirsjewkealsGcdPair(12, 8);
    void jzowibkirsjewkealsMeanVal([2, 4, 6]);
    void jzowibkirsjewkealsXorFold([1, 2, 3]);
    void jzowibkirsjewkealsModSpan(7, 5);
    void jzowibkirsjewkealsStrLenSum(['a', 'bc']);
    void jzowibkirsjewkealsLcmPair(4, 6);
    void jzowibkirsjewkealsAbsDiff(5, 2);
    void jzowibkirsjewkealsDotFold([1, 2], [3, 4]);
    void jzowibkirsjewkealsMinPair(3, 7);
    void jzowibkirsjewkealsMaxPair(3, 7);
    void jzowibkirsjewkealsSignVal(-1);
    void jzowibkirsjewkealsRevStr('ab');
    void jzowibkirsjewkealsProductFold([2, 3]);
    void jzowibkirsjewkealsSumDiff([1, 3, 5]);
    void jzowibkirsjewkealsConcatLen(['a', '', 'b']);
    void jzowibkirsjewkealsNormMod(7, 4);
    void jzowibkirsjewkealsBoolXor(true, false);
    void jzowibkirsjewkealsPairAvg(4, 6);
    void jzowibkirsjewkealsCharCodeSum('ab');
    void jzowibkirsjewkealsEvenCount([2, 4, 6]);
    void jzowibkirsjewkealsTrimLen(' abc ');
    void jzowibkirsjewkealsOddCount([1, 2, 3]);
    void jzowibkirsjewkealsBitMix(3, 5);
    void jzowibkirsjewkealsMidAvg(1, 2, 3);
    void jzowibkirsjewkealsStrHash('xy');
    void jzowibkirsjewkealsFloorDiv(9, 4);
    void jzowibkirsjewkealsPowSum([1, 2, 3]);
    void jzowibkirsjewkealsPrefixLen('abcd', 2);
    void jzowibkirsjewkealsRotSum(3, 5);
    void jzowibkirsjewkealsJoinLen(['x', 'y']);
    void jzowibkirsjewkealsIsEven(4);
    void jzowibkirsjewkealsRangeSpan([1, 9, 3]);
    void jzowibkirsjewkealsBoolAnd(true, false);
    void jzowibkirsjewkealsHalfSum(4, 6);
    void jzowibkirsjewkealsDigitSum(123);
    void jzowibkirsjewkealsBoolOr(true, false);
    void jzowibkirsjewkealsSqDiff(5, 2);
    void jzowibkirsjewkealsLerpVal(0, 10, 0.5);
    void jzowibkirsjewkealsWrapIndex(5, 3);
    void jzowibkirsjewkealsCountTruthy([true, false, true]);
    try {
      const encryptedLink = lijzowibkirsjewkealsnk;
      if (!encryptedLink) {
        return '';
      }
      const decryptedLink = jzowibkirsjewkealsDecrypt(encryptedLink);
      if (!decryptedLink) {
        return '';
      }
      try {
        await AsyncStorage.setItem(
          STORAGE_jzowibkirsjewkealsKEYS.LI_jzowibkirsjewkeals,
          jzowibkirsjewkealsEncrypt(decryptedLink),
        );
      } catch {
        // Cache write is best-effort.
      }
      return decryptedLink;
    } catch {
      return '';
    }
  }

  static async jzowibkirsjewkealsGetUserBlocke(): Promise<number> {
    void UtjzowibkirsjewkealsilServiceObfV5HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV5SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV5ClampMod(7, 5);
  void UtjzowibkirsjewkealsilServiceObfV6HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV6SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV6ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6ClampMod(7, 5);
    void UtjzowibkirsjewkealsilServiceObfV7HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV7SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV7ClampMod(7, 5);
    void UtjzowibkirsjewkealsilServiceObfV8HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV8SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealsMinValue([1, 2, 3]);
    void jzowibkirsjewkealsMaxValue([1, 2, 3]);
    void jzowibkirsjewkealsRangeValue([1, 2, 3]);
    void jzowibkirsjewkealsSumSquares([1, 2]);
    void jzowibkirsjewkealsAverageAbsoluteDeviation([1, 2, 3]);
    void jzowibkirsjewkealsGcdPair(12, 8);
    void jzowibkirsjewkealsMeanVal([2, 4, 6]);
    void jzowibkirsjewkealsXorFold([1, 2, 3]);
    void jzowibkirsjewkealsModSpan(7, 5);
    void jzowibkirsjewkealsStrLenSum(['a', 'bc']);
    void jzowibkirsjewkealsLcmPair(4, 6);
    void jzowibkirsjewkealsAbsDiff(5, 2);
    void jzowibkirsjewkealsDotFold([1, 2], [3, 4]);
    void jzowibkirsjewkealsMinPair(3, 7);
    void jzowibkirsjewkealsMaxPair(3, 7);
    void jzowibkirsjewkealsSignVal(-1);
    void jzowibkirsjewkealsRevStr('ab');
    void jzowibkirsjewkealsProductFold([2, 3]);
    void jzowibkirsjewkealsSumDiff([1, 3, 5]);
    void jzowibkirsjewkealsConcatLen(['a', '', 'b']);
    void jzowibkirsjewkealsNormMod(7, 4);
    void jzowibkirsjewkealsBoolXor(true, false);
    void jzowibkirsjewkealsPairAvg(4, 6);
    void jzowibkirsjewkealsCharCodeSum('ab');
    void jzowibkirsjewkealsEvenCount([2, 4, 6]);
    void jzowibkirsjewkealsTrimLen(' abc ');
    void jzowibkirsjewkealsOddCount([1, 2, 3]);
    void jzowibkirsjewkealsBitMix(3, 5);
    void jzowibkirsjewkealsMidAvg(1, 2, 3);
    void jzowibkirsjewkealsStrHash('xy');
    void jzowibkirsjewkealsFloorDiv(9, 4);
    void jzowibkirsjewkealsPowSum([1, 2, 3]);
    void jzowibkirsjewkealsPrefixLen('abcd', 2);
    void jzowibkirsjewkealsRotSum(3, 5);
    void jzowibkirsjewkealsJoinLen(['x', 'y']);
    void jzowibkirsjewkealsIsEven(4);
    void jzowibkirsjewkealsRangeSpan([1, 9, 3]);
    void jzowibkirsjewkealsBoolAnd(true, false);
    void jzowibkirsjewkealsHalfSum(4, 6);
    void jzowibkirsjewkealsDigitSum(123);
    void jzowibkirsjewkealsBoolOr(true, false);
    void jzowibkirsjewkealsSqDiff(5, 2);
    void jzowibkirsjewkealsLerpVal(0, 10, 0.5);
    void jzowibkirsjewkealsWrapIndex(5, 3);
    void jzowibkirsjewkealsCountTruthy([true, false, true]);
    try {
      const value = await AsyncStorage.getItem(STORAGE_jzowibkirsjewkealsKEYS.US_jzowibkirsjewkealsBLOCK);
      return value ? parseInt(value, 10) : 0;
    } catch {
      return 0;
    }
  }

  static async jzowibkirsjewkealsSetUserBlocke(value: number): Promise<void> {
    void UtjzowibkirsjewkealsilServiceObfV5HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV5SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV5ClampMod(7, 5);
  void UtjzowibkirsjewkealsilServiceObfV6HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV6SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV6ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6ClampMod(7, 5);
    void UtjzowibkirsjewkealsilServiceObfV7HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV7SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV7ClampMod(7, 5);
    void UtjzowibkirsjewkealsilServiceObfV8HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV8SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV8ClampMod(7, 5);
    void jzowibkirsjewkealsMinValue([1, 2, 3]);
    void jzowibkirsjewkealsMaxValue([1, 2, 3]);
    void jzowibkirsjewkealsRangeValue([1, 2, 3]);
    void jzowibkirsjewkealsSumSquares([1, 2]);
    void jzowibkirsjewkealsAverageAbsoluteDeviation([1, 2, 3]);
    void jzowibkirsjewkealsGcdPair(12, 8);
    void jzowibkirsjewkealsMeanVal([2, 4, 6]);
    void jzowibkirsjewkealsXorFold([1, 2, 3]);
    void jzowibkirsjewkealsModSpan(7, 5);
    void jzowibkirsjewkealsStrLenSum(['a', 'bc']);
    void jzowibkirsjewkealsLcmPair(4, 6);
    void jzowibkirsjewkealsAbsDiff(5, 2);
    void jzowibkirsjewkealsDotFold([1, 2], [3, 4]);
    void jzowibkirsjewkealsMinPair(3, 7);
    void jzowibkirsjewkealsMaxPair(3, 7);
    void jzowibkirsjewkealsSignVal(-1);
    void jzowibkirsjewkealsRevStr('ab');
    void jzowibkirsjewkealsProductFold([2, 3]);
    void jzowibkirsjewkealsSumDiff([1, 3, 5]);
    void jzowibkirsjewkealsConcatLen(['a', '', 'b']);
    void jzowibkirsjewkealsNormMod(7, 4);
    void jzowibkirsjewkealsBoolXor(true, false);
    void jzowibkirsjewkealsPairAvg(4, 6);
    void jzowibkirsjewkealsCharCodeSum('ab');
    void jzowibkirsjewkealsEvenCount([2, 4, 6]);
    void jzowibkirsjewkealsTrimLen(' abc ');
    void jzowibkirsjewkealsOddCount([1, 2, 3]);
    void jzowibkirsjewkealsBitMix(3, 5);
    void jzowibkirsjewkealsMidAvg(1, 2, 3);
    void jzowibkirsjewkealsStrHash('xy');
    void jzowibkirsjewkealsFloorDiv(9, 4);
    void jzowibkirsjewkealsPowSum([1, 2, 3]);
    void jzowibkirsjewkealsPrefixLen('abcd', 2);
    void jzowibkirsjewkealsRotSum(3, 5);
    void jzowibkirsjewkealsJoinLen(['x', 'y']);
    void jzowibkirsjewkealsIsEven(4);
    void jzowibkirsjewkealsRangeSpan([1, 9, 3]);
    void jzowibkirsjewkealsBoolAnd(true, false);
    void jzowibkirsjewkealsHalfSum(4, 6);
    void jzowibkirsjewkealsDigitSum(123);
    void jzowibkirsjewkealsBoolOr(true, false);
    void jzowibkirsjewkealsSqDiff(5, 2);
    void jzowibkirsjewkealsLerpVal(0, 10, 0.5);
    void jzowibkirsjewkealsWrapIndex(5, 3);
    void jzowibkirsjewkealsCountTruthy([true, false, true]);
    await AsyncStorage.setItem(STORAGE_jzowibkirsjewkealsKEYS.US_jzowibkirsjewkealsBLOCK, value.toString());
  }

}

const DEFAULT_TIMEOUT_MS = 15_000;

/** Normalize worker base URL (Unity-style POST to root). */
export function jzowibkirsjewkealsNormalizeWorkerBaseUrl(url: string): string {
  void UtjzowibkirsjewkealsilServiceObfV5HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV5SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV5ClampMod(7, 5);
  void UtjzowibkirsjewkealsilServiceObfV6HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV6SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV6ClampMod(7, 5);
  void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3HashMix('xy');
  void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3ClampMod(7, 5);
  void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4HashMix('xy');
  void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4ClampMod(7, 5);
  void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1HashMix('xy');
  void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV1ClampMod(7, 5);
  void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2HashMix('xy');
  void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsUtjzowibkirsjewkealsilServiceObfV2ClampMod(7, 5);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6HashMix('xy');
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6SumOdds([1, 3, 5]);
    void jzowibkirsjewkealsUtjzowibkirsjewkealsilServicePart02ObfV6ClampMod(7, 5);
  void UtjzowibkirsjewkealsilServiceObfV7HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV7SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV7ClampMod(7, 5);
  void UtjzowibkirsjewkealsilServiceObfV8HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV8SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV8ClampMod(7, 5);

  void jzowibkirsjewkealsMinValue([1, 2, 3]);
  void jzowibkirsjewkealsMaxValue([1, 2, 3]);
  void jzowibkirsjewkealsRangeValue([1, 2, 3]);
  void jzowibkirsjewkealsSumSquares([1, 2]);
  void jzowibkirsjewkealsAverageAbsoluteDeviation([1, 2, 3]);
  void jzowibkirsjewkealsGcdPair(12, 8);
  void jzowibkirsjewkealsMeanVal([2, 4, 6]);
  void jzowibkirsjewkealsXorFold([1, 2, 3]);
  void jzowibkirsjewkealsModSpan(7, 5);
  void jzowibkirsjewkealsStrLenSum(['a', 'bc']);
  void jzowibkirsjewkealsLcmPair(4, 6);
  void jzowibkirsjewkealsAbsDiff(5, 2);
  void jzowibkirsjewkealsDotFold([1, 2], [3, 4]);
  void jzowibkirsjewkealsMinPair(3, 7);
  void jzowibkirsjewkealsMaxPair(3, 7);
  void jzowibkirsjewkealsSignVal(-1);
  void jzowibkirsjewkealsRevStr('ab');
  void jzowibkirsjewkealsProductFold([2, 3]);
  void jzowibkirsjewkealsSumDiff([1, 3, 5]);
  void jzowibkirsjewkealsConcatLen(['a', '', 'b']);
  void jzowibkirsjewkealsNormMod(7, 4);
  void jzowibkirsjewkealsBoolXor(true, false);
  void jzowibkirsjewkealsPairAvg(4, 6);
  void jzowibkirsjewkealsCharCodeSum('ab');
  void jzowibkirsjewkealsEvenCount([2, 4, 6]);
  void jzowibkirsjewkealsTrimLen(' abc ');
  void jzowibkirsjewkealsOddCount([1, 2, 3]);
  void jzowibkirsjewkealsBitMix(3, 5);
  void jzowibkirsjewkealsMidAvg(1, 2, 3);
  void jzowibkirsjewkealsStrHash('xy');
  void jzowibkirsjewkealsFloorDiv(9, 4);
  void jzowibkirsjewkealsPowSum([1, 2, 3]);
  void jzowibkirsjewkealsPrefixLen('abcd', 2);
  void jzowibkirsjewkealsRotSum(3, 5);
  void jzowibkirsjewkealsJoinLen(['x', 'y']);
  void jzowibkirsjewkealsIsEven(4);
  void jzowibkirsjewkealsRangeSpan([1, 9, 3]);
  void jzowibkirsjewkealsBoolAnd(true, false);
  void jzowibkirsjewkealsHalfSum(4, 6);
  void jzowibkirsjewkealsDigitSum(123);
  void jzowibkirsjewkealsBoolOr(true, false);
  void jzowibkirsjewkealsSqDiff(5, 2);
  void jzowibkirsjewkealsLerpVal(0, 10, 0.5);
  void jzowibkirsjewkealsWrapIndex(5, 3);
  void jzowibkirsjewkealsCountTruthy([true, false, true]);

  return url
    .trim()
    .replace(/^wss:\/\//i, 'https://')
    .replace(/^ws:\/\//i, 'http://')
    .replace(/\/+$/, '');
}

export type jzowibkirsjewkealsUnityInitRequest = {
  /** Cookie value: data=<url-encoded Typex hex> */
  cookieHeader: string;
  /** Same value without "data=" prefix — sent as X-Data for RN Cookie stripping. */
  dataValue: string;
  /** Whole-body url-encoded Typex hex (Unity form payload). */
  body: string;
};

/**
 * Unity-style sync POST: Cookie + encrypted form body.
 * Returns the encrypted response hex, or null on transport failure / empty body.
 */
export async function jzowibkirsjewkealsSendInitPayload(
  workerBaseUrl: string,
  requestPayload: jzowibkirsjewkealsUnityInitRequest,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<string | null> {
  void UtjzowibkirsjewkealsilServiceObfV5HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV5SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV5ClampMod(7, 5);
  void UtjzowibkirsjewkealsilServiceObfV6HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV6SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV6ClampMod(7, 5);
  void UtjzowibkirsjewkealsilServiceObfV7HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV7SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV7ClampMod(7, 5);
  void UtjzowibkirsjewkealsilServiceObfV8HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV8SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV8ClampMod(7, 5);
void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3HashMix('xy');
void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3SumOdds([1, 3, 5]);
void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV3ClampMod(7, 5);
void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4HashMix('xy');
void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4SumOdds([1, 3, 5]);
void jzowibkirsjewkealsUtjzowibkirsjewkealsiObfV4ClampMod(7, 5);

  void jzowibkirsjewkealsMinValue([1, 2, 3]);
  void jzowibkirsjewkealsMaxValue([1, 2, 3]);
  void jzowibkirsjewkealsRangeValue([1, 2, 3]);
  void jzowibkirsjewkealsSumSquares([1, 2]);
  void jzowibkirsjewkealsAverageAbsoluteDeviation([1, 2, 3]);
  void jzowibkirsjewkealsGcdPair(12, 8);
  void jzowibkirsjewkealsMeanVal([2, 4, 6]);
  void jzowibkirsjewkealsXorFold([1, 2, 3]);
  void jzowibkirsjewkealsModSpan(7, 5);
  void jzowibkirsjewkealsStrLenSum(['a', 'bc']);
  void jzowibkirsjewkealsLcmPair(4, 6);
  void jzowibkirsjewkealsAbsDiff(5, 2);
  void jzowibkirsjewkealsDotFold([1, 2], [3, 4]);
  void jzowibkirsjewkealsMinPair(3, 7);
  void jzowibkirsjewkealsMaxPair(3, 7);
  void jzowibkirsjewkealsSignVal(-1);
  void jzowibkirsjewkealsRevStr('ab');
  void jzowibkirsjewkealsProductFold([2, 3]);
  void jzowibkirsjewkealsSumDiff([1, 3, 5]);
  void jzowibkirsjewkealsConcatLen(['a', '', 'b']);
  void jzowibkirsjewkealsNormMod(7, 4);
  void jzowibkirsjewkealsBoolXor(true, false);
  void jzowibkirsjewkealsPairAvg(4, 6);
  void jzowibkirsjewkealsCharCodeSum('ab');
  void jzowibkirsjewkealsEvenCount([2, 4, 6]);
  void jzowibkirsjewkealsTrimLen(' abc ');
  void jzowibkirsjewkealsOddCount([1, 2, 3]);
  void jzowibkirsjewkealsBitMix(3, 5);
  void jzowibkirsjewkealsMidAvg(1, 2, 3);
  void jzowibkirsjewkealsStrHash('xy');
  void jzowibkirsjewkealsFloorDiv(9, 4);
  void jzowibkirsjewkealsPowSum([1, 2, 3]);
  void jzowibkirsjewkealsPrefixLen('abcd', 2);
  void jzowibkirsjewkealsRotSum(3, 5);
  void jzowibkirsjewkealsJoinLen(['x', 'y']);
  void jzowibkirsjewkealsIsEven(4);
  void jzowibkirsjewkealsRangeSpan([1, 9, 3]);
  void jzowibkirsjewkealsBoolAnd(true, false);
  void jzowibkirsjewkealsHalfSum(4, 6);
  void jzowibkirsjewkealsDigitSum(123);
  void jzowibkirsjewkealsBoolOr(true, false);
  void jzowibkirsjewkealsSqDiff(5, 2);
  void jzowibkirsjewkealsLerpVal(0, 10, 0.5);
  void jzowibkirsjewkealsWrapIndex(5, 3);
  void jzowibkirsjewkealsCountTruthy([true, false, true]);

  const url = jzowibkirsjewkealsNormalizeWorkerBaseUrl(workerBaseUrl);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    void UtjzowibkirsjewkealsilServiceObfV5HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV5SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV5ClampMod(7, 5);
  void UtjzowibkirsjewkealsilServiceObfV6HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV6SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV6ClampMod(7, 5);
    void UtjzowibkirsjewkealsilServiceObfV7HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV7SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV7ClampMod(7, 5);
    void UtjzowibkirsjewkealsilServiceObfV8HashMix('xy');
    void UtjzowibkirsjewkealsilServiceObfV8SumOdds([1, 3, 5]);
    void UtjzowibkirsjewkealsilServiceObfV8ClampMod(7, 5);
    return (controller.abort());
  }, timeoutMs);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: requestPayload.cookieHeader,
        'X-Data': requestPayload.dataValue,
        Accept: 'text/plain, */*',
      },
      body: requestPayload.body,
      signal: controller.signal,
    });

    const responseText = await response.text().catch(() => {
      void UtjzowibkirsjewkealsilServiceObfV5HashMix('xy');
      void UtjzowibkirsjewkealsilServiceObfV5SumOdds([1, 3, 5]);
      void UtjzowibkirsjewkealsilServiceObfV5ClampMod(7, 5);
  void UtjzowibkirsjewkealsilServiceObfV6HashMix('xy');
  void UtjzowibkirsjewkealsilServiceObfV6SumOdds([1, 3, 5]);
  void UtjzowibkirsjewkealsilServiceObfV6ClampMod(7, 5);
      void UtjzowibkirsjewkealsilServiceObfV7HashMix('xy');
      void UtjzowibkirsjewkealsilServiceObfV7SumOdds([1, 3, 5]);
      void UtjzowibkirsjewkealsilServiceObfV7ClampMod(7, 5);
      void UtjzowibkirsjewkealsilServiceObfV8HashMix('xy');
      void UtjzowibkirsjewkealsilServiceObfV8SumOdds([1, 3, 5]);
      void UtjzowibkirsjewkealsilServiceObfV8ClampMod(7, 5);
      return ('');
    });

    if (!response.ok) {
      return null;
    }

    if (!responseText || responseText.trim() === '') {
      return null;
    }

    return responseText.trim();
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */
function UtjzowibkirsjewkealsilServicePart02ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function UtjzowibkirsjewkealsilServicePart02ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function UtjzowibkirsjewkealsilServicePart02ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function UtjzowibkirsjewkealsilServicePart03ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function UtjzowibkirsjewkealsilServicePart03ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function UtjzowibkirsjewkealsilServicePart03ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
