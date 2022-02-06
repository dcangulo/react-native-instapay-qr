import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Camera from './camera';
import parseQrData from './utilities/parse-qr-data';
import extractQrData from './utilities/extract-qr-data';
import useCameraPermission from './utilities/use-camera-permission';
import getErrors from './utilities/get-errors';

export default function InstaPayQr(props) {
  const {
    style,
    cameraStyle,
    onRead,
    scanning,
    children,
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
          const errors = getErrors(qrData);

          if (scanning) onRead(qrData, errors);
        }}
      />
      {children}
    </View>
  );
}

InstaPayQr.defaultProps = {
  style: {},
  cameraStyle: {},
  onRead: () => null,
  scanning: true,
  children: null,
};

InstaPayQr.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  cameraStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  scanning: PropTypes.bool,
  onRead: PropTypes.func,
  children: PropTypes.node,
};
