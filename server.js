const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(5001, function() {
    console.log('listening on 5001')
  })