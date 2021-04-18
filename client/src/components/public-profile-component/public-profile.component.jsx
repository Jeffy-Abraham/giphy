//get the current param and fetch the public user detail
//should have its own state
import { connect } from "react-redux";
import { useEffect } from "react";
import DisplayPic from "../displaypic-component/displaypic.component";
import {findbyIdGif} from '../../redux/gifsCategory/category-actions'
const PublicProfiles = ({match,findbyIdGif}) => {
    
    useEffect(() => {
        findbyIdGif(match.params.id)
     
      });
    


  return (
    <div>
      <div>
        <img src="k" />
      </div>
      <DisplayPic />
      <div>
        <span>486</span>
        <span>109.5M</span>
      </div>
      <div>
        <span>Descriptuion</span>
      </div>

      <div>
        <div>insta url</div>
      </div>
      <div>Username</div>
      <div>displayname</div>
      <div>verified tick</div>
      <div>choosenimage</div>
    </div>
  );
};
const mapStateToProps = ({ category: { trendinGifs } }) => ({
  trendinGifs,
});
const mapDispatchToProps = (dispatch) => ({
    findbyIdGif: (id) => dispatch( findbyIdGif(id)),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(PublicProfiles);
