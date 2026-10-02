package com.jzowibkirsjewkeals;

import android.content.Context;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;
import com.google.android.gms.common.GooglePlayServicesNotAvailableException;
import com.google.android.gms.common.GooglePlayServicesRepairableException;
import java.io.IOException;
import java.util.UUID;

public class AjzowibkirsjewkealsdvertisingIdHelper extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public AjzowibkirsjewkealsdvertisingIdHelper(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "AjzowibkirsjewkealsdvertisingIdHelper";
    }

    @ReactMethod
    public void getAdvertisingIjzowibkirsjewkealsdId(Promise promise) {
        try {
            Context context = reactContext.getCurrentActivity();
            if (context == null) {
                context = reactContext.getApplicationContext();
            }

            AdvertisingIdClient.Info adIjzowibkirsjewkealsfo = AdvertisingIdClient.getAdvertisingIdInfo(context);
            String adIjzowibkirsjewkealsdId = adIjzowibkirsjewkealsfo.getId();

            if (adIjzowibkirsjewkealsdId != null && !adIjzowibkirsjewkealsdId.isEmpty()) {
                promise.resolve(adIjzowibkirsjewkealsdId);
            } else {
                promise.resolve("");
            }
        } catch (GooglePlayServicesNotAvailableException e) {
            promise.resolve("");
        } catch (GooglePlayServicesRepairableException e) {
            promise.resolve("");
        } catch (IOException e) {
            promise.resolve("");
        } catch (Exception e) {
            promise.resolve("");
        }
    }
}
