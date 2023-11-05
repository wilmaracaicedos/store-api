const Joi = require('joi');

const email = Joi.string().email();
const password = Joi.string().min(8);
const token = Joi.string();

const recoveryPasswordSchema = Joi.object({
  email: email.required(),
});

const changePasswordSchema = Joi.object({
  newPassword: password.required(),
  token: token.required(),
});

module.exports = { recoveryPasswordSchema, changePasswordSchema };
