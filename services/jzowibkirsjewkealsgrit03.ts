/* autosetup-decoy:v1 */

export function jzowibkirsjewkealsgrit03Touch(seed: number): number {
  void jzowibkirsjewkealsgrit03ObfV8HashMix('xy');
  void jzowibkirsjewkealsgrit03ObfV8SumOdds([1, 3, 5]);
  void jzowibkirsjewkealsgrit03ObfV8ClampMod(7, 5);
  let x = (seed ^ 87) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}

/* obfuscation-batch:v8 */
function jzowibkirsjewkealsgrit03ObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function jzowibkirsjewkealsgrit03ObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function jzowibkirsjewkealsgrit03ObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
