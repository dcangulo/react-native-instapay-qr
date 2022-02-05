import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Camera from './camera';
import parseQrData from './utilities/parse-qr-data';
import extractQrData from './utilities/extract-qr-data';
import useCameraPermission from './utilities/use-camera-permission';

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
      <Camera
        style={cameraStyle}
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
