"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _responseUtil = require("../helpers/responseUtil");

var _usersRoute = require("./usersRoute");

var _usersRoute2 = _interopRequireDefault(_usersRoute);

var _productsRoute = require("./productsRoute");

var _productsRoute2 = _interopRequireDefault(_productsRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/", function (req, res) {
  (0, _responseUtil.successResponse)(res, 200, null);
});

router.use("/auth", _usersRoute2.default);
router.use("/", _productsRoute2.default);

router.all("*", function (req, res) {
  (0, _responseUtil.errorResponse)(res, 404, "404 Page not found");
});

exports.default = router;