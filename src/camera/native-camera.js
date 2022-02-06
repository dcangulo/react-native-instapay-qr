import React, { useEffect, useRef } from 'react';
import { BrowserQRCodeReader } from '@zxing/browser';
import { defaultProps, propTypes } from './camera-props';

export default function NativeCamera({ onBarCodeScanned, style }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();
    const decoder = codeReader.decodeFromVideoDevice(null, elementRef.current, (result) => {
      if (result?.text) onBarCodeScanned({ data: result?.text });
    });

    return () => decoder.then((controls) => controls.stop());
  }, [onBarCodeScanned]);

  return <video ref={elementRef} style={{ ...style, objectFit: 'cover' }} />;
}

NativeCamera.defaultProps = defaultProps;
NativeCamera.propTypes = propTypes;
