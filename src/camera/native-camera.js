import React, { useEffect, useRef } from 'react';
import { BrowserQRCodeReader } from '@zxing/library';
import { defaultProps, propTypes } from './camera-props';

export default function NativeCamera({ onBarCodeScanned, style }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();
    const decoder = codeReader.decodeFromVideoDevice(null, elementRef.current, ({ text }) => {
      if (text) onBarCodeScanned({ data: text });
    });

    return () => decoder.then((controls) => controls.stop());
  }, [onBarCodeScanned]);

  return <video ref={elementRef} style={style} />;
}

NativeCamera.defaultProps = defaultProps;
NativeCamera.propTypes = propTypes;
