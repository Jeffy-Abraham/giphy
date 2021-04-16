const express = require("express");
const Joi = require("joi");
const mongoose = require("mongoose");
const sendData = require("./sendData/sendData");
const signNewUser = sendData.signNewUser;
//mongoose models

//connection to the database
mongoose
  .connect(
    "mongodb+srv://jeffy:ur13it040@cluster0.p0ywc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then((success) => {
    console.log("Connection Established with Database");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

//Get the data from sign up

app.use(express.json());
app.listen(5000, () => {
  console.log("listen at 5000");
});

app.post("/signUp", (req, res) => {
  const data = req.body;
  //validate username and password
  const schema = Joi.object({
    Username: Joi.string().min(3).max(9).required(),
    Password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    Email: Joi.string().email(),
  });

  schema
    .validateAsync(data)
    .then((success) => {
      const fortuneCat = ImageLink[Math.floor(Math.random() * 8)];

      var result = signNewUser(
        req.body.Username,
        req.body.Password,
        req.body.Email,
        fortuneCat
      );
      res.send({
        message: "User sucessfully signed up",
        UserId:result
      });
    })
    .catch((err) => {
      res.send({
        message: err.message,
      });
    });
});

var fortuneCats = [
  {
    imageLink:
      "https://64.media.tumblr.com/f792d7c5ad8b7b101d55a98464ed6209/tumblr_inline_mq1erdXdP31qz4rgp.jpg",
    description: "Black Cat",
  },
  {
    imageLink:
      "https://64.media.tumblr.com/e7d669d63f8ff55bbcc74481e25fba7d/tumblr_inline_mq1dykFq321qz4rgp.jpg",
    description: "White Cat",
  },
  {
    imageLink:
      "https://64.media.tumblr.com/e25f6c1889fb0accb1460c98f0d8a875/tumblr_inline_mq2w6elqdn1qz4rgp.jpg",
    description: "Yellow Cat",
  },
  {
    imageLink:
      "https://64.media.tumblr.com/c9fe4e0801ae2c73fd775930b6296175/tumblr_inline_mq2w6rr7GG1qz4rgp.jpg",
    description: "Red Cat",
  },
  {
    imageLink:
      "https://64.media.tumblr.com/adac2c175cb82dc12b876c9eda3d44cb/tumblr_inline_mq2w7q752T1qz4rgp.jpg",
    description: "Purple Cat",
  },
  {
    imageLink:
      "https://64.media.tumblr.com/63eded1d1dfe2158c326bdcba720991f/tumblr_inline_mq2w83G6bx1qz4rgp.jpg",
    description: "Green Cat",
  },
  {
    imageLink:
      "https://64.media.tumblr.com/3efc27361739aaed0503e6d41f8c5768/tumblr_inline_mq2w8gWGzB1qz4rgp.jpg",
    description: "Pink Cat",
  },
  {
    imageLink:
      "https://64.media.tumblr.com/6a88ddb20813c0af9596ced4e408c5e4/tumblr_inline_mq2w78EgDY1qz4rgp.jpg",
    description: "Cream Cat",
  },
];
