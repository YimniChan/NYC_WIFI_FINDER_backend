const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
//const path = require('path');

//read from json file and convert it into json.
var fs = require("fs");
var content = fs.readFileSync("info.json");
var converted = JSON.parse(content);

const app = express();

// enable all cors requests
app.use(cors());

//bodyParser Middleware
app.use(bodyParser.json());

//DB Config
dotenv.config();
const mongoDB = process.env.MONGODB_URI;

if (!mongoDB) {
  throw new Error("You must provide a string to connect to MongoDB Atlas");
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
  .catch((err) => console.log(err));

// mongoose.connection
// .once("open", ()=> console.log('Connected'))
// .on('("err', (error)=> {
//   console.log("errrrrrrrrrrr", error)
// });

// Parsing requests into JSON
//app.use(bodyParser.json());

//require router files
const hotSpotsRouter = require("./routes/hotspots");
const hotSpots = require("./models/hotSpot.model");

//use router files
app.use("/hotSpots", hotSpotsRouter);

//=======================================
//POPULATE DB WITH FROM THE JSON API
//ONLY POPULATES WHEN COLECTION IS EMPTY.

hotSpots.countDocuments({}, function (err, count) {
  if (count == 0) {
    console.log("Population array with api");
    var i;
    var aDocument = [];
    for (i = 0; i < converted.length; i++) {
      aDocument = [
        {
          name: converted[i].Name,
          boroughName: converted[i]["Borough Name"],
          type: converted[i].Type,
          zipCode: converted[i].Postcode,
          provider: converted[i].Provider,
          ssid: converted[i].SSID,
          locationType: converted[i].Location_T,
          location: converted[i].Location,
          latitude: converted[i].Latitude,
          longitudes: converted[i].Longitude,
        },
      ];
      hotSpots.collection.insertMany(aDocument, function (err, docs) {
        if (err) {
          return console.error(err);
        }
      });
    }
  } else {
    console.log(
      "OK, did not populate database with api because it already did previously or your collection is not empty."
    );
  }
});
//================================

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

//module.exports = app;
