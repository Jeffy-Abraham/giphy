//get the current param and fetch the public user detail
//should have its own state
//Giphy api provides two types of gif....the gifs with a user profile and one with out user profile
//conditionally render those
import { connect } from "react-redux";
import { useEffect } from "react";
import { findbyIdGif } from "../../redux/gifsCategory/category-actions";


const PublicProfiles = ({ currentPublic, match, findbyIdGif }) => {

  useEffect(() => {
    findbyIdGif(match.params.id);
  }, []);

  return (
    <div style={{ color: "white", fontSize: "44px" }}>
      
        <div>
          {currentPublic.user ===undefined || !currentPublic.hasOwnProperty('user') ? <div>NOPE</div> : 
          
          
          
          
          
          
          
          <div>{console.log(currentPublic)}</div>}

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
