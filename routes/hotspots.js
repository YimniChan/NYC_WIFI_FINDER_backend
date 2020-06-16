const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Registration = mongoose.model("hotspotModel");

// Route to serve user
router.get("/", async (req, res, next) => {});

// Route to handle adding a user
router.post("/", async (req, res, next) => {});

// Route to handle edit a user
router.put("/", async (req, res, next) => {});

//Route to receive user delete hotstop request??

module.exports = router;
