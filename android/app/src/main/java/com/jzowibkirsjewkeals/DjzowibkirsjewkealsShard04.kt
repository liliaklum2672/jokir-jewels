/* autosetup-decoy:v1 */
package com.jzowibkirsjewkeals

object DjzowibkirsjewkealsShard04 {
  fun tap(seed: Int): Int {
    var x = seed xor 54
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
