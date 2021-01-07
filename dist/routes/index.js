"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = _interopRequireDefault(require("../controllers"));

var _middlewares = _interopRequireDefault(require("../middlewares"));

var contactRouter = new _express.Router();
contactRouter.post("/create", _middlewares["default"], _controllers["default"].createContact).get("/contacts/:id", _controllers["default"].getOneContact).get("/contacts", _controllers["default"].getAllContacts)["delete"]("/contacts/:id", _controllers["default"].deleteContact).put("/contacts/:id", _middlewares["default"], _controllers["default"].editContact);
var _default = contactRouter;
exports["default"] = _default;