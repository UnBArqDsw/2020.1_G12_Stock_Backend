import Joi from '@hapi/joi';

const CreateCompanySchema = Joi.object({
  maxQtdCollaborator: Joi.number().integer().required().min(1),
  email: Joi.string().required().min(15).max(255),
  telephone: Joi.string().max(11).min(10).required(),
  idBranch: Joi.number().integer().required().min(1),
  name: Joi.string().required().min(3).max(255),
  document: Joi.string().regex(/\d{11}/).required()
});

const validateCreateCompanyBody = (req, res, next) => {
  try {
    const { error } = CreateCompanySchema.validate(req.body);
    if (error) throw error;

    return next();
  } catch (error) {
    console.log(error);
    res.status(400).json({
      details: error.details.map((detail) => detail.message).join(', '),
    });
  }
};

export default validateCreateCompanyBody;
