const express = require("express");
const mongoose = require("mongoose").mongoClient;
const router = express.Router();

const HotspotModel = mongoose.model('hotspotModel');

// Route to serve user

 router.get("/", async (req, res, next) => {

    const query = HotspotModel.find().
    Where('zipcode'.regec(req.value));
//     res.render('/zipcode', {retrievedData : router.get('data')});
    query.getFilter();
    
 });

// Route to handle adding a user
router.post("/", async (req, res, next) => {
    router.set('data',req.body.HotspotModel)
});

// Route to handle edit a user
router.put("/", async (req, res, next) => {



});

//Route to receive user delete hotstop request??

module.exports = router;
