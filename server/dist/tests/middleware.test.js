"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require("chai-http");

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require("../index");

var _index2 = _interopRequireDefault(_index);

require("babel-polyfill");

var _setup = require("./utils/setup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var expect = _chai2.default.expect;

_chai2.default.use(_chaiHttp2.default);

describe("authentication", function () {
  it("should return 401 when user not logged in", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _chai2.default.request(_index2.default).post("/api/v1/products").send(_setup.productDetails).set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTI3MTM3NjQ2LCJleHAiOjE1MjcyMjQwNDZ9.0J2YZ8LAUpEnauDvl21U2OjHIQjRBzR70PlLVvNPD9trcs");

          case 2:
            res = _context.sent;

            expect(res).to.have.status(401);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));
  it("should return 401 when key is not set", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _chai2.default.request(_index2.default).post("/api/v1/products").send(_setup.productDetails);

          case 2:
            res = _context2.sent;

            expect(res).to.have.status(401);
            expect(res.body.message).to.equal("Unauthorized Access");

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));

  it("should return 403 if user is not a seller", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _chai2.default.request(_index2.default).post("/api/v1/products").send(_setup.productDetails).set("Authorization", "Bearer " + _setup.validBuyerToken);

          case 2:
            res = _context3.sent;

            expect(res).to.have.status(403);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  })));
});

describe("validate Parameter", function () {
  it("should return 422 for invalid params", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var res;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _chai2.default.request(_index2.default).get("/api/v1/product/-1");

          case 2:
            res = _context4.sent;

            expect(res).to.have.status(422);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  })));

  it("should return 422 for invalid seller params", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _chai2.default.request(_index2.default).get("/api/v1/products/user/-1");

          case 2:
            res = _context5.sent;

            expect(res).to.have.status(422);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  })));
});