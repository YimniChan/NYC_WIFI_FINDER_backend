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


//GET borough location
router.get("/closeBy", (req, res) => {

    const {boroughName} = req.body;

  hotSpot
    .find({boroughName})
    .then((hotSpots) => res.json(hotSpots))
    .catch((err) => res.status(400).json("Error: " + err));
});




//ADD location
router.post("/add",(req, res) => {

          const {name, boroughName, zipCode,
                type, locationType,provider,ssid,
                latitude,longitudes
                } = req.body;
        
      //Creates new hotspot document in the collection
          const newHotSpot = new hotSpot({
            name, 
            boroughName,
            zipCode,
            type, 
            locationType,
            provider, 
            ssid,
            latitude,
            longitudes            
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

        const {name, 
          boroughName, zipCode ,latitude,
          longtiudes, type, provider,
          locationType,ssid} = req.body;

          try{
              let doc = await hotSpot.findOne({latitude});
              doc.name = name;
              doc.boroughName = boroughName;
              doc.zipCode = zipCode;
              doc.type = type;
              doc.locationType = locationType;
              doc.provider = provider;
              doc.ssid = ssid;
              doc.latitude = latitude;
              doc.longtiudes = longtiudes;
              await doc.save();
              res.json(doc);
          }
          catch(err){
            res.status(400).json("Error: " + err);
          }
      
})




module.exports = router;