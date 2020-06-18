const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotSpotSchema = new Schema({
  borough:{ type: String, required: true }, 
  type: { type: String, required: true }, 
  provider: { type: String, required: true }, 
  name: { type: String, required: true },
  location:{ type: String, required: true }, 
  city: { type: String, required: true }, 
  ssid: { type: String, required: true }, 
  boroughName: { type: String, required: true },
  NeighborhoodTA:{ type: String, required: true }, 
  zipcode: { type: Number, required: true }, 
  latitude: { type: Float32Array },
  longitudes: { type: Float32Array },
  // name: { type: String, required: true, unique: true },
  // address: { type: String, required: true },
  // type:{type: String, }
  /*  
  zipCode 5 digit limit add from front end
  location: {
    streetAddress: { type: String, required: true, unique: true},
    city: { type: String, required: true},
    state: { type: String, required: true},
    zipCode: { type: Number, required: true}
  },

  */
});

const hotSpots = mongoose.model("hotSpot", hotSpotSchema);

module.exports = hotSpots;
