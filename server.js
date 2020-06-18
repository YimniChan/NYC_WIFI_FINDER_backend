const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
//const path = require('path');

const app = express();

//bodyParser Middleware
app.use(bodyParser.json());

//DB Config
dotenv.config();
const mongoDB = process.env.MONGO_URI;

if (!mongoDB) {
  throw new Error('You must provide a string to connect to MongoDB Atlas');
}
//connect to model
require("./models/hotSpot.model");


//connect to mongo
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err)
  );

  // mongoose.connection
  // .once("open", ()=> console.log('Connected'))
  // .on('("err', (error)=> {
  //   console.log("errrrrrrrrrrr", error)
  // });


// Parsing requests into JSON
//app.use(bodyParser.json());

//require router files
const hotSpotsRouter = require("./routes/hotspots");

//use router files
app.use("/hotSpots", hotSpotsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

//module.exports = app;