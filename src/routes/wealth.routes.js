const wealthRoutes = require("express").Router();
const { wealthPotfolioController } = require("./../controllers");
const jwt = require("jsonwebtoken");
require("dotenv").config();


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
wealthRoutes.get("/login", authenticateToken, wealthPotfolioController.userLogin);
wealthRoutes.get(
  "/login/getUserDetails",
  wealthPotfolioController.userLoginDetails
);
wealthRoutes.get(
  "/login/getUserIncomeExpenseDetails",
  wealthPotfolioController.userLoginIncomeExpenDetails
);
wealthRoutes.put(
  "/updateFixedIncomeByID",
  wealthPotfolioController.updateFixedIncome
);
wealthRoutes.put("/updateAssetByID", wealthPotfolioController.updateAsset);
wealthRoutes.put("/updateEquityByID", wealthPotfolioController.updateEquity);
wealthRoutes.post(
  "/deleteFixedIncomeByID",
  wealthPotfolioController.deleteFixedIncomeById
);
wealthRoutes.post("/deleteAssetByID", wealthPotfolioController.deleteAssetById);
wealthRoutes.post(
  "/deleteEquityByID",
  wealthPotfolioController.deleteEquityById
);
wealthRoutes.get(
  "/login/filterUserDetailsByYear",
  wealthPotfolioController.userLoginDetailsByYear
);


function authenticateToken(req, res, next){

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, fname) => {
        if (err) return res.sendStatus(403);
        req.fname = fname;
        next();
    });
}



module.exports = {
  wealthRoutes,
};
