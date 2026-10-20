import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'uz.calk.calculator',
  appName: 'Calk.UZ',
  webDir: 'out',
  server: {
    url: 'https://calk.uz',
    cleartext: false,
    androidScheme: 'https',
    errorPath: 'index.html',
  },
  // Mark the app webview UA so the site suppresses web AdSense/GA/cookie there
  // (apps monetize via AdMob). The iOS native shell sets its own "CalkUZ" UA.
  android: {
    appendUserAgent: 'CalkUZ-Android-App',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#059669',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#059669',
    },
  },
};

export default config;
