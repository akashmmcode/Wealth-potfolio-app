const Sequelize = require("sequelize");
const db = require("../database");

const Documents = db.define(
  "documents",
  {
    document_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    document_url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "documents",
  }
);

module.exports = Documents;
