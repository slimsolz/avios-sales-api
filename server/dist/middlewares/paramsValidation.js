"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSellerParam = exports.validateParam = undefined;

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _responseUtil = require("../helpers/responseUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateParam = exports.validateParam = function validateParam(req, res, next) {
  var schema = _joi2.default.object().keys({
    id: _joi2.default.number().integer().required().min(1)
  });
  var id = req.params.id;

  var _Joi$validate = _joi2.default.validate({ id: id }, schema),
      error = _Joi$validate.error;

  if (error) {
    var details = error.details;

    return (0, _responseUtil.errorResponse)(res, 422, details[0].message);
  }

  return next();
};

var validateSellerParam = exports.validateSellerParam = function validateSellerParam(req, res, next) {
  var schema = _joi2.default.object().keys({
    sellerId: _joi2.default.number().integer().required().min(1)
  });
  var sellerId = req.params.sellerId;

  var _Joi$validate2 = _joi2.default.validate({ sellerId: sellerId }, schema),
      error = _Joi$validate2.error;

  if (error) {
    var details = error.details;

    return (0, _responseUtil.errorResponse)(res, 422, details[0].message);
  }

  return next();
};