"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSeller = exports.isLoggedIn = undefined;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _responseUtil = require("../helpers/responseUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description - check if a customer is logged in
 *
 * @param {object} req - HTTP Request
 * @param {object} res - HTTP Response
 * @param {object} next
 *
 * @returns
 */
var isLoggedIn = exports.isLoggedIn = function isLoggedIn(req, res, next) {
  var token = req.get("Authorization") && req.get("Authorization").slice(7);
  if (!token) {
    return (0, _responseUtil.errorResponse)(res, 401, "Unauthorized Access");
  }

  _jsonwebtoken2.default.verify(token.slice(7), process.env.SECRET, function (err, decoded) {
    if (err) {
      return (0, _responseUtil.errorResponse)(res, 401, err.message + "..Please log in to continue");
    }

    req.userId = decoded.id;
    req.userRole = decoded.role;
    req.userEmail = decoded.email;
    // req.userName = `${decoded.firstName} ${decoded.lastName}`;
    return next();
  });
};

var validateSeller = exports.validateSeller = function validateSeller(req, res, next) {
  if (req.userRole !== "seller") {
    return (0, _responseUtil.errorResponse)(res, 403, "Forbidden, you do not have permission to perform this action");
  }

  return next();
};