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

// change to match the model
router.post("/add",(req, res) => {

  const hotSpotName = req.body.ssid;
  const hotSpotProvider = req.body.provider
  const hotSpotLocation = req.body.location;
  const hotSpotCity= req.body.city;
  const hotSpotZipcode = Number(req.body.zipCode);
  const hotSpotLatitude=req.body.latitude;
  const hotSpotLongitudes=req.body.longitudes;
  const hotSpotType = req.body.type;
  const hotSpotlocationType = req.body.boroughName;

  const newHotSpot = new hotSpot({
    hotSpotName,
    hotSpotProvider,
    hotSpotLocation,
    hotSpotCity,
    hotSpotZipcode,
    hotSpotLatitude,
    hotSpotLongitudes,
    hotSpotType,
    hotSpotlocationType,
  });

  res.send(newHotSpot);
});

router.delete("/:id",  (req, res, next) => {
  const { id } = req.params;

  hotSpot
  .findByPk(id)
  .then((hotSpots) => res.json(hotSpots).distroy())
  .catch((err) => res.status(400).json("Error: " + err));

});

module.exports = router;