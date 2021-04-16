const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const signNewUser = async function (Username, Password, Email, fortuneCat) {


var encrypted=bcrypt.hashSync(Password,4)

  const user = new User({
    Username: Username,
    Password: encrypted,
    loggedinAt: "NEW USER",
    Email: Email,
    userDesc: "",
    favourites: [],
    fortuneCat: {
      imageLink: fortuneCat.imageLink,
      description: fortuneCat.description,
    },
  });

  const result = await user.save();
  var success = {
    status: "success",
    userDetails: result,
  };
  return success;
};

module.exports = {
  signNewUser,
};
