const joi = require("joi");

const productScheme = joi.object({
  name: joi.string().min(3).max(30).required(),
  image: joi.string().min(3).max(100).required(),
  description: joi.string().min(3).max(255).required(),
  price: joi.number().min(1).required(),
  category: joi.string().min(3).max(30).required(),
});

function addProductValidation({ name, image, description, price, category }) {
  const result = productScheme.validate({
    name,
    image,
    description,
    price,
    category,
  });

  return result;
}

module.exports = { addProductValidation };
