import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function InstaPayQr(props) {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    Camera
      .requestCameraPermissionsAsync()
      .then(({ status }) => setHasPermission(status === 'granted'));
  }, []);

  if (!hasPermission) return <View style={props.containerStyle} />;

  return (
    <View style={props.containerStyle}>
      <Camera
        style={props.cameraStyle}
        type={Camera.Constants.Type.back}
        barCodeScannerSettings={{ barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr] }}
        onBarCodeScanned={({ data }) => props.onRead(data)}
      >
        {props.children}
      </Camera>
    </View>
  );
}

InstaPayQr.defaultProps = {
  containerStyle: {},
  cameraStyle: {},
  children: null,
  onRead: () => null,
};
