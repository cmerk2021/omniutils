import OmniUtils from "./omniutils.mjs";
var tempExport

try {
  OmniUtils.internal.debug("dataValidation module imported.")
  function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePhoneNumber(phoneNumber) {
    // Regular expression for US phone number validation (can be adjusted for other regions)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }
  
  function validateURL(url) {
    // Regular expression for URL validation
    const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.16(?:\.\d{1,3}){2})(?:[1-9]\d?|10|127|192\.168\.1|172\.16(?:\.0|\.128)|198\.51\.100\.0|203\.0\.113\.0|224\.0\.0\.0|240\.0\.0\.0)(?:\.(?:[1-9]\d?|10|127|192\.168\.1|172\.16(?:\.0|\.128)|198\.51\.100\.0|203\.0\.113\.0|224\.0\.0\.0|240\.0\.0\.0)){3}|localhost|[^0-9][a-z0-9-]+(?:[a-z0-9-]*\.){0,3}[a-z0-9-])(?::\d+)?\/?$/;
    return urlRegex.test(url);
  }
  
  function validateCreditCardNumber(cardNumber) {
    // Regular expression for credit card number validation (basic check)
    const cardRegex = /^4[0-9]{12}([0-9]{3})?$/;
    return cardRegex.test(cardNumber);
  }
  
  function validatePostalCode(postalCode) {
    // Regular expression for US postal code validation (can be adjusted for other regions)
    const postalCodeRegex = /^\d{5}(-\d{4})?$/;
    return postalCodeRegex.test(postalCode);
  }
  
  function validatePassword(password, minLength = 8, requireUppercase = true, requireLowercase = true, requireNumber = true, requireSpecialChar = true) {
    // Regular expression for password validation (can be customized)
    const passwordRegex = new RegExp(
      `^(?=.*[${requireUppercase ? "A-Z" : ""}]${requireLowercase ? "a-z" : ""}]${requireNumber ? "0-9" : ""}]${requireSpecialChar ? "!@#$%^&*()" : ""}]).{${minLength},}$`
    );
    return passwordRegex.test(password);
  }
  
  tempExport = {
    validateEmail,
    validatePhoneNumber,
    validateURL,
    validateCreditCardNumber,
    validatePostalCode,
    validatePassword,
  };
} catch (error) {
  OmniUtils.internal.error(error)
}

export default tempExport