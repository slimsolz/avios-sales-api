import { successResponse, errorResponse } from "../helpers/responseUtil";
import Model from "../models";
import "babel-polyfill";
import { deleteFile } from "../helpers/deleteFile";

require("dotenv").config();
const { Product } = Model;

class ProductController {
  static async addProduct(req, res, next) {
    try {
      const { name, description, size, color, quantity, price } = req.body;
      const user_id = req.userId;
      let images;
      if (req.files) {
        images = req.files.map((file) => {
          return { url: file.secure_url, id: file.public_id };
        });
      }

      const product_varieties = {
        size,
        color,
        quantity,
        price,
        image: images,
      };

      const newProduct = await Product.create({
        product_name: name,
        product_description: description,
        product_varieties,
        user_id,
      });

      successResponse(res, 201, newProduct);
    } catch (err) {
      next(err);
    }
  }

  static async getAllProducts(req, res, next) {
    try {
      const products = await Product.findAll({
        attributes: [
          "id",
          "product_name",
          "product_description",
          "product_varieties",
          "user_id",
          ["createdAt", "date_uploaded"],
          ["updatedAt", "date_edited"],
        ],
      });
      successResponse(res, 200, products);
    } catch (err) {
      next(err);
    }
  }

  static async getSellerProducts(req, res, next) {
    try {
      const { sellerId } = req.params;
      const products = await Product.findAll({
        where: { user_id: sellerId },
        attributes: [
          "id",
          "product_name",
          "product_description",
          "product_varieties",
          "user_id",
          ["createdAt", "date_uploaded"],
          ["updatedAt", "date_edited"],
        ],
      });

      successResponse(res, 200, products);
    } catch (err) {
      next(err);
    }
  }

  static async getProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({
        where: { id },
        attributes: [
          "id",
          "product_name",
          "product_description",
          "product_varieties",
          "user_id",
          ["createdAt", "date_uploaded"],
          ["updatedAt", "date_edited"],
        ],
      });
      if (!product) return errorResponse(res, 404, "product not found");
      successResponse(res, 200, product);
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const user_id = req.userId;
      const product = await Product.findOne({ where: { id, user_id } });
      if (!product) return errorResponse(res, 404, "product not found");

      if (product.product_varieties.image) {
        product.product_varieties.image.forEach((image) => {
          deleteFile(image.id);
        });
      }

      const productDetails = await Product.destroy({ where: { id, user_id } });
      return successResponse(res, 200, productDetails);
    } catch (err) {
      next(err);
    }
  }

  static async editProduct(req, res, next) {
    try {
      const { id } = req.params;
      const user_id = req.userId;
      const product = await Product.findOne({ where: { id, user_id } });
      if (!product) return errorResponse(res, 404, "product not found");
      let images;
      const { name, description, size, color, quantity, price } = req.body;

      if (req.files && req.files.length > 0) {
        product.product_varieties.image.forEach((image) => {
          deleteFile(image.id);
        });
        images = req.files.map((file) => {
          return { url: file.secure_url, id: file.public_id };
        });
      }

      const product_varieties = {
        size,
        color,
        quantity,
        price,
        image: images,
      };

      const updatedProduct = await Product.update(
        {
          product_name: name,
          product_description: description,
          product_varieties,
          user_id,
        },
        { where: { id, user_id } }
      );

      return successResponse(res, 200, updatedProduct);
    } catch (err) {
      next(err);
    }
  }
}

export default ProductController;
