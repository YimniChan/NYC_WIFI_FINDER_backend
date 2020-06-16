const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

console.log("dog");


//Get All user
router.get("/", (req, res) => {
   User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get a single based on email
router.get(`/find:email`, (req, res) => {

  const {email} = req.params;

  User.find({email})
   .then((users) => res.json(users))
   .catch((err) => res.status(400).json("Error: " + err));
});


//Add a new user
router.post("/", (req, res) => {
  
  const {firstName, lastName, email, password} = req.body;
  const newUser = new User({ firstName,lastName, email, password });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});



// Delete a user
router.delete("/:email", async (req, res, next) => {
  const { email } = req.params;

  try {

    User.findOne({email}).deleteOne().exec();
    res.json("User Deleted!");

  } catch (err) {
    next(err);
  }

});


module.exports = router;
