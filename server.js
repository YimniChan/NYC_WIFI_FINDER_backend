const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

//bodyParser Middleware
app.use(bodyParser.json());

//DB Config
dotenv.config();
const mongoDB = process.env.MONGO_URI;

//connect to mongo
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));

//require router files
const hotSpotsRouter = require("./routes/hotSpots");
const usersRouter = require("./routes/users");

//use router files
app.use("/hotSpots", hotSpotsRouter);
app.use("/users", usersRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
