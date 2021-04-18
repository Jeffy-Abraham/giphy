import "./description.style.css";
import { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { updateDescription } from "../../redux/users/user-action";
import { useHistory } from "react-router-dom";

function Description({ currentUser, updateDescription }) {
  const [formdata, setData] = useState({
    Description: "",
  });
  const handleChange = (e) => {
    setData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    updateDescription(formdata, currentUser._id);
  };
  let history = useHistory();
  if (currentUser.loggedinAt !== "NEW USER") {
    history.push("/profile");
  }

  return (
    <div>
      <input
        name="Description"
        type="text"
        className="input-description-box"
        value={formdata.Description}
        onChange={(e) => handleChange(e)}
      ></input>

      <CustomButton handleClick={handleSubmit}>Go to your profile</CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateDescription: (desc, userId) =>
    dispatch(updateDescription(desc, userId)),
});

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
