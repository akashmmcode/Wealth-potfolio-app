const Users = require("./users.model");
const FixedIncome = require("./FI.model");
const Assets = require("./assets.model");
const Equity = require("./equity.model");
const Expenditure = require("./expenditure.model");
const Documents = require("./document.model");

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
  Documents,
};
