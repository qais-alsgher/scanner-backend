"use strict";
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define("cart", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return cart;
};
