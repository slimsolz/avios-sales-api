"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _UserController = require("../controllers/UserController");

var _UserController2 = _interopRequireDefault(_UserController);

var _authenticate = require("../middlewares/authenticate");

var _userValidations = require("../middlewares/userValidations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = _express2.default.Router();

userRouter.post("/register", _userValidations.registerUserValidator, _UserController2.default.register);
userRouter.post("/login", _userValidations.loginUserValidator, _UserController2.default.login);

exports.default = userRouter;