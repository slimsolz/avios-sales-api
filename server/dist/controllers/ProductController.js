"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _responseUtil = require("../helpers/responseUtil");

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

require("babel-polyfill");

var _deleteFile = require("../helpers/deleteFile");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require("dotenv").config();
var Product = _models2.default.Product;

var ProductController = function () {
  function ProductController() {
    _classCallCheck(this, ProductController);
  }

  _createClass(ProductController, null, [{
    key: "addProduct",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var _req$body, name, description, size, color, quantity, price, user_id, images, product_varieties, newProduct;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, name = _req$body.name, description = _req$body.description, size = _req$body.size, color = _req$body.color, quantity = _req$body.quantity, price = _req$body.price;
                user_id = req.userId;
                images = void 0;

                if (req.files) {
                  images = req.files.map(function (file) {
                    return { url: file.secure_url, id: file.public_id };
                  });
                }

                product_varieties = {
                  size: size,
                  color: color,
                  quantity: quantity,
                  price: price,
                  image: images
                };
                _context.next = 8;
                return Product.create({
                  product_name: name,
                  product_description: description,
                  product_varieties: product_varieties,
                  user_id: user_id
                });

              case 8:
                newProduct = _context.sent;


                (0, _responseUtil.successResponse)(res, 201, newProduct);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);

                next(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function addProduct(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return addProduct;
    }()
  }, {
    key: "getAllProducts",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var products;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Product.findAll({
                  attributes: ["id", "product_name", "product_description", "product_varieties", "user_id", ["createdAt", "date_uploaded"], ["updatedAt", "date_edited"]]
                });

              case 3:
                products = _context2.sent;

                (0, _responseUtil.successResponse)(res, 200, products);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

                next(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getAllProducts(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return getAllProducts;
    }()
  }, {
    key: "getSellerProducts",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
        var sellerId, products;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                sellerId = req.params.sellerId;
                _context3.next = 4;
                return Product.findAll({
                  where: { user_id: sellerId },
                  attributes: ["id", "product_name", "product_description", "product_varieties", "user_id", ["createdAt", "date_uploaded"], ["updatedAt", "date_edited"]]
                });

              case 4:
                products = _context3.sent;


                (0, _responseUtil.successResponse)(res, 200, products);
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);

                next(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function getSellerProducts(_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
      }

      return getSellerProducts;
    }()
  }, {
    key: "getProduct",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
        var id, product;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = req.params.id;
                _context4.next = 4;
                return Product.findOne({
                  where: { id: id },
                  attributes: ["id", "product_name", "product_description", "product_varieties", "user_id", ["createdAt", "date_uploaded"], ["updatedAt", "date_edited"]]
                });

              case 4:
                product = _context4.sent;

                if (product) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", (0, _responseUtil.errorResponse)(res, 404, "product not found"));

              case 7:
                (0, _responseUtil.successResponse)(res, 200, product);
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);

                next(_context4.t0);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 10]]);
      }));

      function getProduct(_x10, _x11, _x12) {
        return _ref4.apply(this, arguments);
      }

      return getProduct;
    }()
  }, {
    key: "deleteProduct",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
        var id, user_id, product, productDetails;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                id = req.params.id;
                user_id = req.userId;
                _context5.next = 5;
                return Product.findOne({ where: { id: id, user_id: user_id } });

              case 5:
                product = _context5.sent;

                if (product) {
                  _context5.next = 8;
                  break;
                }

                return _context5.abrupt("return", (0, _responseUtil.errorResponse)(res, 404, "product not found"));

              case 8:

                if (product.product_varieties.image) {
                  product.product_varieties.image.forEach(function (image) {
                    (0, _deleteFile.deleteFile)(image.id);
                  });
                }

                _context5.next = 11;
                return Product.destroy({ where: { id: id, user_id: user_id } });

              case 11:
                productDetails = _context5.sent;
                return _context5.abrupt("return", (0, _responseUtil.successResponse)(res, 200, productDetails));

              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](0);

                next(_context5.t0);

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 15]]);
      }));

      function deleteProduct(_x13, _x14, _x15) {
        return _ref5.apply(this, arguments);
      }

      return deleteProduct;
    }()
  }, {
    key: "editProduct",
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
        var id, user_id, product, images, _req$body2, name, description, size, color, quantity, price, product_varieties, updatedProduct;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                id = req.params.id;
                user_id = req.userId;
                _context6.next = 5;
                return Product.findOne({ where: { id: id, user_id: user_id } });

              case 5:
                product = _context6.sent;

                if (product) {
                  _context6.next = 8;
                  break;
                }

                return _context6.abrupt("return", (0, _responseUtil.errorResponse)(res, 404, "product not found"));

              case 8:
                images = void 0;
                _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, size = _req$body2.size, color = _req$body2.color, quantity = _req$body2.quantity, price = _req$body2.price;


                if (req.files && req.files.length > 0) {
                  product.product_varieties.image.forEach(function (image) {
                    (0, _deleteFile.deleteFile)(image.id);
                  });
                  images = req.files.map(function (file) {
                    return { url: file.secure_url, id: file.public_id };
                  });
                }

                product_varieties = {
                  size: size,
                  color: color,
                  quantity: quantity,
                  price: price,
                  image: images
                };
                _context6.next = 14;
                return Product.update({
                  product_name: name,
                  product_description: description,
                  product_varieties: product_varieties,
                  user_id: user_id
                }, { where: { id: id, user_id: user_id } });

              case 14:
                updatedProduct = _context6.sent;
                return _context6.abrupt("return", (0, _responseUtil.successResponse)(res, 200, updatedProduct));

              case 18:
                _context6.prev = 18;
                _context6.t0 = _context6["catch"](0);

                next(_context6.t0);

              case 21:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 18]]);
      }));

      function editProduct(_x16, _x17, _x18) {
        return _ref6.apply(this, arguments);
      }

      return editProduct;
    }()
  }]);

  return ProductController;
}();

exports.default = ProductController;