"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./database/models/index"));

var app = (0, _express["default"])();
var port = 5000;
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.get("/", function (req, res) {
  res.send();
});
app.use("/api", _routes["default"]);
app.listen(port, function () {
  console.log("server started on ".concat(port));
});