const { Users } = require("../models"); //table name imported from models
const { FixedIncome } = require("../models"); //table name imported from models
const { Assets } = require("../models");
const { Equity } = require("../models");
const { Expenditure } = require("../models");

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

module.exports = {
  getAllUsers,
  insertUsers,
  insertFixedIncome,
  insertAsset,
  insertEquity,
  insertExpenditure,
  login,
};
