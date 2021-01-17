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

describe("Products", function () {
  it("should return 201 and successfully add a new product", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _chai2.default.request(_index2.default).post("/api/v1/products").set("Authorization", "Bearer " + _setup.validSellerToken).send(_setup.productDetails);

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

  it("should return 200 and get all products", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _chai2.default.request(_index2.default).get("/api/v1/products");

          case 2:
            res = _context2.sent;

            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));

  it("should return 200 and get a single seller", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _chai2.default.request(_index2.default).get("/api/v1/products/user/1");

          case 2:
            res = _context3.sent;

            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  })));

  it("should return 404 and fail to get product", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var res;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _chai2.default.request(_index2.default).get("/api/v1/product/10000");

          case 2:
            res = _context4.sent;

            expect(res).to.have.status(404);
            expect(res.body.message).to.be.equal("product not found");

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  })));

  it("should return 200 and successfully update a product", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _chai2.default.request(_index2.default).patch("/api/v1/product/1").set("Authorization", "Bearer " + _setup.validSellerToken).send(_setup.updatedProductDetails);

          case 2:
            res = _context5.sent;

            expect(res).to.have.status(200);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  })));

  it("should return 404 and fail update a product", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var res;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _chai2.default.request(_index2.default).patch("/api/v1/product/10000").set("Authorization", "Bearer " + _setup.validSellerToken).send(_setup.updatedProductDetails);

          case 2:
            res = _context6.sent;

            expect(res).to.have.status(404);
            expect(res.body.message).to.be.equal("product not found");

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  })));

  it("should return 200 and delete a single product", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var res;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _chai2.default.request(_index2.default).delete("/api/v1/product/1").set("Authorization", "Bearer " + _setup.validSellerToken);

          case 2:
            res = _context7.sent;

            expect(res).to.have.status(200);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  })));

  it("should return 404 and fail to delete product", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var res;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _chai2.default.request(_index2.default).delete("/api/v1/product/10000").set("Authorization", "Bearer " + _setup.validSellerToken);

          case 2:
            res = _context8.sent;

            expect(res).to.have.status(404);
            expect(res.body.message).to.be.equal("product not found");

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, undefined);
  })));
});