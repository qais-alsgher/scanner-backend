"use strict";
const jwt = require("jsonwebtoken");
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.VIRTUAL,
      get: function () {
        return jwt.sign(
          {
            id: this.id,
            userName: this.userName,
            userEmail: this.userEmail,
          },
          process.env.JWT_SECRET_KEY
        );
      },
      set(tokenObj) {
        return jwt.sign(tokenObj, process.env.JWT_SECRET_KEY);
      },
      role: {
        type: DataTypes.ENUM("admin", "user"),
        allowNull: false,
        defaultValue: "user",
      },
      capabilities: {
        type: DataTypes.VIRTUAL,
        get: function () {
          const acl = {
            user: ["read"],
            admin: ["read", "create", "update", "delete"],
          };
          return acl[this.role];
        },
      },
    },
  });

  user.athinticateToken = (token) => {
    try {
      const parsedToken = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY,
        (err, payload) => {
          if (err) {
            throw new Error("Invalid Token");
          }
          return payload;
        }
      );
    } catch (e) {
      throw new Error(e.message);
    }
  };

  return user;
};
