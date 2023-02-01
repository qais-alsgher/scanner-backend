"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const items = require("./items");
const user = require("./user");
const collection = require("../collection/iteamCollection");

const sequelize = new Sequelize(process.env.DATABASE_URL, {});

const db = {};
db.sequelize = sequelize;

db.itemsModel = require("./items")(sequelize, DataTypes);
db.userModel = require("./user")(sequelize, DataTypes);

db.items = new collection(db.itemsModel);

db.userModel.hasMany(db.itemsModel, { foreignKey: "userId", sourceKey: "id" });
db.itemsModel.belongsTo(db.userModel, {
  foreignKey: "userId",
  targetKey: "id",
});

module.exports = db;
