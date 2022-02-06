import { isExpo } from '../utilities/expo-modules';

const Camera = isExpo ? require('./expo-camera') : require('./native-camera');

export default Camera.default;
