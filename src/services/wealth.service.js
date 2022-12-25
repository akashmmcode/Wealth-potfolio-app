const { Users } = require("../models");

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
    console.log(newUser);
    return newUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  insertUsers,
};
