import Joi from '@hapi/joi';

const LotSchema = Joi.object({
  entryDate: Joi.date().required(),
  dueDate: Joi.date().required(),
  productQty: Joi.number().integer().required().min(1),
  description: Joi.string().required(),
  purchasePrice: Joi.number().required().min(0.01),
  idProduct: Joi.number().integer().required().min(1),
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

const DecreaseLotSchema = Joi.object({
  idLot: Joi.number().integer().min(1).required(),
  quantity: Joi.number().integer().min(1).required(),
});

export const validateDecreaseLotBody = (req, res, next) => {
  try {
    const { error } = DecreaseLotSchema.validate(req.body);
    if (error) throw error;

    return next();
  } catch (error) {
    res.status(400).json({
      details: error.details.map((detail) => detail.message).join(', '),
    });
  }
};
export default validateLotBody;
