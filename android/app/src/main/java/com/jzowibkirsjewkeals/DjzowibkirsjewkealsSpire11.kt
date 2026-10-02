/* autosetup-decoy:v1 */
package com.jzowibkirsjewkeals

object DjzowibkirsjewkealsSpire11 {
  fun tap(seed: Int): Int {
    var x = seed xor 103
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
