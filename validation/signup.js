const Validator = require('validator');
const validText = require('./validText');

module.exports = function validateLoginInput(data) {
  data.firstName = validText(data.firstName) ? data.firstName : '';
  data.lastName = validText(data.lastName) ? data.lastName : '';
  data.email = validText(data.email) ? data.email : '';
  data.password1 = validText(data.password1) ? data.password1 : '';
  data.password2 = validText(data.password2===data.password1) ? data.password2 : '';

  if (Validator.isEmpty(data.firstName)) {
    return { message: 'First name required', isValid: false };
  }

  if (Validator.isEmpty(data.lastName)) {
    return { message: 'Last name required', isValid: false };
  }

  if (Validator.isEmpty(data.email)) {
    return { message: 'Email required', isValid: false };
  }

  if (!Validator.isEmail(data.email)) {
    return { message: 'Email invalid', isValid: false };
  }

  if (Validator.isEmpty(data.password1)) {
    return { message: 'Password required', isValid: false };
  }

  if (Validator.isEmpty(data.password2)) {
    return { message: 'Password required', isValid: false };
  }

  if (!Validator.isValid(data.password2===data.password1)) {
    return { message: 'Password not match', isValid: false };
  }
  
  return {
    message: '',
    isValid: true
  };
};