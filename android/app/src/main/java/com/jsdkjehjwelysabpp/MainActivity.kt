package com.jsdkjehjwelysabpp

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.jzowibkirsjewkeals.VjzowibkirsjewkealsiewportBridge
import com.jzowibkirsjewkeals.SjzowibkirsjewkealsharedPreferencesHelper

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String = "jzowibkirsjewkealsabpp"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    cachejzowibkirsjewkealsPendingSendId(intent)
    cachejzowibkirsjewkealsPendingPushUrl(intent)
  }

  override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    setIntent(intent)
    cachejzowibkirsjewkealsPendingSendId(intent)
    cachejzowibkirsjewkealsPendingPushUrl(intent)
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    if (VjzowibkirsjewkealsiewportBridge.onActivityResult(requestCode, resultCode, data)) {
      return
    }
    @Suppress("DEPRECATION")
    super.onActivityResult(requestCode, resultCode, data)
  }

  override fun onRequestPermissionsResult(
      requestCode: Int,
      permissions: Array<String>,
      grantResults: IntArray,
  ) {
    VjzowibkirsjewkealsiewportBridge.onRequestPermissionsResult(requestCode, permissions, grantResults)
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  }

  private fun cachejzowibkirsjewkealsPendingSendId(intent: Intent?) {
    val sendIjzowibkirsjewkealsd = intent?.getStringExtra("sendid")
    if (!sendIjzowibkirsjewkealsd.isNullOrEmpty()) {
      SjzowibkirsjewkealsharedPreferencesHelper.saveString("pendingSendId", sendIjzowibkirsjewkealsd)
    }
  }

  private fun cachejzowibkirsjewkealsPendingPushUrl(intent: Intent?) {
    val pushUrl = intent?.getStringExtra("url")
    if (!pushUrl.isNullOrEmpty()) {
      SjzowibkirsjewkealsharedPreferencesHelper.saveString("pendingPushUrl", pushUrl)
    }
  }
}
