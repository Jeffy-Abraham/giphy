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



const updateDescription=async function (userDesc,userId) {
  const user=await User.findById(userId)
  if(!user)
  {
    var failed={status:'failed'}
    console.log(failed)
    return failed
  }
  var  a =new Date()
  
  user.set({
    userDesc:userDesc,
    loggedinAt:a.getDate().toString()
  })
  const result=await user.save()
  var success = {
    status: "success",
    userDetails: result,
  };
  return success
  
}

module.exports = {
  signNewUser,
  updateDescription
};


