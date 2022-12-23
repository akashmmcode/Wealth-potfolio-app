const Users = require("./wealth.users");
const FixedIncome = require("./wealth.FI");
const Assets = require("./wealth.assets");
const Equity = require("./wealth.equity");
const Expenditure = require("./wealth.expenditure");
const Documents = require("./wealth.documents");

Users.hasMany(FixedIncome);
Users.hasMany(Assets);
Users.hasMany(Equity);
Users.hasMany(Expenditure);
Expenditure.hasMany(Documents);


module.exports = {
  Users,
  FixedIncome,
  Assets,
  Equity,
  Expenditure,
  Documents
};
