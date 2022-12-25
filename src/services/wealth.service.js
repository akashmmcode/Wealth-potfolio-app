const { Users } = require("../models"); //table name imported from models
const { FixedIncome } = require("../models"); //table name imported from models

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

module.exports = {
  getAllUsers,
  insertUsers,
  insertFixedIncome,
};
