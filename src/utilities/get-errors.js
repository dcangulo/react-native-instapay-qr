import { BANK_INFO } from './constants';

function requiredFieldError(field) {
  return `Required field ${field} is missing.`;
}

function fieldLengthError(field, length, exact = true) {
  return `Field ${field} must be ${length} characters ${exact ? '' : 'or less'} long.`;
}

export default function getErrors(qrData) {
  const {
    countryCode,
    city,
    name,
    accountNumber,
    swiftCode,
    bankName,
  } = qrData;
  // Errors defined in EMV® QR Code Specification for Payment Systems (EMV QRCPS)
  const emvCoErrors = [];

  // Errors defined by this library
  const customErrors = [];

  if (!countryCode) emvCoErrors.push(requiredFieldError('country code'));
  if (countryCode?.length !== 2) emvCoErrors.push(fieldLengthError('country code', 2));
  if (!city) emvCoErrors.push(requiredFieldError('city'));
  if (city?.length > 15) emvCoErrors.push(fieldLengthError('city', 15, false));
  if (!name) emvCoErrors.push(requiredFieldError('name'));
  if (name?.length > 25) emvCoErrors.push(fieldLengthError('name', 25, false));

  if (!accountNumber) customErrors.push(requiredFieldError('account number'));
  if (!BANK_INFO[swiftCode]?.[1]?.test(accountNumber)) {
    const stringPattern = BANK_INFO[swiftCode]?.[1]?.toString();
    const message1 = `Field account number does not match the pattern ${stringPattern}.`;
    const message2 = 'It might be encrypted.';

    customErrors.push([message1, message2].join(' '));
  }

  if (!swiftCode) customErrors.push(requiredFieldError('swift code'));
  if (swiftCode?.length !== 11) customErrors.push(fieldLengthError('swift code', 11));
  if (!swiftCode && !bankName) customErrors.push(requiredFieldError('bank name'));
  if (swiftCode && !bankName) customErrors.push('Bank is not yet added to the list.');

  return [
    ...emvCoErrors.map((error) => `E: ${error}`),
    ...customErrors.map((error) => `C: ${error}`),
  ];
}
