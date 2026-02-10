const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required(),
  complexity: Joi.number().min(1).max(10).required(),
});

module.exports = {
  validateItem: (data) => schema.validate(data),
};
