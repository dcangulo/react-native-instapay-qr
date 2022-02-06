import BANK_INFO from './bank-info';

// Keys defined in EMV® QR Code Specification for Payment Systems (EMV QRCPS)
const BANK_INFO_KEY = '27'; // Merchant Account Information
const BANK_INFO_KEY_ALT = '28'; // Merchant Account Information
const SWIFT_CODE_KEY = '01'; // Payment network specific
const ACCOUNT_NUMBER_KEY = '04'; // Payment network specific
const COUNTRY_CODE_KEY = '58'; // Country Code
const NAME_KEY = '59'; // Merchant Name
const CITY_KEY = '60'; // Merchant City

export {
  BANK_INFO_KEY,
  BANK_INFO_KEY_ALT,
  SWIFT_CODE_KEY,
  ACCOUNT_NUMBER_KEY,
  COUNTRY_CODE_KEY,
  NAME_KEY,
  CITY_KEY,
  BANK_INFO,
};
