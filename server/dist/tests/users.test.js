"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require("chai-http");

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _faker = require("faker");

var _faker2 = _interopRequireDefault(_faker);

var _index = require("../index");

var _index2 = _interopRequireDefault(_index);

require("babel-polyfill");

var _setup = require("./utils/setup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var expect = _chai2.default.expect;

_chai2.default.use(_chaiHttp2.default);

var token = void 0;

describe("POST users", function () {
  it("should return 201 and successfully register a new seller", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _chai2.default.request(_index2.default).post("/api/v1/auth/register").send(_setup.seller);

          case 2:
            res = _context.sent;

            expect(res).to.have.status(201);
            expect(res.body).to.be.an("object");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  it("should return 201 and successfully register a new buyer", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _chai2.default.request(_index2.default).post("/api/v1/auth/register").send(_setup.buyer);

          case 2:
            res = _context2.sent;

            expect(res).to.have.status(201);
            expect(res.body).to.be.an("object");

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));

  it("should return 409 and fail to create user", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _chai2.default.request(_index2.default).post("/api/v1/auth/register").send(_setup.buyer);

          case 2:
            res = _context3.sent;

            expect(res).to.have.status(400);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  })));

  it("should return 200 and successfully log a user in", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var res;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _chai2.default.request(_index2.default).post("/api/v1/auth/login").send({
              email: _setup.buyer.email,
              role: _setup.buyer.role,
              password: _setup.buyer.password
            });

          case 2:
            res = _context4.sent;

            token = res.body.token;
            expect(res).to.have.status(200);
            expect(res.body.data).to.be.an("object");
            expect(res.body.message).to.be.equal("login successful");

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  })));

  it("should return 400 and not log an user in", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _chai2.default.request(_index2.default).post("/api/v1/auth/login").send({
              email: _setup.buyer.email,
              role: _setup.buyer.role,
              password: "Pa$$word0"
            });

          case 2:
            res = _context5.sent;

            expect(res).to.have.status(400);
            expect(res.body.message).to.be.equal("email or password is invalid");

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  })));

  it("should return 400 and not log an user in", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var res;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _chai2.default.request(_index2.default).post("/api/v1/auth/login").send({
              email: _faker2.default.internet.email(),
              role: _setup.buyer.role,
              password: _setup.buyer.password
            });

          case 2:
            res = _context6.sent;

            expect(res).to.have.status(400);
            expect(res.body.message).to.be.equal("email or password is invalid");

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  })));
});