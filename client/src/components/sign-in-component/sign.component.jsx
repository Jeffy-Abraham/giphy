import { useState } from "react";
import CustomInputBox from "../custom-input-box/custom-input-box";
import CustomButton from "../custom-button/custom-button.component";
import { signUpUser } from "../../redux/users/user-action";
import {connect} from 'react-redux'

function Sigin({  signUpUser,error,isSettingUp }) {
 
  const [formValue, setdata] = useState({
    Username: "",
    Password: "",
    Email: "",
  });

  const handleChange = (e) => {
    setdata({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    signUpUser(formValue);
    setdata({ Username: "", Password: "", Email: "" });
  };

  {//can use hoc to prevent writing the logic again
    return (
      <div style={{ marginTop: "20px", color: "white", fontWeight: "600"  }}>
        {error? <span>{error}</span>:<span></span>}
       
        <div style={{ display: "flex" }}>
          <div>
            <CustomInputBox
              label="Username or User Id"
              type="text"
              name="Username"
              handleChange={(e) => handleChange(e)}
              value={formValue.Username}
            />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <CustomInputBox
              label="Email"
              type="email"
              name="Email"
              onChange={(e) => handleChange(e)}
              value={formValue.Email}
              handleChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <CustomInputBox
          label="Password"
          type="password"
          name="Password"
          onChange={(e) => handleChange(e)}
          value={formValue.Password}
          handleChange={(e) => handleChange(e)}
        />

        <CustomButton handleClick={handleSubmit}>Create Account</CustomButton>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (data) => dispatch(signUpUser(data)),
});

const mapStateToProps = ({ user:{error,isSettingUp} }) => ({
  error,
  isSettingUp
});

export default connect(mapStateToProps, mapDispatchToProps)(Sigin);
