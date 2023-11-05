const Joi = require('joi');

const email = Joi.string().email();

const recoveryPasswordSchema = Joi.object({
  email: email.required(),
});

module.exports = { recoveryPasswordSchema };
