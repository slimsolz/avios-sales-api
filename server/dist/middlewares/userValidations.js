"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUserValidator = exports.registerUserValidator = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _responseUtil = require("../helpers/responseUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerUserValidator = exports.registerUserValidator = function registerUserValidator(req, res, next) {
  var schema = _joi2.default.object().keys({
    firstName: _joi2.default.string().required().min(3),
    lastName: _joi2.default.string().required().min(3),
    role: _joi2.default.string().required().min(3),
    email: _joi2.default.string().required(),
    password: _joi2.default.string().required().regex(/^(?=.*[@$!#_%.*?&-])(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%_*#.?&-]{8,}$/).min(8)
  });
  var _req$body = req.body,
      firstName = _req$body.firstName,
      lastName = _req$body.lastName,
      role = _req$body.role,
      email = _req$body.email,
      password = _req$body.password;

  var _Joi$validate = _joi2.default.validate({ firstName: firstName, lastName: lastName, role: role, email: email, password: password }, schema),
      error = _Joi$validate.error;

  if (error) {
    var message = void 0;
    var details = error.details;

    message = details[0].message;
    if (details[0].type === "string.regex.base") {
      message = "Password must contain a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }

    return (0, _responseUtil.errorResponse)(res, 422, message);
  }

  return next();
};

var loginUserValidator = exports.loginUserValidator = function loginUserValidator(req, res, next) {
  var schema = _joi2.default.object().keys({
    email: _joi2.default.string().required().email({ minDomainAtoms: 2 }),
    role: _joi2.default.string().required().min(3),
    password: _joi2.default.string().required().min(8)
  });
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password,
      role = _req$body2.role;

  var _Joi$validate2 = _joi2.default.validate({ email: email, role: role, password: password }, schema),
      error = _Joi$validate2.error;

  if (error) {
    var message = void 0;
    var details = error.details;

    message = details[0].message;
    if (details[0].type === "string.regex.base") {
      message = "Password must contain a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }

    return (0, _responseUtil.errorResponse)(res, 422, message);
  }

  return next();
};