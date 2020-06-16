const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

//console.log("dog");
router.get("/",(req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const firstName = req.body.firstName;
  const newUser = new firsName({ firstName });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
