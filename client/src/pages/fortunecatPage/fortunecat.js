import React from "react";
import "./fortunecat.style.css";
import { TimelineMax } from "gsap/all";
import { connect } from "react-redux";

import loading from "../../assets/loading.gif";
import Description from "../../components/description-form/description.component";

class FortuneCat extends React.Component {
  constructor() {
    super();
    this.catProphet = null;
    this.cat = null;
    this.welcomeMessage = null;
    this.newUserContainer = null;
    this.welcomeMessage2 = null;
    // reference to the animation
    this.myTween = null;
  }
    

  componentDidMount() {
    var t1 = new TimelineMax({ delay: 0.4, repeat: 0 });
    this.myTween = t1
      .from(this.welcomeMessage, 0.3, {
        marginLeft: 60,
        opacity: 0,
      })
      .from(this.catProphet, 1, { display: "none", repeat: 0 }, 16)
      .from(this.cat, 1, { display: "none", repeat: 0 }, 16)
      .from(this.welcomeMessage2, 1, { left: 200, opacity: 0, repeat: 0 }, 1)
      .to(
        this.welcomeMessage,
        2,
        {
          opacity: 0,
          display: "none",
        },
        6
      )
      .to(
        this.welcomeMessage2,
        2,
        {
          opacity: 0,
          display: "none",
        },
        6
      )
      .to(
        this.catProphet,
        0.4,
        {
          opacity: 0.9,
          display: "block",
          scaleX: 1.4,
          scaleY: 1.3,
        },
        8
      )
      .to(
        this.cat,
        6,
        {
          opacity: 0.9,
          display: "block",
        },
        8
      );
  }

  render() {
   
  
    const { currentUser } = this.props;

    return (
      <div className="newuser-container">
        <div className="welcome-texts">
          <div
            ref={(div) => (this.welcomeMessage = div)}
            className="welcome-text-one"
          >
            Hey !{" "}
            <span style={{ color: "rgb(6, 2, 32)", fontSize: "36px" }}>
              {currentUser.Username}
            </span>
          </div>
          <div
            className="welcome-text-two"
            ref={(div) => {
              this.welcomeMessage2 = div;
            }}
          >
            why don't you tell us a bit about yourself Meanwhile, we will get
            you a fortune cat
            <div style={{ marginTop: "30px" }}>
              <img src={loading} width="250px" />
            </div>
          </div>
          <div
            className="cat-prophet"
            ref={(div) => {
              this.catProphet = div;
            }}
          >
            The Cat prophet choose !
          </div>
          <div
            className="given-cat"
            ref={(div) => {
              this.cat = div;
            }}
          >
            <div>The {currentUser.fortuneCat.description}</div>
            <div>
              <img
                width="220px"
                height="250px"
                src={currentUser.fortuneCat.imageLink}
              />
            </div>
            <div
              style={{ color: "black", fontSize: "22px", marginTop: "20px" }}
            >
              Black protects a household from illness
            </div>
          </div>
        </div>
        <div style={{marginTop:'90px' ,marginRight:'10px'}}>
        <Description/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(FortuneCat);
