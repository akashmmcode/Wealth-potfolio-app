const express = require("express");
const cors = require("cors");
const DB = require("./database");
const Model = require("./models/index");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "hello" });
});

app.listen(5000, async (error) => {
  if (error) {
    console.error(error);
    return;
  }
  try {
    await DB.authenticate();
    await DB.sync({ force: true });
    console.log("DB Connected");
  } catch (err) {
    console.error(err);
  }

  console.info(`Server started at port 5000`);
});
