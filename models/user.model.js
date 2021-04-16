const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  Email: String,
  loggedinAt: String,
  favourites: [String],
  userDesc:String,
  fortuneCat:{imageLink:String,description:String}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
