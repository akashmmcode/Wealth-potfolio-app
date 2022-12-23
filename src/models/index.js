const Users = require("./wealth.users");
const FixedIncome = require("./wealth.FI");
const Assets = require("./wealth.assets");
const Equity = require("./wealth.equity");
const Expenditure = require("./expenditure");

Users.hasMany(FixedIncome);
Users.hasMany(Assets);
Users.hasMany(Equity);
Users.hasMany(Expenditure);


module.exports = {
  Users,
  FixedIncome,
  Assets,
  Equity,
  Expenditure
};
