const express = require("express");
const router = express.Router();
const hotSpot = require("../models/hotSpot.model");


//Find location
router.get("/", (req, res) => {
    hotSpot
      .find()
      .then((hotSpots) => res.json(hotSpots))
      .catch((err) => res.status(400).json("Error: " + err));
});



//Add location
router.post("/add",(req, res) => {

  const {name, location, city, 
        boroughName, zipcode, latitude,
        longtiudes, type, provider,
        ssid} = req.body;
 
  const newHotSpot = new hotSpot({
  name,
  location,
  city,
  boroughName,
  zipcode,
  latitude,
  longtiudes,
  type,
  provider,
  ssid
  });

  newHotSpot
      .save()
      .then(() => res.json(newHotSpot))
      .catch((err) => res.statusMessage(400).json("Error: " +err))

})


//Delete location based on the latitude
router.delete("/delete", (req, res) =>{

          const{latitude} = req.body;

          try{
            hotSpot.findOne({latitude}).deleteOne().exec();
            res.json("Deleted location")
          }
          catch(err){
            res.status(400).json("Error: " + err);
          }
})



module.exports = router;