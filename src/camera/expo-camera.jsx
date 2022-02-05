import React from 'react';
import PropTypes from 'prop-types';
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

ExpoCamera.defaultProps = {
  style: {},
  onBarCodeScanned: () => null,
};

ExpoCamera.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onBarCodeScanned: PropTypes.func,
};
