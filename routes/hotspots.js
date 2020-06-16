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

// router.put("/id",  (req, res) => {
//   const { id } = req.params;
//   const { name, type, address, zipCode } = req.body;
//   const updatedObj = {
//     name: name,
//     type: type,
//     address: address,
//     zipCode: zipCode,
//   };
//   try {
//     const hotspot =  hotspot.findByPk(id);
//     console.log(updatedObj);
//      hotspot.set(updatedObj);
//     const updatedhotspot =  hotspot.save();
//     console.log(updatedhotspot);
//     res.status(201).send(updatedhotspot);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
