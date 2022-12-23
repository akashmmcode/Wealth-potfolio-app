const Sequelize = require("sequelize");
const db = require("../database");

const Assets = db.define(
  "assets",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    purchase_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "assets",
  }
);

module.exports = Assets;
