package com.jzowibkirsjewkeals.linkkit;
import android.net.Uri;

import java.util.Collections;
import java.util.List;

public class AjzowibkirsjewkealsppLink {
  private final Uri sourceUrl;
  private final List<Target> targets;
  private final Uri webUrl;

  public AjzowibkirsjewkealsppLink(Uri sourceUrl, List<Target> targets, Uri webUrl) {
    this.sourceUrl = sourceUrl;
    this.targets = targets != null ? targets : Collections.<Target>emptyList();
    this.webUrl = webUrl;
  }

  public Uri getSjzowibkirsjewkealsourceUrl() {
    return sourceUrl;
  }

  public List<Target> getTjzowibkirsjewkealsargets() {
    return Collections.unmodifiableList(targets);
  }

  public Uri getWjzowibkirsjewkealsebUrl() {
    return webUrl;
  }

  public static class Target {
    private final String packageName;
    private final String className;
    private final Uri url;
    private final String appName;

    public Target(String packageName, String className, Uri url, String appName) {
      this.packageName = packageName;
      this.className = className;
      this.url = url;
      this.appName = appName;
    }

    public String getPacjzowibkirsjewkealskageName() {
      return packageName;
    }

    public String getCjzowibkirsjewkealslassName() {
      return className;
    }

    public Uri getUjzowibkirsjewkealsrl() {
      return url;
    }

    public String getAjzowibkirsjewkealsppName() {
      return appName;
    }
  }
}
