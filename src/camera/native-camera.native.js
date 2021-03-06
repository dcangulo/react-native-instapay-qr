import React, { useEffect } from 'react';
import { NativeModules, NativeEventEmitter, requireNativeComponent } from 'react-native';
import { defaultProps, propTypes } from './camera-props';

const NativeCameraComponent = requireNativeComponent('InstaPayQr');
const { InstaPayQrManager, InstaPayQrEventEmitter } = NativeModules;

export default function NativeCamera({ onBarCodeScanned, style }) {
  useEffect(() => {
    const nativeEvent = InstaPayQrManager ?? InstaPayQrEventEmitter;
    const eventEmitter = new NativeEventEmitter(nativeEvent);
    const eventListener = eventEmitter.addListener('onInstaPayQrRead', onBarCodeScanned);

    return () => eventListener.remove();
  }, [onBarCodeScanned]);

  return <NativeCameraComponent style={style} />;
}

NativeCamera.defaultProps = defaultProps;
NativeCamera.propTypes = propTypes;
