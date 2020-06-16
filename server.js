const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//bodyparser Middleware
app.use(bodyParser.json);

//DB Config
const mongoDB = process.env.DATABASE_URL;

console.log(`your port is ${mongoDB}`);

//connect to mongo
mongoose
  .connect(mongoDB)
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));
