const wealthRoutes = require("express").Router();
const { wealthPotfolioController } = require("./../controllers");

wealthRoutes.get("/getAllUsers", wealthPotfolioController.fetchAllUsers);
wealthRoutes.post("/createUser", wealthPotfolioController.createUser);
wealthRoutes.post(
  "/createFixedIncome",
  wealthPotfolioController.createFixedIncome
);
wealthRoutes.post("/createAsset", wealthPotfolioController.createAsset);
wealthRoutes.post("/createEquity", wealthPotfolioController.createEquity);
wealthRoutes.post(
  "/createExpenditure",
  wealthPotfolioController.createExpenditure
);

module.exports = {
  wealthRoutes,
};
