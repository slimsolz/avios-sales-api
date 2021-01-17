"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 8000;
app.set("port", port);

app.use((0, _cors2.default)());
app.use((0, _morgan2.default)("dev"));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use("/api/v1", _routes2.default);

app.use(function (err, req, res, next) {
  console.log(err);
  return res.status(400).json({
    success: false,
    message: err
  });
});

app.listen(port, function () {
  console.log("App started on port " + port);
});

exports.default = app;