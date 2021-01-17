"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productWithMissingField = exports.updatedProductDetails = exports.productDetails = exports.seller = exports.buyer = exports.wrongSecretToken = exports.invalidToken = exports.expiredToken = exports.validBuyerToken = exports.validSellerToken = undefined;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _faker = require("faker");

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validSellerToken = exports.validSellerToken = "Bearer " + _jsonwebtoken2.default.sign({ id: 1, email: "seller@gmail.com", role: "seller" }, process.env.SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
var validBuyerToken = exports.validBuyerToken = "Bearer " + _jsonwebtoken2.default.sign({ id: 1, email: "seller@gmail.com", role: "buyer" }, process.env.SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
var expiredToken = exports.expiredToken = "Bearer " + _jsonwebtoken2.default.sign({ id: 1 }, process.env.SECRET, {
  expiresIn: 1
});
var invalidToken = exports.invalidToken = "Bearer " + _jsonwebtoken2.default.sign({}, process.env.SECRET, {
  expiresIn: 86400
});
var wrongSecretToken = exports.wrongSecretToken = "Bearer " + _jsonwebtoken2.default.sign({ id: 1 }, "fakesecret", {
  expiresIn: 86400
});

var buyer = exports.buyer = {
  firstName: "Buyer",
  lastName: "Buyer",
  email: "buyer@gmail.com",
  password: "Pa$$word12",
  role: "buyer"
};

var seller = exports.seller = {
  firstName: "Seller",
  lastName: "Seller",
  email: "seller@gmail.com",
  password: "Pa$$word12",
  role: "seller"
};

var productDetails = exports.productDetails = {
  name: _faker2.default.name.lastName(),
  quantity: _faker2.default.random.number(99),
  size: _faker2.default.random.arrayElement(["s", "L", "XL"]),
  color: _faker2.default.random.arrayElement(["red", "green", "blue", "white", "grey"]),
  price: _faker2.default.random.number(10000),
  description: _faker2.default.lorem.paragraph()
};

var updatedProductDetails = exports.updatedProductDetails = {
  name: _faker2.default.name.firstName(),
  quantity: _faker2.default.random.number(99),
  size: _faker2.default.random.arrayElement(["s", "L", "XL"]),
  color: _faker2.default.random.arrayElement(["red", "green", "blue", "white", "grey"]),
  price: _faker2.default.random.number(10000),
  description: _faker2.default.lorem.paragraph()
};

var productWithMissingField = exports.productWithMissingField = {
  quantity: _faker2.default.random.number(99),
  size: _faker2.default.random.arrayElement(["s", "L", "XL"]),
  color: _faker2.default.random.arrayElement(["red", "green", "blue", "white", "grey"]),
  price: _faker2.default.random.number(10000),
  description: _faker2.default.lorem.paragraph()
};