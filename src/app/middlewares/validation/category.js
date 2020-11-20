import Joi from '@hapi/joi';

const CategorySchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  description: Joi.string().max(255).allow('').optional(),
});

const validateProductBody = (req, res, next) => {
  try {
    const { error } = CategorySchema.validate(req.body);
    if (error) throw error;

    return next();
  } catch (error) {
    res.status(400).json({
      details: error.details.map((detail) => detail.message).join(', '),
    });
  }
};

export default validateProductBody;
