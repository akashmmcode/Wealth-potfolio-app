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

module.exports = {
  fetchAllUsers,
  createUser,
};
