import Joi from '@hapi/joi';

const ProductSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),

  unitQtd: Joi.number().integer().min(1).required(),
  unitMeasure: Joi.string().min(3).max(255).required(),
  salePrice: Joi.number().min(1).required(),
  categories: Joi.array(),
});

const validateProductBody = (req, res, next) => {
  try {
    const { error } = ProductSchema.validate(req.body);
    if (error) throw error;

    return next();
  } catch (error) {
    console.log(error);
    res.status(400).json({
      details: error.details.map((detail) => detail.message).join(', '),
    });
  }
};

const DecreaseProductSchema = Joi.object({
  idProduct: Joi.number().integer().min(1).required(),
  quantity: Joi.number().integer().min(1).required(),
});

export const validateDecreaseProductBody = (req, res, next) => {
  try {
    const { error } = DecreaseProductSchema.validate(req.body);
    if (error) throw error;

    return next();
  } catch (error) {
    res.status(400).json({
      details: error.details.map((detail) => detail.message).join(', '),
    });
  }
};
export default validateProductBody;
