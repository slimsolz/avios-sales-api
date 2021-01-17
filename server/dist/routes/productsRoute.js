"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _fileUpload = require("../helpers/fileUpload");

var _fileUpload2 = _interopRequireDefault(_fileUpload);

var _ProductController = require("../controllers/ProductController");

var _ProductController2 = _interopRequireDefault(_ProductController);

var _authenticate = require("../middlewares/authenticate");

var _paramsValidation = require("../middlewares/paramsValidation");

var _productValidation = require("../middlewares/productValidation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productsRouter = _express2.default.Router();

productsRouter.post("/products", _authenticate.isLoggedIn, _authenticate.validateSeller, _productValidation.createProductValidation, _fileUpload2.default.array("imgUrl"), _ProductController2.default.addProduct);
productsRouter.get("/products", _ProductController2.default.getAllProducts);
productsRouter.get("/products/user/:sellerId", _paramsValidation.validateSellerParam, _ProductController2.default.getSellerProducts);
productsRouter.get("/product/:id", _paramsValidation.validateParam, _ProductController2.default.getProduct);
productsRouter.delete("/product/:id", _authenticate.isLoggedIn, _authenticate.validateSeller, _paramsValidation.validateParam, _ProductController2.default.deleteProduct);
productsRouter.patch("/product/:id", _authenticate.isLoggedIn, _authenticate.validateSeller, _paramsValidation.validateParam, _productValidation.createProductValidation, _fileUpload2.default.array("imgUrl"), _ProductController2.default.editProduct);

exports.default = productsRouter;