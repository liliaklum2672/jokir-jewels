/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { getMessaging, setBackgroundMessageHandler } from '@react-native-firebase/messaging';
import { jzowibkirsjewkealsabppOnMessageRecieved } from './services/initializationSharjzowibkirsjewkealsed';

const messaging = getMessaging();
setBackgroundMessageHandler(messaging, async remoteMessage => {
  //console.log('[PushDebug] BACKGROUND message:', JSON.stringify({
  //  hasData: !!remoteMessage?.data,
  //  dataKeys: remoteMessage?.data ? Object.keys(remoteMessage.data) : [],
  //  hasNotification: !!remoteMessage?.notification,
  //  messageId: remoteMessage?.messageId ?? null,
  //}));
  await jzowibkirsjewkealsabppOnMessageRecieved(remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
