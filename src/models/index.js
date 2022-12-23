const Users = require("./wealth.users");
const FixedIncome = require("./wealth.FI");

Users.hasMany(FixedIncome);

module.exports = {
  Users,
  FixedIncome,
};
