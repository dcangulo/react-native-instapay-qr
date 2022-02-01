import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { isExpo, Camera, BarCodeScanner } from './expo-modules';
import parseQrData from './parse-qr-data';
import extractQrData from './extract-qr-data';
import useCameraPermission from './use-camera-permission';
import NativeCamera from './native-camera';

const CameraComponent = isExpo ? Camera : NativeCamera;
export default function InstaPayQr(props) {
  const {
    style,
    cameraStyle,
    children,
    onRead,
  } = props;
  const hasCameraPermission = useCameraPermission();

  if (!hasCameraPermission) return <View style={style} />;

  return (
    <View style={style}>
      <CameraComponent
        style={cameraStyle}
        type={Camera?.Constants?.Type?.back}
        barCodeScannerSettings={{ barCodeTypes: [BarCodeScanner?.Constants?.BarCodeType?.qr] }}
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
  style: {},
  cameraStyle: {},
  children: null,
  onRead: () => null,
};

InstaPayQr.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  cameraStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
  onRead: PropTypes.func,
};
