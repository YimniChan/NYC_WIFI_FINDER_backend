const express = require("express");
const router = express.Router();
const hotSpot = require("../models/hotSpot.model");

console.log("cat");

//find all current hotSpot locations
router.get("/", (req, res) => {
    hotSpot
      .find()
      .then((hotSpots) => res.json(hotSpots))
      .catch((err) => res.status(400).json("Error: " + err));
//  res.send({ toy: 213 });
});


router.post("/add",(req, res) => {
  const hotSpotName = req.body.Name;
  const hotSpotLocation = req.body.Location;
  const hotSpotCity = req.body.City;
  const hotSpotSsid = req.body.SSID;
  const hotSpotZipcode = req.body.ZipCode;
  const hotSpotLatitude = req.body.latitude;
  const hotSpotLongitudes = req.body.longitudes; 
  // const hotSpotBorough = req.body.borough;
  // const hotSpotType = req.body.type;
  // const hotSpotProvider = req.body.provider;
  // const hotSpotBoroughName = req.body.boroughName;
  // const hotSpotNeighbor = req.body.NeighborhoodTA;

  const newHotSpot = new hotSpot({
   hotSpotName,
   hotSpotLocation,
   hotSpotCity,
   hotSpotSsid,
   hotSpotZipcode,
   hotSpotLatitude,
   hotSpotLongitudes,
  });
  newHotSpot
      .save()
      .then(() => res.json(newHotSpot)
      .catch((err) => res.statusMessage(400).json("Error: " +err));

})

module.exports = router;