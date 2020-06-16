const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

//bodyparser Middleware
app.use(bodyParser.json);

//DB Config
dotenv.config();
const mongoDB = process.env.MONGO_URI;

//connect to mongo
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

//