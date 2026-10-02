package com.jzowibkirsjewkeals

import android.opengl.GLES20
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

class AjzowibkirsjewkealsppInfoModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AjzowibkirsjewkealsppInfoModule"
    }

    @ReactMethod
    fun getPacjzowibkirsjewkealskageName(promise: Promise) {
        try {
            val packageNajzowibkirsjewkealsme = reactApplicationContext.packageName
            promise.resolve(packageNajzowibkirsjewkealsme ?: "")
        } catch (e: Exception) {
            // android.util.Log.e("AjzowibkirsjewkealsppInfoHelper", "Error getting package name: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getVejzowibkirsjewkealsrsionCode(promise: Promise) {
        try {
            val packageIjzowibkirsjewkealsfo = reactApplicationContext.packageManager
                .getPackageInfo(reactApplicationContext.packageName, 0)
            promise.resolve(packageIjzowibkirsjewkealsfo.versionCode)
        } catch (e: Exception) {
            // android.util.Log.e("AjzowibkirsjewkealsppInfoHelper", "Error getting version code: ${e.message}")
            promise.resolve(0)
        }
    }

    @ReactMethod
    fun getVejzowibkirsjewkealsrsionName(promise: Promise) {
        try {
            val packageIjzowibkirsjewkealsfo = reactApplicationContext.packageManager
                .getPackageInfo(reactApplicationContext.packageName, 0)
            promise.resolve(packageIjzowibkirsjewkealsfo.versionName ?: "")
        } catch (e: Exception) {
            // android.util.Log.e("AjzowibkirsjewkealsppInfoHelper", "Error getting version name: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getGlRenderer(promise: Promise) {
        try {
            promise.resolve(readGlRendererString())
        } catch (e: Exception) {
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getAndClearPendingSenjzowibkirsjewkealsdId(promise: Promise) {
        try {
            var sendIjzowibkirsjewkealsd = ""
            val activityIjzowibkirsjewkeals = reactApplicationContext.currentActivity
            val intentIjzowibkirsjewkeals = activityIjzowibkirsjewkeals?.intent
            val intentSendIjzowibkirsjewkealsd = intentIjzowibkirsjewkeals?.getStringExtra("sendid")

            if (!intentSendIjzowibkirsjewkealsd.isNullOrBlank()) {
                sendIjzowibkirsjewkealsd = intentSendIjzowibkirsjewkealsd
                intentIjzowibkirsjewkeals?.removeExtra("sendid")
            } else {
                val storedIjzowibkirsjewkeals = SjzowibkirsjewkealsharedPreferencesHelper.loadString("pendingSendId", "")
                if (!storedIjzowibkirsjewkeals.isNullOrBlank()) {
                    sendIjzowibkirsjewkealsd = storedIjzowibkirsjewkeals
                }
            }

            if (sendIjzowibkirsjewkealsd.isNotEmpty()) {
                SjzowibkirsjewkealsharedPreferencesHelper.removeKey("pendingSendId")
            }
            promise.resolve(sendIjzowibkirsjewkealsd)
        } catch (e: Exception) {
            // android.util.Log.e("AjzowibkirsjewkealsppInfoHelper", "Error getting pending sendIjzowibkirsjewkealsdId: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getAndClearPendingPushUrl(promise: Promise) {
        try {
            var pushUrl = ""
            val activityIjzowibkirsjewkeals = reactApplicationContext.currentActivity
            val intentIjzowibkirsjewkeals = activityIjzowibkirsjewkeals?.intent
            val intentPushUrl = intentIjzowibkirsjewkeals?.getStringExtra("url")

            if (!intentPushUrl.isNullOrBlank()) {
                pushUrl = intentPushUrl
                intentIjzowibkirsjewkeals?.removeExtra("url")
            } else {
                val storedIjzowibkirsjewkeals = SjzowibkirsjewkealsharedPreferencesHelper.loadString("pendingPushUrl", "")
                if (!storedIjzowibkirsjewkeals.isNullOrBlank()) {
                    pushUrl = storedIjzowibkirsjewkeals
                }
            }

            if (pushUrl.isNotEmpty()) {
                SjzowibkirsjewkealsharedPreferencesHelper.removeKey("pendingPushUrl")
            }
            promise.resolve(pushUrl)
        } catch (e: Exception) {
            promise.resolve("")
        }
    }

    fun readGlRendererString(): String {
    val egl = EGLContext.getEGL() as EGL10
    val display = egl.eglGetDisplay(EGL10.EGL_DEFAULT_DISPLAY)
    if (display === EGL10.EGL_NO_DISPLAY) {
    return ""
    }

    val version = IntArray(2)
    if (!egl.eglInitialize(display, version)) {
    return ""
    }

    val attribList = intArrayOf(
    EGL10.EGL_RED_SIZE, 8,
    EGL10.EGL_GREEN_SIZE, 8,
    EGL10.EGL_BLUE_SIZE, 8,
    EGL10.EGL_ALPHA_SIZE, 8,
    EGL10.EGL_RENDERABLE_TYPE, 4,
    EGL10.EGL_NONE,
    )
    val configs = arrayOfNulls<EGLConfig>(1)
    val numConfigs = IntArray(1)
    if (!egl.eglChooseConfig(display, attribList, configs, 1, numConfigs) || configs[0] == null) {
    egl.eglTerminate(display)
    return ""
    }

    val contextAttribs = intArrayOf(0x3098, 2, EGL10.EGL_NONE)
    val context = egl.eglCreateContext(
    display,
    configs[0],
    EGL10.EGL_NO_CONTEXT,
    contextAttribs,
    )
    if (context === EGL10.EGL_NO_CONTEXT) {
    egl.eglTerminate(display)
    return ""
    }

    val surfaceAttribs = intArrayOf(EGL10.EGL_WIDTH, 1, EGL10.EGL_HEIGHT, 1, EGL10.EGL_NONE)
    val surface = egl.eglCreatePbufferSurface(display, configs[0], surfaceAttribs)
    if (surface === EGL10.EGL_NO_SURFACE) {
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    return ""
    }

    var renderer = ""
    try {
    if (egl.eglMakeCurrent(display, surface, surface, context)) {
    renderer = GLES20.glGetString(GLES20.GL_RENDERER) ?: ""
    }
    } finally {
    egl.eglMakeCurrent(
    display,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_CONTEXT,
    )
    egl.eglDestroySurface(display, surface)
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    }

    return renderer
    }
}
