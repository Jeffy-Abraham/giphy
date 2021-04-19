import { useHistory } from "react-router";
import "./login-status.style.css";

const LoginStatus = ({ currentUser }) => {
  let history = useHistory();
  return (
    <div onClick={() => history.push("/profile")}>
      <div className="flex-login-status">
        <div style={{ marginTop: "4px" }}>
          <img
            src={currentUser.fortuneCat.imageLink}
            height="32px"
            width="32px"
            alt='j'
          />
        </div>
        <div style={{ marginRight: "15px" }}>{currentUser.Username}</div>
      </div>
    </div>
  );
};

export default LoginStatus;
