import React, { useEffect } from 'react';
import { NativeModules, NativeEventEmitter, requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';

const NativeCameraComponent = requireNativeComponent('InstaPayQr');
const { InstaPayQrManager } = NativeModules;

export default function NativeCamera({ onBarCodeScanned, style }) {
  useEffect(() => {
    const InstaPayQrEventEmitter = new NativeEventEmitter(InstaPayQrManager);
    const listener = InstaPayQrEventEmitter.addListener('onInstaPayQrRead', onBarCodeScanned);

    return () => listener.remove();
  }, [onBarCodeScanned]);

  return <NativeCameraComponent style={style} />;
}

NativeCamera.defaultProps = {
  style: {},
  onBarCodeScanned: () => null,
};

NativeCamera.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onBarCodeScanned: PropTypes.func,
};
