const express = require("express");
const router = express.Router();
const hotSpot = require("../models/hotSpot.model");

console.log("cat");

//find all current hotSpot locations
router.get("/", (req, res) => {
  //   hotSpot
  //     // .find()
  //     // .then((hotSpots) => res.json(hotSpots))
  //     // .catch((err) => res.status(400).json("Error: " + err));
  res.send({ toy: 213 });
});

router.route("/add").post((req, res) => {
  const hotSpotName = req.body.name;
  const hotSpotAddress = req.body.address;
  const hotSpotZipcode = Number(req.body.zipCode);

  const newHotSpot = new hotSpot({
    hotSpotName,
    hotSpotAddress,
    hotSpotZipcode,
  });
});

module.exports = router;