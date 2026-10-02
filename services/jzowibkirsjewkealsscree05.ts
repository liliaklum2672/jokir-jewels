/* autosetup-decoy:v1 */

export function jzowibkirsjewkealsscree05Touch(seed: number): number {
  void jzowibkirsjewkealsscree05ObfV8HashMix('xy');
  void jzowibkirsjewkealsscree05ObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsscree05ObfV8ClampMod(7, 5);
  let x = (seed ^ 109) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}

/* obfuscation-batch:v8 */
function jzowibkirsjewkealsscree05ObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function jzowibkirsjewkealsscree05ObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function jzowibkirsjewkealsscree05ObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
