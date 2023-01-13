const Sequelize = require("sequelize");
const db = require("../database");

const Equity = db.define(
  "equity",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    stock_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    unit_holding: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cost_per_unit: {
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
    tableName: "equity",
  }
);

module.exports = Equity;
