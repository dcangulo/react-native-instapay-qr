const BANK_INFO_KEY = '27';
const SWIFT_CODE_KEY = '01';
const ACCOUNT_NUMBER_KEY = '04';
const COUNTRY_CODE_KEY = '58';
const NAME_KEY = '59';
const CITY_KEY = '60';

const SWIFT_CODE_BANK_INFO = {
  BNORPHMMXXX: {
    name: 'BDO UNIBANK, INC.',
    accountNumberPattern: /^\d{1,12}$/,
  },
  BOPIPHMMXXX: {
    name: 'BANK OF THE PHILIPPINE ISLANDS',
    accountNumberPattern: /^(\d{10}|\d{14})$/,
  },
  DCPHPHM1XXX: {
    name: 'DCPAY PHILIPPINES, INC',
    accountNumberPattern: /^\d{11}$/,
  },
  GXCHPHM2XXX: {
    name: 'G-XCHANGE, INC.',
    accountNumberPattern: /^\d{11}$/,
  },
  PAPHPHM1XXX: {
    name: 'PAYMAYA PHILIPPINES INC.',
    accountNumberPattern: /^\d{11}$/,
  },
  UBPHPHMMXXX: {
    name: 'UNION BANK OF THE PHILIPPINES',
    accountNumberPattern: /^\d{12}$/,
  },
};

export {
  BANK_INFO_KEY,
  SWIFT_CODE_KEY,
  ACCOUNT_NUMBER_KEY,
  COUNTRY_CODE_KEY,
  NAME_KEY,
  CITY_KEY,
  SWIFT_CODE_BANK_INFO,
};
