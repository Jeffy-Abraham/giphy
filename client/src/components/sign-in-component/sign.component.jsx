import { useState } from "react";
import axios from 'axios'
import CustomInputBox from "../custom-input-box/custom-input-box";


function Sigin() {
  const [formValue, setdata] = useState({
    Username: "",
    Password: "",
  });

  const handleChange = (e) => {
    setdata({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {

    if(formValue.Username.length==0 ||formValue.Password.length===0)
    {
      alert('Please enter the Username and Password')
    }

   axios.post('/signUp',formValue).then(success=>
    {
      console.log(success)
    }).catch(err=>
      {
        console.log(err)
      })
   setdata({Username:'',Password:''})

    
  };

  {
    return (
      <div>
        <CustomInputBox
          type="text"
          name="Username"
          handleChange={(e) => handleChange(e)}
          value={formValue.Username}
        />
        <CustomInputBox
          type="password"
          name="Password"
          onChange={(e) => handleChange(e)}
          value={formValue.Password}
          handleChange={(e) => handleChange(e)}
          style={{ marginTop: "20px" }}
        />
        <button onClick={handleSubmit}>SUMIERF</button>
      </div>
    );
  }
}
export default Sigin;
