import express from "express";
import upload from "../helpers/fileUpload";
import ProductController from "../controllers/ProductController";
import { isLoggedIn, validateSeller } from "../middlewares/authenticate";
import {
  validateParam,
  validateSellerParam,
} from "../middlewares/paramsValidation";
import { createProductValidation } from "../middlewares/productValidation";

const productsRouter = express.Router();

productsRouter.post(
  "/products",
  isLoggedIn,
  validateSeller,
  createProductValidation,
  upload.array("imgUrl"),
  ProductController.addProduct
);
productsRouter.get("/products", ProductController.getAllProducts);
productsRouter.get(
  "/products/user/:sellerId",
  validateSellerParam,
  ProductController.getSellerProducts
);
productsRouter.get("/product/:id", validateParam, ProductController.getProduct);
productsRouter.delete(
  "/product/:id",
  isLoggedIn,
  validateSeller,
  validateParam,
  ProductController.deleteProduct
);
productsRouter.patch(
  "/product/:id",
  isLoggedIn,
  validateSeller,
  validateParam,
  createProductValidation,
  upload.array("imgUrl"),
  ProductController.editProduct
);

export default productsRouter;
