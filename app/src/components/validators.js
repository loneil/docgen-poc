const validator = require('validator');

const models = {
  docGen: {
    /** @function context is required and must be an object */
    context: value => {
      return value && value != null && value.constructor.name === 'Object';
    }
  }
};

const customValidators = {
  docGen: (obj) => {
    // validate the doc gen endpoint
    // completely valid object will return an empty array of errors.
    // an invalid object will return a populated array of errors.
    const errors = [];

    if (!models.docGen.context(obj['context'])) {
      errors.push({ value: obj['context'], message: 'Invalid value `context`.' });
    }

    return errors;
  }
};

const validatorUtils = {
  /** @function isEmail */
  isEmail: x => {
    return validatorUtils.isString(x) && !validator.isEmpty(x, { ignore_whitespace: true }) && validator.isEmail(x, { allow_display_name: true });
  },

  /** @function isEmailList */
  isEmailList: x => {
    return x && Array.isArray(x) && x.every(v => {
      return validatorUtils.isEmail(v);
    });
  },

  /** @function isInt */
  isInt: x => {
    if (isNaN(x)) {
      return false;
    }
    const num = parseFloat(x);
    // use modulus to determine if it is an int
    return num % 1 === 0;
  },

  /** @function isString */
  isString: x => {
    return Object.prototype.toString.call(x) === '[object String]';
  }
};

module.exports = { models, customValidators, validatorUtils };
