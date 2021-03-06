import { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { isExpo, Camera } from './expo-modules';

export default function useCameraPermission() {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  useEffect(() => {
    if (isExpo) {
      Camera
        .requestCameraPermissionsAsync()
        .then(({ status }) => setHasCameraPermission(status === 'granted'));
    } else {
      if (Platform.OS !== 'android') return setHasCameraPermission(true);

      PermissionsAndroid
        .request(PermissionsAndroid.PERMISSIONS.CAMERA, {
          title: 'Use Camera Permission',
          message: 'Allow us to use your camera to scan InstaPay QR codes.',
        }).then((result) => {
          setHasCameraPermission(result === PermissionsAndroid.RESULTS.GRANTED);
        });
    }
  }, []);

  return hasCameraPermission;
}
