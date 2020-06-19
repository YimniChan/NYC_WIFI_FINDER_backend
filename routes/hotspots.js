const express = require("express");
const router = express.Router();
const hotSpot = require("../models/hotSpot.model");


//GET all location
router.get("/", (req, res) => {
        hotSpot
          .find()
          .then((hotSpots) => res.json(hotSpots))
          .catch((err) => res.status(400).json("Error: " + err));
});



//ADD location
router.post("/add",(req, res) => {

          const {name, location, city, 
                boroughName, zipcode, latitude,
                longtiudes, type, provider,
                ssid} = req.body;
        
      //Creates new hotspot document in the collection
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


//DELETE location based on the latitude
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


//EDIT location information based on the latitude
router.put("/edit", async (req, res) => {

        const {name, location, city, 
          boroughName, zipcode, latitude,
          longtiudes, type, provider,
          ssid} = req.body;

          try{
              let doc = await hotSpot.findOne({latitude});
              doc.name = name;
              doc.location = location;
              doc.city = city;
              doc.boroughName = boroughName;
              doc.zipcode = zipcode;
              doc.latitude = latitude;
              doc.longtiudes = longtiudes;
              doc.type = type;
              doc.provider = provider;
              doc.ssid = ssid;

              await doc.save();
              res.json(doc);
          }
          catch(err){
            res.status(400).json("Error: " + err);
          }
      
})




module.exports = router;