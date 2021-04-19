import { connect } from "react-redux";
import CustomButton from "../../components/custom-button/custom-button.component";
import CategoryPage from "../categoryPage/category.page";

function UserProfile({ currentUser }) {
  const { fortuneCat } = currentUser;

  var currentCategory = {};

  currentCategory["atrate"] = currentUser.Email;
  currentCategory["description"] = currentUser.userDesc;
  currentCategory["title"] = currentUser.Username;
  currentUser["profileImage"] = fortuneCat.imageLink;

  var imageLink = currentUser.favourites;

  console.log(currentCategory);

  return (
    <div>
      <div onClick={() => localStorage.clear()}>
        <CustomButton>LOGOUT</CustomButton>
      </div>
      <CategoryPage
        imageArray={imageLink}
        currentCategory={currentCategory}
        label="userProfile"
      />
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});
export default connect(mapStateToProps, null)(UserProfile);
