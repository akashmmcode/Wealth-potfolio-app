const wealthRoutes = require("express").Router();
const { wealthPotfolioController } = require("./../controllers");

wealthRoutes.get("/getAllUsers", wealthPotfolioController.fetchAllUsers);
wealthRoutes.post("/createUser", wealthPotfolioController.createUser);

module.exports = {
  wealthRoutes,
};
