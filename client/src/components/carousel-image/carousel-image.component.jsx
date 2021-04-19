/*Render individual pictures, also has an onClick listner attahced such that it takes user to the public profile */
/*but if reload then it might not work, As giphi api dosen't provide users ID*/
import "./carousel-image.styles.css";
import Favourites from "../../assets/favourites.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setFavour } from "../../redux/users/user-action";
function CarouselImage({
  imageLink,
  Width,
  height,
  user,
  id,
  title,
  otherProps,
  setFavour,
  label,
  show
}) {
  let history = useHistory();
  console.log(id)
  const addToFavour = (e, favGif) => {
    e.stopPropagation();
    setFavour(favGif);
    alert("Added to your favourite list");
  };
  
  return (

    <div
      className="carousel-Image"
       onClick={label!=='false'?() => history.push(`/publicProfile/${id}`):''}
    >
     
      <div style={{ position: "relative" }}>
        <img src={imageLink} height={height} width={Width} alt='s'/>
      </div>
      
      <div className="carousel-image-title">{title}</div>
      <div
        className="favourites-button"
        onClick={(e) => addToFavour(e, otherProps)}
      >
        <img src={Favourites} height="22px" alt='aa' />
        
      </div>
    
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setFavour: (data) => dispatch(setFavour(data)),
});
export default connect(null, mapDispatchToProps)(CarouselImage);
