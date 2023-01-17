const { Sequelize } = require("sequelize");
const { Users } = require("../models"); //table name imported from models
const { FixedIncome } = require("../models"); //table name imported from models
const { Assets } = require("../models");
const { Equity } = require("../models");
const { Expenditure } = require("../models");
const db = require("../database");

const login = async (firstname, password) => {
  try {
    const loggedinUser = await Users.findOne({
      where: { firstname: firstname, password: password },
    });

    if (loggedinUser == null) {
      return "Not authorised";
    }
    return loggedinUser;
  } catch {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await Users.findAll({});
    return users;
  } catch {
    throw error;
  }
};

//to get all the fixedIncome list
const getAllFixedIncome = async () => {
  try {
    const fixedincome = await FixedIncome.findAll({});
    return fixedincome;
  } catch {
    throw error;
  }
};

const getAllAsset = async () => {
  try {
    const asset = await Assets.findAll({});
    return asset;
  } catch {
    throw error;
  }
};

const getAllEquity = async () => {
  try {
    const equity = await Equity.findAll({});
    return equity;
  } catch {
    throw error;
  }
};

//to get details of logged in user
const getDetailsOfUser = async (firstname, password) => {
  try {
    const [userDetails, metadata] = await db.query(
      `select us.firstname as UserName ,att.name as AssetName, att.description as AssetDescription,att.value as AssetValue,f.title as FixedIncomenName,f.description as FixedIncomeDescription,f.amount as FixedIncomeValue,stock_name, (unit_holding * cost_per_unit) as total_stock_value from users us inner join assets att on us.id = att.userid inner join fixedincome f on us.id = f.userId inner join equity e on us.id = e.userId WHERE firstname = '${firstname}'`
    );
    const userDetailslen = Object.keys(userDetails).length;
    if (userDetailslen === 0) {
      return "please login with proper credentials";
    }
    return userDetails;
  } catch {
    throw error;
  }
};

const getIncomeExpenDetails = async (firstname) => {
  try {
    const [IncomeExpenDetails, metadata] = await db.query(
      `SELECT firstname ,f.amount as income,(f.amount  - e.value) as total_savings,e.value as expenses from users u inner join fixedincome f on u.id = f.userId  inner join assets a on u.id = a.userId inner join expenditure e on u.id = e.userId WHERE firstname = '${firstname}'`
    );

    const incomeexpenDetailslen = Object.keys(IncomeExpenDetails).length;
    if (incomeexpenDetailslen === 0) {
      return "please login with proper credentials";
    }
    return IncomeExpenDetails;
  } catch {
    throw error;
  }
};

const insertUsers = async (firstname, lastname, password) => {
  try {
    const newUser = await Users.create({
      firstname,
      lastname,
      password,
      activated: true,
    });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

const insertFixedIncome = async (title, description, cycle, amount, userId) => {
  try {
    const newFixedIncome = await FixedIncome.create({
      title,
      description,
      cycle,
      amount,
      userId,
    });
    await newFixedIncome.save();
    return newFixedIncome;
  } catch (error) {
    throw error;
  }
};

const insertAsset = async (name, description, value, purchase_date, userId) => {
  try {
    const newAsset = await Assets.create({
      name,
      description,
      value,
      purchase_date,
      userId,
    });
    await newAsset.save();
    return newAsset;
  } catch (error) {
    throw error;
  }
};

const insertEquity = async (
  stock_name,
  unit_holding,
  cost_per_unit,
  purchase_date,
  userId
) => {
  try {
    const newEquity = await Equity.create({
      stock_name,
      unit_holding,
      cost_per_unit,
      purchase_date,
      userId,
    });
    await newEquity.save();
    return newEquity;
  } catch (error) {
    throw error;
  }
};

const insertExpenditure = async (type, value, date, userId) => {
  try {
    const newExpenditure = await Expenditure.create({
      type,
      value,
      date,
      userId,
    });
    await newExpenditure.save();
    return newExpenditure;
  } catch (error) {
    throw error;
  }
};

//to update fixed income with ID
const updateFixedIncomeByID = async (id, data) => {
  try {
    const updateFI = await FixedIncome.update(data, {
      where: { id },
    });
    return "Updated";
  } catch (error) {
    throw error;
  }
};

//to update Asset with ID
const updateAssetByID = async (id, data) => {
  try {
    const updateFI = await Assets.update(data, {
      where: { id },
    });
    return "Updated";
  } catch (error) {
    throw error;
  }
};

//to update Equity with ID
const updateEquityByID = async (id, data) => {
  try {
    const updateEquity = await Equity.update(data, {
      where: { id },
    });
    return "Updated";
  } catch (error) {
    throw error;
  }
};

//to delete Fixed Income by ID
const deleteFixedIncomeByID = async (id) => {
  try {
    const deleteFixedIncome = await FixedIncome.destroy({
      where: { id },
    });
    return getAllFixedIncome();
  } catch (error) {
    throw error;
  }
};

//to delete Asset by ID
const deleteAssetByID = async (id) => {
  try {
    const deleteAsset = await Assets.destroy({
      where: { id },
    });
    return getAllAsset();
  } catch (error) {
    throw error;
  }
};

//to delete Equity by ID
const deleteEquityByID = async (id) => {
  try {
    const deleteEquity = await Equity.destroy({
      where: { id },
    });
    return getAllEquity();
  } catch (error) {
    throw error;
  }
};

//Fliter by year details of logged in user
const filterByYearDetailsOfUser = async (firstname, password, year) => {
  try {
    const [userDetailsbyyear, metadata] = await db.query(
      `select us.firstname as UserName ,att.name as AssetName, att.description as AssetDescription,att.value as AssetValue,f.title as FixedIncomenName,f.description as FixedIncomeDescription,f.amount as FixedIncomeValue,stock_name, (unit_holding * cost_per_unit) as total_stock_value from users us inner join assets att on us.id = att.userid inner join fixedincome f on us.id = f.userId inner join equity e on us.id = e.userId WHERE firstname = '${firstname}' AND password = '${password}' AND year(att.purchase_date) = '${year}' AND year(e.purchase_date) = '${year}'`
    );
    const userDetailslen = Object.keys(userDetailsbyyear).length;
    if (userDetailslen === 0) {
      return `please login with proper credentials or does not contain any details for year ${year} `;
    }
    return userDetailsbyyear;
  } catch {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  insertUsers,
  insertFixedIncome,
  insertAsset,
  insertEquity,
  insertExpenditure,
  login,
  getDetailsOfUser,
  updateFixedIncomeByID,
  updateAssetByID,
  updateEquityByID,
  deleteFixedIncomeByID,
  deleteAssetByID,
  deleteEquityByID,
  getIncomeExpenDetails,
  filterByYearDetailsOfUser,
};
