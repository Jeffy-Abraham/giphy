import { connect } from "react-redux";

import CategoryPage from "../../pages/categoryPage/category.page";
const imageArray = [
  [
    {
      link:
        "https://media1.giphy.com/media/kBezu43YVrgGuZZGL2/giphy.gif?cid=ecf05e47f0c3867359f14e757db72ec51aa53af505cb87c2&rid=giphy.gif&ct=g",
    },
    {
      link: "https://i.giphy.com/media/uqbm7TQHaUbDd9cXc3/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/O9S4unHvciYuY/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/VWwiOoSml2tAO4hckT/giphy.webp",
    },
    {
      link:
        "https://media1.giphy.com/media/kBezu43YVrgGuZZGL2/giphy.gif?cid=ecf05e47f0c3867359f14e757db72ec51aa53af505cb87c2&rid=giphy.gif&ct=g",
    },
  ],
  [
    {
      link: "https://i.giphy.com/media/uqbm7TQHaUbDd9cXc3/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/O9S4unHvciYuY/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/VWwiOoSml2tAO4hckT/giphy.webp",
    },
    {
      link:
        "https://media1.giphy.com/media/kBezu43YVrgGuZZGL2/giphy.gif?cid=ecf05e47f0c3867359f14e757db72ec51aa53af505cb87c2&rid=giphy.gif&ct=g",
    },
  ],
  [
    {
      link: "https://i.giphy.com/media/uqbm7TQHaUbDd9cXc3/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/O9S4unHvciYuY/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/VWwiOoSml2tAO4hckT/giphy.webp",
    },
    {
      link:
        "https://media1.giphy.com/media/kBezu43YVrgGuZZGL2/giphy.gif?cid=ecf05e47f0c3867359f14e757db72ec51aa53af505cb87c2&rid=giphy.gif&ct=g",
    },
  ],
];

function Profile({ currentUser }) {
  const {
    Username,
    favourites,
    loggedinAt,
    userDesc,
    fortuneCat,
    Email,
  } = currentUser;

  return (
    <div>
      <CategoryPage
        memberShip={fortuneCat.description}
        profileImage={fortuneCat.imageLink}
        description={userDesc}
        title={Username}
        atrate={Email}
        label="profile"
        imageArray={imageArray}
        label="Your favourite gifs"
        loggedinAt={loggedinAt}
      />
    </div>
  );
}
const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps, null)(Profile);
