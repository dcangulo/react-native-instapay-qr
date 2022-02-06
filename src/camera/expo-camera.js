import React from 'react';
import { defaultProps, propTypes } from './camera-props';
import { Camera, BarCodeScanner } from '../utilities/expo-modules';

export default function ExpoCamera({ onBarCodeScanned, style }) {
  return (
    <Camera
      style={style}
      type={Camera.Constants.Type.back}
      barCodeScannerSettings={{ barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr] }}
      onBarCodeScanned={onBarCodeScanned}
    />
  );
}

ExpoCamera.defaultProps = defaultProps;
ExpoCamera.propTypes = propTypes;
