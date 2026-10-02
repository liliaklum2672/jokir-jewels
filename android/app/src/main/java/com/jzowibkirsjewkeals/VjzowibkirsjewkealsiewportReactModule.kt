package com.jzowibkirsjewkeals

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class VjzowibkirsjewkealsiewportReactModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "VjzowibkirsjewkealsiewportBannana"

    @ReactMethod
    fun navjzowibkirsjewkealsigate(url: String, promise: Promise) {
        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity == null || url.isBlank()) {
                promise.resolve(false)
                return
            }

            VjzowibkirsjewkealsiewportBridge.navjzowibkirsjewkealsigate(activity, url)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }

    @ReactMethod
    fun hjzowibkirsjewkealside(promise: Promise) {
        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity != null) {
                VjzowibkirsjewkealsiewportBridge.hjzowibkirsjewkealside(activity)
            }
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }
}
