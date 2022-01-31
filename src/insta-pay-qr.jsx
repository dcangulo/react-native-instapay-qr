import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import parseQrData from './parse-qr-data';
import extractQrData from './extract-qr-data';

export default function InstaPayQr(props) {
  const {
    containerStyle,
    cameraStyle,
    children,
    onRead,
  } = props;
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    Camera
      .requestCameraPermissionsAsync()
      .then(({ status }) => setHasPermission(status === 'granted'));
  }, []);

  if (!hasPermission) return <View style={containerStyle} />;

  return (
    <View style={containerStyle}>
      <Camera
        style={cameraStyle}
        type={Camera.Constants.Type.back}
        barCodeScannerSettings={{ barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr] }}
        onBarCodeScanned={({ data }) => {
          const parsedData = parseQrData(data);
          const qrData = extractQrData(parsedData);

          onRead(qrData);
        }}
      />
      {children}
    </View>
  );
}

InstaPayQr.defaultProps = {
  containerStyle: {},
  cameraStyle: {},
  children: null,
  onRead: () => null,
};

InstaPayQr.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  cameraStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
  onRead: PropTypes.func,
};
