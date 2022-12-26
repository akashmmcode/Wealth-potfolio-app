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
wealthRoutes.get("/login", wealthPotfolioController.userLogin);
wealthRoutes.get("/login/getUserDetails", wealthPotfolioController.userLoginDetails);
wealthRoutes.put("/updateFixedIncomeByID", wealthPotfolioController.updateFixedIncome);
wealthRoutes.put("/updateAssetByID", wealthPotfolioController.updateAsset);




module.exports = {
  wealthRoutes,
};
