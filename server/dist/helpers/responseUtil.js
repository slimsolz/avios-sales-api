"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});
/**
   * Error response
   *
   * @param  {string} error - error string
   * @param  {Integer} statusCode - status code
   * @param {any} response - expressJS response object
   * @returns {object} response object
   */
var errorResponse = exports.errorResponse = function errorResponse(response, statusCode, error) {
   return response.status(statusCode).json({
      success: false,
      message: error
   });
};

/**
   * Success response
   *
   * @param  {string} message - response message
   * @param  {Integer} statusCode - status code
   * @param {Array} response - data object
   * @returns {object} response object
   */
var successResponse = exports.successResponse = function successResponse(response, statusCode, data) {
   return response.status(statusCode).json(data);
};

/**
   * Success response
   *
   * @param  {string} message - response message
   * @param  {Integer} statusCode - status code
   * @param {Array} response - data object
   * @returns {object} response object
   */
var successResponseWithToken = exports.successResponseWithToken = function successResponseWithToken(response, statusCode, message, data, token) {
   return response.status(statusCode).json({
      success: true,
      message: message,
      data: {
         id: data.id,
         name: data.name,
         email: data.email,
         role: data.role
      },
      token: "Bearer " + token
   });
};