'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyPassword = exports.hashPassword = undefined;

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description - Hash customer password
 * @async
 *
 * @param {string} password - Password string
 *
 * @returns {Promise<string>}
 */
var hashPassword = exports.hashPassword = function hashPassword(password) {
  return _bcrypt2.default.hashSync(password, 10);
};

/**
 * @description - Verifies customer password matches password in database
 * @async
 *
 * @param {string} password - Password string
 * @param {string} hashedPassword - Hashed password from database
 *
 * @returns {Promise<string>}
 */
/**
 * @module - Export functions to hash and verify password
 */
var verifyPassword = exports.verifyPassword = function verifyPassword(password, hashedPassword) {
  return _bcrypt2.default.compareSync(password, hashedPassword);
};