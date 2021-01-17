"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProductValidation = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _responseUtil = require("../helpers/responseUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProductValidation = exports.createProductValidation = function createProductValidation(req, res, next) {
  var schema = _joi2.default.object().keys({
    name: _joi2.default.string().required().min(2),
    description: _joi2.default.string().required().min(2),
    size: _joi2.default.string(),
    color: _joi2.default.string().required(),
    quantity: _joi2.default.number().required(),
    price: _joi2.default.number().required()
  });
  var _req$body = req.body,
      name = _req$body.name,
      description = _req$body.description,
      size = _req$body.size,
      color = _req$body.color,
      quantity = _req$body.quantity,
      price = _req$body.price;

  var _Joi$validate = _joi2.default.validate({ name: name, description: description, size: size, color: color, quantity: quantity, price: price }, schema),
      error = _Joi$validate.error;

  if (error) {
    var details = error.details;

    return (0, _responseUtil.errorResponse)(res, 422, details[0].message);
  }

  return next();
};