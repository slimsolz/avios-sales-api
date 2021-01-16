import Joi from "joi";
import { errorResponse } from "../helpers/responseUtil";

export const createProductValidation = (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required().min(2),
    description: Joi.string().required().min(2),
    size: Joi.string(),
    color: Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
  });
  const { name, description, size, color, quantity, price } = req.body;

  const { error } = Joi.validate(
    { name, description, size, color, quantity, price },
    schema
  );
  if (error) {
    const { details } = error;
    return errorResponse(res, 422, details[0].message);
  }

  return next();
};
