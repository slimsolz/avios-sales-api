import express from "express";
import upload from "../helpers/fileUpload";
import ProductController from "../controllers/ProductController";
import { isLoggedIn, validateSeller } from "../middlewares/authenticate";
import {
  validateParam,
  validateSellerParam,
} from "../middlewares/paramsValidation";

const productsRouter = express.Router();

productsRouter.post(
  "/products",
  isLoggedIn,
  validateSeller,
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
  upload.array("imgUrl"),
  ProductController.editProduct
);

export default productsRouter;
