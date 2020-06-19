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
 res.send({ toy: 213 });
});

//change to match the model
// router.post("/add",(req, res) => {
//   const hotSpotName = req.body.ssid;
//   const hotSpotProvider = req.body.provider
//   const hotSpotAddress = req.body.borough;
//   const hotSpotZipcode = Number(req.body.zipCode);
//   const hotSpotWifiType = req.body.boroughName;
//   const hotSpotType = req.body.type;

  // const hotSpotBorough = req.body.borough;
  // const hotSpotType = req.body.type;
  // const hotSpotProvider = req.body.provider;
  // const hotSpotNeighbor = req.body.NeighborhoodTA;

//   const newHotSpot = new hotSpot({
//     hotSpotName,
//     hotSpotProvider,
//     hotSpotAddress,
//     hotSpotZipcode,
//     hotSpotWifiType,
//     hotSpotType,
//   });

//   res.send(newHotSpot);
// });

module.exports = router;