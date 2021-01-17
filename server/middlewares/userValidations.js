import Joi from "joi";
import { errorResponse } from "../helpers/responseUtil";

export const registerUserValidator = (req, res, next) => {
  const schema = Joi.object().keys({
    firstName: Joi.string().required().min(3),
    lastName: Joi.string().required().min(3),
    role: Joi.string().required().min(3),
    email: Joi.string().required(),
    password: Joi.string()
      .required()
      .regex(
        /^(?=.*[@$!#_%.*?&-])(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%_*#.?&-]{8,}$/
      )
      .min(8),
  });
  const { firstName, lastName, role, email, password } = req.body;
  const { error } = Joi.validate(
    { firstName, lastName, role, email, password },
    schema
  );
  if (error) {
    let message;
    const { details } = error;
    message = details[0].message;
    if (details[0].type === "string.regex.base") {
      message =
        "Password must contain a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }

    return errorResponse(res, 422, message);
  }

  return next();
};

export const loginUserValidator = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().required().email({ minDomainAtoms: 2 }),
    role: Joi.string().required().min(3),
    password: Joi.string().required().min(8),
  });
  const { email, password, role } = req.body;
  const { error } = Joi.validate({ email, role, password }, schema);
  if (error) {
    let message;
    const { details } = error;
    message = details[0].message;
    if (details[0].type === "string.regex.base") {
      message =
        "Password must contain a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }

    return errorResponse(res, 422, message);
  }

  return next();
};
