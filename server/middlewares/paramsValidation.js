import Joi from "joi";
import { errorResponse } from "../helpers/responseUtil";

export const validateParam = (req, res, next) => {
  const schema = Joi.object().keys({
    id: Joi.number().integer().required().min(1),
  });
  const { id } = req.params;
  const { error } = Joi.validate({ id }, schema);
  if (error) {
    const { details } = error;
    return errorResponse(res, 422, details[0].message);
  }

  return next();
};

export const validateSellerParam = (req, res, next) => {
  const schema = Joi.object().keys({
    sellerId: Joi.number().integer().required().min(1),
  });
  const { sellerId } = req.params;
  const { error } = Joi.validate({ sellerId }, schema);
  if (error) {
    const { details } = error;
    return errorResponse(res, 422, details[0].message);
  }

  return next();
};
