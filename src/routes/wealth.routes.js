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
wealthRoutes.get("/login/getUserIncomeExpenseDetails", wealthPotfolioController.userLoginIncomeExpenDetails);
wealthRoutes.put("/updateFixedIncomeByID", wealthPotfolioController.updateFixedIncome);
wealthRoutes.put("/updateAssetByID", wealthPotfolioController.updateAsset);
wealthRoutes.put("/updateEquityByID", wealthPotfolioController.updateEquity);
wealthRoutes.post("/deleteFixedIncomeByID", wealthPotfolioController.deleteFixedIncomeById);
wealthRoutes.post("/deleteAssetByID", wealthPotfolioController.deleteAssetById);
wealthRoutes.post("/deleteEquityByID", wealthPotfolioController.deleteEquityById);




module.exports = {
  wealthRoutes,
};
