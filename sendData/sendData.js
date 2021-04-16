const User = require("../models/user.model");
const signNewUser = async function (Username, Password,Email, fortuneCat) {
  const user = new User({
    Username: Username,
    Password: Password,
    loggedinAt: "NEW USER",
    Email:Email,
    userDesc:'',
    favourites: [],
    fortuneCat:{imageLink:fortuneCat.imageLink,description:fortuneCat.description}
  });

  const result = await user.save();
  console.log(result);
  return result._id
};

module.exports = {
  signNewUser,
};
