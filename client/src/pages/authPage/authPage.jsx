import Sigin from "../../components/sign-in-component/sign.component";
import Background from "../../assets/back.gif";
import "./authPage.style.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Spinner from "react-loader-spinner";
function AuthPage({ isSettingUp, currentUser }) {
   let history=useHistory()
  
   if(currentUser!=false)
   {
       if(currentUser.loggedinAt=="NEW USER")
       {
        history.push("/Signup/newUser");
       }
   }
  return (
    <div>
    
      <div className="auth-sigup-container">
        <div className="image-background">
          <img src={Background} height="95%" width="90%" />
        </div>

        <div className="auth-signup-container-1">
          <h1
            style={{
              fontFamily: "Billabong",
              fontSize: "80px",
              color: "white",
              letterSpacing: "0.3rem",
            }}
          >
            Giphy
          </h1>
          <div
            style={{
              fontFamily: "sans-serif",
              color: "pink",
              fontSize: "19px",
            }}
          >
            Welcome to the world of gifs
          </div>
          <div style={{ color: "white", fontWeight: "300", marginTop: "40px" }}>
            Please create an account with you username and password to continue
          </div>
          {isSettingUp ? (
            <div style={{ opacity: "0.1", position: "relative" }}>
              <Spinner
                className="spinner-container"
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
              <Sigin />
            </div>
          ) : (
            <div>
              <Sigin />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ user: { isSettingUp, currentUser } }) => ({
  isSettingUp,
  currentUser,
});

export default connect(mapStateToProps, null)(AuthPage);
