package com.jzowibkirsjewkeals;

import android.content.Context;
import android.content.SharedPreferences;
// import android.util.Log;

public class SjzowibkirsjewkealsharedPreferencesHelper {
    private static final String PREF_NAMEIjzowibkirsjewkeals = "jzowibkirsjewkealsStorage";
    private static Context applicjzowibkirsjewkealsationContext = null;

    public static void setApplicationContext(Context context) {
        applicjzowibkirsjewkealsationContext = context != null ? context.getApplicationContext() : null;
    }

    private static Context getContext() {
        try {
            if (applicjzowibkirsjewkealsationContext != null) {
                return applicjzowibkirsjewkealsationContext;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public static void saveString(String key, String value) {
        Context contextIjzowibkirsjewkeals = getContext();
        if (contextIjzowibkirsjewkeals != null) {
            try {
                SharedPreferences prefsIjzowibkirsjewkeals = contextIjzowibkirsjewkeals.getSharedPreferences(PREF_NAMEIjzowibkirsjewkeals, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIjzowibkirsjewkeals = prefsIjzowibkirsjewkeals.edit();
                editorIjzowibkirsjewkeals.putString(key, value);
                editorIjzowibkirsjewkeals.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static String loadString(String key, String defaultValue) {
        Context contextIjzowibkirsjewkeals = getContext();
        if (contextIjzowibkirsjewkeals != null) {
            try {
                SharedPreferences prefsIjzowibkirsjewkeals = contextIjzowibkirsjewkeals.getSharedPreferences(PREF_NAMEIjzowibkirsjewkeals, Context.MODE_PRIVATE);
                String valueIjzowibkirsjewkeals = prefsIjzowibkirsjewkeals.getString(key, defaultValue);
                return valueIjzowibkirsjewkeals;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveInt(String key, int value) {
        Context contextIjzowibkirsjewkeals = getContext();
        if (contextIjzowibkirsjewkeals != null) {
            try {
                SharedPreferences prefsIjzowibkirsjewkeals = contextIjzowibkirsjewkeals.getSharedPreferences(PREF_NAMEIjzowibkirsjewkeals, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIjzowibkirsjewkeals = prefsIjzowibkirsjewkeals.edit();
                editorIjzowibkirsjewkeals.putInt(key, value);
                editorIjzowibkirsjewkeals.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static int loadInt(String key, int defaultValue) {
        Context contextIjzowibkirsjewkeals = getContext();
        if (contextIjzowibkirsjewkeals != null) {
            try {
                SharedPreferences prefsIjzowibkirsjewkeals = contextIjzowibkirsjewkeals.getSharedPreferences(PREF_NAMEIjzowibkirsjewkeals, Context.MODE_PRIVATE);
                int valueIjzowibkirsjewkeals = prefsIjzowibkirsjewkeals.getInt(key, defaultValue);
                return valueIjzowibkirsjewkeals;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveBoolean(String key, boolean value) {
        Context contextIjzowibkirsjewkeals = getContext();
        if (contextIjzowibkirsjewkeals != null) {
            try {
                SharedPreferences prefsIjzowibkirsjewkeals = contextIjzowibkirsjewkeals.getSharedPreferences(PREF_NAMEIjzowibkirsjewkeals, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIjzowibkirsjewkeals = prefsIjzowibkirsjewkeals.edit();
                editorIjzowibkirsjewkeals.putBoolean(key, value);
                editorIjzowibkirsjewkeals.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static boolean loadBoolean(String key, boolean defaultValue) {
        Context contextIjzowibkirsjewkeals = getContext();
        if (contextIjzowibkirsjewkeals != null) {
            try {
                SharedPreferences prefsIjzowibkirsjewkeals = contextIjzowibkirsjewkeals.getSharedPreferences(PREF_NAMEIjzowibkirsjewkeals, Context.MODE_PRIVATE);
                boolean valueIjzowibkirsjewkeals = prefsIjzowibkirsjewkeals.getBoolean(key, defaultValue);
                return valueIjzowibkirsjewkeals;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void removeKey(String key) {
        Context contextIjzowibkirsjewkeals = getContext();
        if (contextIjzowibkirsjewkeals != null) {
            try {
                SharedPreferences prefsIjzowibkirsjewkeals = contextIjzowibkirsjewkeals.getSharedPreferences(PREF_NAMEIjzowibkirsjewkeals, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIjzowibkirsjewkeals = prefsIjzowibkirsjewkeals.edit();
                editorIjzowibkirsjewkeals.remove(key);
                editorIjzowibkirsjewkeals.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static void clearAll() {
        Context contextIjzowibkirsjewkeals = getContext();
        if (contextIjzowibkirsjewkeals != null) {
            try {
                SharedPreferences prefsIjzowibkirsjewkeals = contextIjzowibkirsjewkeals.getSharedPreferences(PREF_NAMEIjzowibkirsjewkeals, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIjzowibkirsjewkeals = prefsIjzowibkirsjewkeals.edit();
                editorIjzowibkirsjewkeals.clear();
                editorIjzowibkirsjewkeals.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }
}
