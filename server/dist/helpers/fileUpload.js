"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multer = require("multer");

var _multer2 = _interopRequireDefault(_multer);

var _cloudinary = require("cloudinary");

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _multerStorageCloudinary = require("multer-storage-cloudinary");

var _multerStorageCloudinary2 = _interopRequireDefault(_multerStorageCloudinary);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

_cloudinary2.default.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

var storage = (0, _multerStorageCloudinary2.default)({
  cloudinary: _cloudinary2.default,
  folder: "avios-sales",
  allowedFormats: ["jpg", "png"],
  filename: function filename(req, file, cb) {
    cb(undefined, Date.now() + "_" + file.originalname.replace(/\.png|\.jpg/g, ""));
  }
});

exports.default = (0, _multer2.default)({ storage: storage });