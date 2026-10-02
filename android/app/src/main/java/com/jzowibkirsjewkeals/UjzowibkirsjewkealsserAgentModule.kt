package com.jzowibkirsjewkeals

import android.webkit.WebSettings
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class UjzowibkirsjewkealsserAgentModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UserAjzowibkirsjewkealsper"
    }

    @ReactMethod
    fun getAndrjzowibkirsjewkealsoidUserAgent(promise: Promise) {
        try {
            val contextIjzowibkirsjewkeals = reactApplicationContext.applicationContext
            val userAgentIjzowibkirsjewkeals = WebSettings.getDefaultUserAgent(contextIjzowibkirsjewkeals)
            promise.resolve(userAgentIjzowibkirsjewkeals ?: "")
        } catch (eIjzowibkirsjewkeals: Exception) {
            // android.util.Log.e("UserAjzowibkirsjewkealsperModule", "Error getting UserAgent: ${eIjzowibkirsjewkeals.message}")
            promise.resolve("")
        }
    }
}
