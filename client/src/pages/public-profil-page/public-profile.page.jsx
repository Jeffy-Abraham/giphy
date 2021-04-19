//get the current param and fetch the public user detail
//should have its own state
//Giphy api provides two types of gif....the gifs with a user profile and one with out user profile
//conditionally render those
import { connect } from "react-redux";
import { useEffect } from "react";
import Tick from "../../assets/tick.png";
import { findbyIdGif } from "../../redux/gifsCategory/category-actions";
import "./public-profile.css";
import DisplayPic from "../../components/displaypic-component/displaypic.component";
import CurrentGif from "../../components/current-gif.component/current-gif.component";

const PublicProfiles = ({ currentPublic, match, findbyIdGif }) => {
  useEffect(() => {
    findbyIdGif(match.params.id);
  }, []);

  return (
    <div style={{ color: "white", fontSize: "44px" }}>
      <div>
        {currentPublic.user === undefined ? (
          <div style={{ width: "60%", margin: "auto" }}></div>
        ) : (
          <div style={{ marginTop: "10px" }}>
            <img
              src={currentPublic.user.banner_url}
              width="100%"
              height="120px"
            ></img>
            <div className="profile-container">
              <div className="flex-container-one">
                <div>
                  <DisplayPic imageLink={currentPublic.user.avatar_url} />
                </div>
                <div style={{ width: "90%" }}>
                  <div className="counting-number">
                    <div>
                      <div>1 K</div>
                      <div>GIF Uploads</div>
                    </div>
                    <div style={{ paddingLeft: "50px" }}>
                      <div>32 K</div>
                      <div>GIF Views</div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      marginTop: "30px",
                      color: "lightgray",
                      fontWeight: "400",
                      width: "100%",
                    }}
                  >
                    {currentPublic.user.description}
                  </div>
                </div>
              </div>

              <div
                className="flex-container-two"
                style={{ marginLeft: "-0px", marginTop: "-40px" }}
              >
                <h6
                  style={{
                    fontSize: "36px",
                    color: "white",
                    fontFamily: "Raleway",
                    letterSpacing: "0.08rem",
                  }}
                >
                  {currentPublic.user.display_name}
                </h6>
                <div
                  style={{
                    color: "gray",
                    fontWeight: "regular",
                    marginBottom: "50px",
                    marginTop: "-80px",
                    fontSize: "17px",
                  }}
                >
                  @ {currentPublic.user.username}
                  <span style={{ marginLeft: "5px" }}>
                    <img src={Tick} width="15px" />
                  </span>
                </div>

                <div>
                  <CurrentGif
                    image={currentPublic.images.fixed_height.url}
                    text={currentPublic.title}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ category: { currentPublic } }) => ({
  currentPublic,
});
const mapDispatchToProps = (dispatch) => ({
  findbyIdGif: (id) => dispatch(findbyIdGif(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicProfiles);
