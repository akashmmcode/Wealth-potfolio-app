const Sequelize = require("sequelize");
const db = require("../database");

const Users = db.define(
  "users",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },  
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    activated:{
        type: Sequelize.BOOLEAN,
        default:false,
        allowNull: true
    }
  },
  {
    timestamps: true,
    tableName: "users",
  }
);

module.exports = Users;