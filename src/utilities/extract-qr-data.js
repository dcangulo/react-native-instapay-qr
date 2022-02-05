import {
  BANK_INFO_KEY,
  SWIFT_CODE_KEY,
  ACCOUNT_NUMBER_KEY,
  COUNTRY_CODE_KEY,
  NAME_KEY,
  CITY_KEY,
  SWIFT_CODE_BANK_INFO,
} from './constants';

export default function extractQrData(parsedQrData) {
  const countryCode = parsedQrData[COUNTRY_CODE_KEY];
  const city = parsedQrData[CITY_KEY];
  const name = parsedQrData[NAME_KEY];
  const accountNumber = parsedQrData[BANK_INFO_KEY]?.[ACCOUNT_NUMBER_KEY];
  const swiftCode = parsedQrData[BANK_INFO_KEY]?.[SWIFT_CODE_KEY];
  const bankName = SWIFT_CODE_BANK_INFO[swiftCode]?.name;

  return {
    countryCode,
    city,
    name,
    accountNumber,
    swiftCode,
    bankName,
  };
}
