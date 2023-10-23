const Joi = require("joi");

const orderSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().positive().required(),
  address: Joi.string().required(),
  products: Joi.string().required(),
  price: Joi.number().positive().required(),
  status: Joi.string().valid(0, 1).required(),
});

function orderValidation({
  name,
  email,
  phone,
  address,
  products,
  price,
  status,
}) {
  const result = orderSchema.validate({
    name,
    email,
    phone,
    address,
    products,
    price,
    status,
  });

  return result;
}

module.exports = { orderValidation };
