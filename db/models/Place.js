import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  mapURL: String,
  description: String,
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema); // detects automatically that it is used for

export default Place;
