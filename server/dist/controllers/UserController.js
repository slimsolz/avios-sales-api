"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _encrypt = require("../helpers/encrypt");

var _responseUtil = require("../helpers/responseUtil");

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

require("babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require("dotenv").config();
var User = _models2.default.User;

var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "register",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var _req$body, firstName, lastName, email, password, role, hashedPassword, newUser, token, returnData;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password, role = _req$body.role;
                hashedPassword = (0, _encrypt.hashPassword)(password);
                _context.next = 5;
                return User.create({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  role: role,
                  password: hashedPassword
                });

              case 5:
                newUser = _context.sent;
                token = _jsonwebtoken2.default.sign({ id: newUser.id, email: newUser.email, role: newUser.role }, process.env.SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
                returnData = {
                  firstName: newUser.firstName,
                  lastName: newUser.lastName,
                  email: newUser.email,
                  role: newUser.role
                };
                return _context.abrupt("return", (0, _responseUtil.successResponseWithToken)(res, 201, "registration successful", returnData, token));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);

                next(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function register(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "login",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var _req$body2, email, role, password, user, confirmPassword, token;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _req$body2 = req.body, email = _req$body2.email, role = _req$body2.role, password = _req$body2.password;
                _context2.next = 4;
                return User.findOne({
                  where: { email: email.toLowerCase(), role: role }
                });

              case 4:
                user = _context2.sent;

                if (user) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", (0, _responseUtil.errorResponse)(res, 400, "email or password is invalid"));

              case 7:
                confirmPassword = (0, _encrypt.verifyPassword)(password, user.password);

                if (confirmPassword) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", (0, _responseUtil.errorResponse)(res, 400, "email or password is invalid"));

              case 10:
                token = _jsonwebtoken2.default.sign({ id: user.id, email: user.email, role: user.role }, process.env.SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
                return _context2.abrupt("return", (0, _responseUtil.successResponseWithToken)(res, 200, "login successful", user, token));

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);

                next(_context2.t0);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 14]]);
      }));

      function login(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return login;
    }()
  }]);

  return UserController;
}();

exports.default = UserController;