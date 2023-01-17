const wealthRoutes = require("express").Router();
const { wealthPotfolioController } = require("./../controllers");
const jwt = require("jsonwebtoken");

wealthRoutes.get(
  "/getAllUsers",
  authenticateToken,
  wealthPotfolioController.fetchAllUsers
);

wealthRoutes.get("/login", wealthPotfolioController.userLogin);

wealthRoutes.get(
  "/login/getUserDetails",
  authenticateToken,
  wealthPotfolioController.userLoginDetails
);

wealthRoutes.get(
  "/login/getUserIncomeExpenseDetails",
  authenticateToken,
  wealthPotfolioController.userLoginIncomeExpenDetails
);

wealthRoutes.get(
  "/login/filterUserDetailsByYear",
  wealthPotfolioController.userLoginDetailsByYear
);

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

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = {
  wealthRoutes,
};
