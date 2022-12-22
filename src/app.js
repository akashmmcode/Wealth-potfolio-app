const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "hello" });
});

app.listen(5000, () => {
  console.log("app is running on port 5000");
});
