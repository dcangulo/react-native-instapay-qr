/**
 * Detecting if running on Expo: https://github.com/expo/fyi/blob/master/expo-extension-migration.md
 */

import { View } from 'react-native';

// eslint-disable-next-line import/no-mutable-exports
let isExpo = false;
// eslint-disable-next-line import/no-mutable-exports
let Camera = View;
// eslint-disable-next-line import/no-mutable-exports
let BarCodeScanner = null;

try {
  // eslint-disable-next-line global-require
  const executionEnvironment = require('expo-constants').ExecutionEnvironment;
  // eslint-disable-next-line global-require
  Camera = require('expo-camera').Camera;
  // eslint-disable-next-line global-require
  BarCodeScanner = require('expo-barcode-scanner').BarCodeScanner;

  isExpo = executionEnvironment.Standalone === 'standalone'
    || executionEnvironment.StoreClient === 'storeClient';
  // eslint-disable-next-line no-empty
} catch { }

export {
  isExpo,
  Camera,
  BarCodeScanner,
};
