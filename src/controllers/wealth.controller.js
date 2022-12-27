const { wealthPotfolioService } = require("./../services");

const fetchAllUsers = async (req, res) => {
  try {
    const users = await wealthPotfolioService.getAllUsers(); //function name from services
    res.send({ users, count: users.length }); //to get the responce as a json
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

const createUser = async (req, res) => {
  try {
    const { firstname, lastname, password } = req.body;
    const newUser = await wealthPotfolioService.insertUsers(
      firstname,
      lastname,
      password
    );
    res.send(newUser);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

const createFixedIncome = async (req, res) => {
  try {
    const { title, description, cycle, amount, userId } = req.body;
    const newFixedIncome = await wealthPotfolioService.insertFixedIncome(
      title,
      description,
      cycle,
      amount,
      userId
    );
    res.send(newFixedIncome);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

const createAsset = async (req, res) => {
  try {
    const { name, description, value, purchase_date, userId } = req.body;
    const newAsset = await wealthPotfolioService.insertAsset(
      name,
      description,
      value,
      purchase_date,
      userId
    );
    res.send(newAsset);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

const createEquity = async (req, res) => {
  try {
    const { stock_name, unit_holding, cost_per_unit, purchase_date, userId } =
      req.body;
    const newEquity = await wealthPotfolioService.insertEquity(
      stock_name,
      unit_holding,
      cost_per_unit,
      purchase_date,
      userId
    );
    res.send(newEquity);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

const createExpenditure = async (req, res) => {
  try {
    const { type, value, date, userId } = req.body;
    const newExpenditure = await wealthPotfolioService.insertExpenditure(
      type,
      value,
      date,
      userId
    );
    res.send(newExpenditure);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};
 
const userLogin = async (req, res) => {
  try {
    const { firstname, password } = req.body;
    const loginuser = await wealthPotfolioService.login(firstname, password);
    res.send(loginuser);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

//details of logged in user
const userLoginDetails = async(req,res)=>{
  try{
    const {firstname,password} = req.body;
    const loginuserdetails = await wealthPotfolioService.getDetailsOfUser(firstname, password);
    res.send(loginuserdetails);
  }catch(error){
    res.status(400).send({ error: error });
  }
}

//to update fixed income with ID
const updateFixedIncome = async (req, res) => {
  try {
      const { id,title, description, cycle, amount} = req.body;
      const updateFI = await wealthPotfolioService.updateFixedIncomeByID(id,{title,description,cycle,amount});
      res.send(updateFI);
  } catch (error) {
      res.status(400).send({ error: error });
  }
};

//to update Aseet with ID
const updateAsset = async (req, res) => {
  try {
      const { id,name, description, value, purchase_date} = req.body;
      const updateAsset = await wealthPotfolioService.updateAssetByID(id,{name,description,value,purchase_date});
      res.send(updateAsset);
  } catch (error) {
      res.status(400).send({ error: error });
  }
};

//to update Equity with ID
const updateEquity = async (req, res) => {
  try {
      const { id,stock_name, unit_holding, cost_per_unit, purchase_date} = req.body;
      const updateEquity = await wealthPotfolioService.updateEquityByID(id,{stock_name,unit_holding,cost_per_unit,purchase_date});
      res.send(updateEquity);
  } catch (error) {
      res.status(400).send({ error: error });
  }
};

const deleteFixedIncomeById = async (req, res) => {
  try {
      const { id } = req.body;
      const deletefixedincome = await wealthPotfolioService.deleteFixedIncomeByID(id);
      res.send(deletefixedincome);
  } catch (error) {
      res.status(400).send({ error: error });
  }
};


module.exports = {
  fetchAllUsers,
  createUser,
  createFixedIncome,
  createAsset,
  createEquity,
  createExpenditure,
  userLogin,
  userLoginDetails,
  updateFixedIncome,
  updateAsset,
  updateEquity,
  deleteFixedIncomeById
};
