const joi = require("joi");

const adminScheme = joi.object({
  email: joi.string().min(3).max(55).required(),
  password: joi.string().min(3).max(30).required(),
});

function adminValidation({ email, password }) {
  const result = adminScheme.validate({
    email,
    password,
  });

  return result;
}

module.exports = { adminValidation };
