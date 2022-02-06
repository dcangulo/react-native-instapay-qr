# React Native InstaPay QR
[![Package version](https://img.shields.io/npm/v/react-native-instapay-qr?style=for-the-badge&labelColor=000000)](https://www.npmjs.com/package/react-native-instapay-qr)
[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=for-the-badge&labelColor=000000)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-hotpink.svg?style=for-the-badge&labelColor=000000)](https://github.com/dcangulo/react-native-instapay-qr/pulls)

Extract relevant data from InstaPay QR code.

## Compatibility
|         | iOS                | Android            | Web                | Windows         | macOS           |
|---------|--------------------|--------------------|--------------------|-----------------|-----------------|
| Expo    | :white_check_mark: | :white_check_mark: | :white_check_mark: | :no_entry_sign: | :no_entry_sign: |
| Native  | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x:             | :x:             |

## Installation
```bash
yarn add react-native-instapay-qr
npx pod-install # iOS Only
```

### Native (Web)
```bash
yarn add react-native-instapay-qr @zxing/library @zxing/browser
```

### Expo
```bash
expo install react-native-instapay-qr expo-camera expo-barcode-scanner
npx pod-install # iOS Only
```
> :bulb: If you use the Expo managed workflow you will see "CocoaPods is not supported in this project" - this is fine, it's not necessary.

## Usage
```js
import { useState } from 'react';
import InstaPayQr from 'react-native-instapay-qr';

function App() {
  const [scanning, setScanning] = useState(true);

  const onRead = (data, errors) {
    if (errors.length > 0) return;

    console.log(data);
    setScanning(false);
  };

  return (
    <InstaPayQr
      style={{ height: 300, width: 300 }}
      cameraStyle={{ flex: 1 }}
      onRead={onRead}
      scanning={scanning}
    />
  );
}
```

### Response Data
```js
{
  countryCode: 'PH',
  city: 'Makati',
  name: 'Account Name',
  accountNumber: 'XXXXXXXXXXXX',
  swiftCode: 'UBPHPHMMXXX',
  bankName: 'UNION BANK OF THE PHILIPPINES',
}
```

## Props
| Attribute   | Type               | Default      |
| ----------- | ------------------ | ------------ |
| style       | React Native Style | `{}`         |
| cameraStyle | React Native Style | `{}`         |
| onRead      | Function           | `() => null` |
| scanning    | Boolean            | `true`       |
| children    | Node               | `null`       |

## Changelogs
See [CHANGELOGS.md](CHANGELOGS.md)

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)
## License
Copyright © 2022 David Angulo, released under the MIT license, see [LICENSE](LICENSE).
