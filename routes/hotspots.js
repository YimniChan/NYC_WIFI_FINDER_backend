const express = require("express");
const router = express.Router();
const hotSpot = require("../models/hotSpot.model");
const cors = require("cors");

//GET all location
router.get("/", (req, res) => {
  // hotSpot
  //   .find()
  //   .then((hotSpots) => res.json(hotSpots))
  //   .catch((err) => res.status(400).json("Error: " + err));
  res.send({
    cookie: "monster",
  });
});

//GET borough location
router.get("/closeBy:zipCode", (req, res) => {
  const { zipCode } = req.params;
  console.log(zipCode);

  hotSpot
    .find({ zipCode })
    .then((hotSpots) => res.json(hotSpots))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET all wifi in Manhattan
router.get("/manhattan", (req, res) => {
  const boroughName = "Manhattan";

  hotSpot
    .find({ boroughName })
    .then((hotSpots) => res.json(hotSpots))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET all wifi in Queens
router.get("/queens", (req, res) => {
  const boroughName = "Queens";

  hotSpot
    .find({ boroughName })
    .then((hotSpots) => res.json(hotSpots))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Get all wifi in Staten Island
router.get("/statenisland", (req, res) => {
  const boroughName = "Staten Island";

  hotSpot
    .find({ boroughName })
    .then((hotSpots) => res.json(hotSpots))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Get all brooklyn in Brookyln
router.get("/brooklyn", (req, res) => {
  const boroughName = "Brooklyn";

  hotSpot
    .find({ boroughName })
    .then((hotSpots) => res.json(hotSpots))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Get all wifi in Bronx
router.get("/bronx", (req, res) => {
  const boroughName = "Bronx";

  hotSpot
    .find({ boroughName })
    .then((hotSpots) => res.json(hotSpots))
    .catch((err) => res.status(400).json("Error: " + err));
});

//ADD location
router.post("/add", (req, res) => {
  const {
    name,
    boroughName,
    zipCode,
    type,
    locationType,
    location,
    provider,
    ssid,
    latitude,
    longitudes,
  } = req.body;

  //Creates new hotspot document in the collection
  const newHotSpot = new hotSpot({
    name,
    boroughName,
    zipCode,
    type,
    locationType,
    location,
    provider,
    ssid,
    latitude,
    longitudes,
  });

  newHotSpot
    .save()
    .then(() => res.json(newHotSpot))
    .catch((err) => res.statusMessage(400).json("Error: " + err));
});

//DELETE location based on the latitude
router.delete("/delete", (req, res) => {
  const { latitude } = req.body;

  try {
    hotSpot.findOne({ latitude }).deleteOne().exec();
    res.json("Deleted location");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//EDIT location information based on the latitude
router.put("/edit", async (req, res) => {
  const {
    name,
    boroughName,
    zipCode,
    latitude,
    longtiudes,
    type,
    provider,
    location,
    locationType,
    ssid,
  } = req.body;

  try {
    let doc = await hotSpot.findOne({ latitude });
    doc.name = name;
    doc.boroughName = boroughName;
    doc.zipCode = zipCode;
    doc.type = type;
    doc.locationType = locationType;
    doc.location = location;
    doc.provider = provider;
    doc.ssid = ssid;
    doc.latitude = latitude;
    doc.longtiudes = longtiudes;
    await doc.save();
    res.json(doc);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;
