"use strict";

module.exports = function (sequelize, DataTypes) {
  var Contact = sequelize.define("Contact", {
    name: DataTypes.STRING,
    number: DataTypes.STRING
  }, {});

  Contact.associate = function (models) {// associations can be defined here
  };

  return Contact;
};