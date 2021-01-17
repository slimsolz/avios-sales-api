'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFile = undefined;

var _cloudinary = require('cloudinary');

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

_cloudinary2.default.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

var deleteFile = exports.deleteFile = function deleteFile(publicId) {
  _cloudinary2.default.uploader.destroy(publicId, function (error, result) {
    return error || result;
  });
};