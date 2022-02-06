// Bank names from https://bank-code.net/swift-code/[SWIFT_CODE].html
const BANK_INFO = {
  BNORPHMMXXX: ['BDO UNIBANK, INC.', /^\d{1,12}$/],
  BOPIPHMMXXX: ['BANK OF THE PHILIPPINE ISLANDS', /^(\d{10}|\d{14})$/],
  DCPHPHM1XXX: ['DCPAY PHILIPPINES, INC', /^\d{11}$/],
  GXCHPHM2XXX: ['G-XCHANGE, INC.', /^\d{11}$/],
  PAPHPHM1XXX: ['PAYMAYA PHILIPPINES INC.', /^\d{11}$/],
  UBPHPHMMXXX: ['UNION BANK OF THE PHILIPPINES', /^\d{12}$/],
};

export default BANK_INFO;
