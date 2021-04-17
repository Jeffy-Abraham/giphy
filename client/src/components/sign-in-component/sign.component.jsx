import { useState } from "react";
import axios from "axios";
import CustomInputBox from "../custom-input-box/custom-input-box";
import CustomButton from "../custom-button/custom-button.component";

function Sigin() {
  const [formValue, setdata] = useState({
    Username: "",
    Password: "",
    Email: "",
  });

  const handleChange = (e) => {
    setdata({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      formValue.Username.length == 0 ||
      formValue.Password.length === 0 ||
      formValue.Email.length === 0
    ) {
      alert("Please enter the Username and Password");
    }

    axios
      .post("/signUp", formValue)
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err.response);
      });
    setdata({ Username: "", Password: "", Email: "" });
  };

  {
    return (
      <div style={{marginTop:'20px',color:'white',fontWeight:'600'}}>
        <span>Seems like the </span>
        <div style={{display:'flex',}}>
          <div>
        <CustomInputBox label='Username or User Id'
          type="text"
          name="Username"
          handleChange={(e) => handleChange(e)}
          value={formValue.Username}
        />
        </div>
        <div style={{marginLeft:'20px'}}>
         <CustomInputBox label='Email'
          type="email"
          name="Email"
          
          onChange={(e) => handleChange(e)}
          value={formValue.Email}
          handleChange={(e) => handleChange(e)}
      
        />
       </div>
        </div>
        <CustomInputBox label='Password'
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
export default Sigin;
