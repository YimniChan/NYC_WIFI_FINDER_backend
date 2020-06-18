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

router.post("/add",(req, res) => {
  const hotSpotName = req.body.name;
  const hotSpotProvider = req.body.Provider
  const hotSpotAddress = req.body.address;
  const hotSpotZipcode = Number(req.body.zipCode);
  const hotSpotWifiType = req.body.wifitype;
  const hotSpotType = req.body.type;
  
  const newHotSpot = new hotSpot({
    hotSpotName,
    hotSpotProvider,
    hotSpotAddress,
    hotSpotZipcode,
    hotSpotWifiType,
    hotSpotType,
  });
});

// SSID: TransitWirelessWiFi
// Provider: Transit Wireless
// Borough: Brooklyn
// Wifi-Session: Free
// Location-Type: Subway Station


module.exports = router;