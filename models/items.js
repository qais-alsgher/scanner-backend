"use strict";
module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define("items", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemsBarCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return items;
};
