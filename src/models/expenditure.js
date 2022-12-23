const Sequelize = require("sequelize");
const db = require("../database");

const Expenditure = db.define(
  "expenditure",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "expenditure",
  }
);

module.exports = Expenditure;
