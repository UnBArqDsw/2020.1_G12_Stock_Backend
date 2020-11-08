import Joi from '@hapi/joi';

const LotSchema = Joi.object({
  entryDate: Joi.date().required(),
  dueDate: Joi.date().required(),
  productQty: Joi.number().integer().required(),
  description: Joi.string().required(),
  purchasePrice: Joi.number().required(),
  idProduct: Joi.number().integer().required(),
});

const validateLotBody = (req, res, next) => {
  try {
    const { error } = LotSchema.validate(req.body);
    if (error) throw error;

    return next();
  } catch (error) {
    console.log(error);
    res.status(400).json({
      details: error.details.map((detail) => detail.message).join(', '),
    });
  }
};

export default validateLotBody;
