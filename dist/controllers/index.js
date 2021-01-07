"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = require("../models");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var contactController = /*#__PURE__*/function () {
  function contactController() {
    (0, _classCallCheck2["default"])(this, contactController);
  }

  (0, _createClass2["default"])(contactController, null, [{
    key: "createContact",
    value: function () {
      var _createContact = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, name, number, addContact;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, name = _req$body.name, number = _req$body.number;
                _context.next = 3;
                return _models.Contact.create({
                  name: name,
                  number: number
                });

              case 3:
                addContact = _context.sent;
                console.log("successful");
                res.status(201).json({
                  message: "Your contact has been created",
                  addContact: addContact
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createContact(_x, _x2) {
        return _createContact.apply(this, arguments);
      }

      return createContact;
    }()
  }, {
    key: "getAllContacts",
    value: function () {
      var _getAllContacts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var getAllContacts;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _models.Contact.findAll();

              case 2:
                getAllContacts = _context2.sent;
                res.status(201).json({
                  message: "Successful",
                  contacts: getAllContacts
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAllContacts(_x3, _x4) {
        return _getAllContacts.apply(this, arguments);
      }

      return getAllContacts;
    }()
  }, {
    key: "getOneContact",
    value: function () {
      var _getOneContact = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var id, getOneContact;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;
                _context3.next = 3;
                return _models.Contact.findOne({
                  where: {
                    id: id
                  }
                });

              case 3:
                getOneContact = _context3.sent;

                if (getOneContact) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", res.status(409).json({
                  message: "Contact does not exist"
                }));

              case 6:
                res.status(200).json({
                  message: "Success",
                  comment: getOneContact
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getOneContact(_x5, _x6) {
        return _getOneContact.apply(this, arguments);
      }

      return getOneContact;
    }()
  }, {
    key: "deleteContact",
    value: function () {
      var _deleteContact = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                _context4.next = 3;
                return _models.Contact.destroy({
                  where: {
                    id: id
                  }
                });

              case 3:
                res.status(200).json({
                  message: "Successfully deleted a contact"
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteContact(_x7, _x8) {
        return _deleteContact.apply(this, arguments);
      }

      return deleteContact;
    }()
  }, {
    key: "editContact",
    value: function () {
      var _editContact = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // const { contact } = req.body;
                id = req.params.id;
                _context5.next = 3;
                return _models.Contact.update(_objectSpread({}, req.body), {
                  where: {
                    id: id
                  }
                });

              case 3:
                res.status(200).json({
                  message: "Successfully updated a contact"
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function editContact(_x9, _x10) {
        return _editContact.apply(this, arguments);
      }

      return editContact;
    }()
  }]);
  return contactController;
}();

var _default = contactController;
exports["default"] = _default;