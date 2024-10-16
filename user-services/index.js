const express = require("express");
const dotenv = require("dotenv");
const DbConnection = require("./databaseConnection");

const userRoutes = require("./Routers")

dotenv.config();
const app = express();
const port = 5000;

app.use(express.json());
DbConnection();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "WELCOME TO THE  TEST",
  });
});

app.use("/user", userRoutes);

app.all("/", (req, res) => {
  res.status(500).json({
    message: "PAge not found",
  });
});
app.get("*", (req, res) => {
  res.status(500).json({
    message: "This Route Not Exsist .",
  });
});

app.listen(port, () => {
  // console.log(process.env.MONGO_URI);
  console.log(`Server is Running on  http://localhost:${port}`);
});
