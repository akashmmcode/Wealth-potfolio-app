const Users = require("./wealth.users");
const FixedIncome = require("./wealth.FI");
const Assets = require("./wealth.assets");
const Equity = require("./wealth.equity");

Users.hasMany(FixedIncome);
Users.hasMany(Assets);
Users.hasMany(Equity);


module.exports = {
  Users,
  FixedIncome,
  Assets,
  Equity
};
