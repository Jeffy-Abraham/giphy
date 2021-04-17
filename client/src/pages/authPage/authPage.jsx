import Sigin from "../../components/sign-in-component/sign.component";
import Background from "../../assets/back.gif";
import "./authPage.style.css";
export default function AuthPage() {
  return (
    <div className="auth-sigup-container">
      <div className="image-background">
        <img src={Background} height="100%" width="90%" />
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
          style={{ fontFamily: "sans-serif", color: "pink", fontSize: "19px" }}
        >
          Welcome to the wolrd of gifs
        </div>
        <div style={{ color: "white", fontWeight: "300", marginTop: "40px" }}>
          Please create an account with you username and password to continue
        </div>

        <Sigin />
      </div>
    </div>
  );
}
