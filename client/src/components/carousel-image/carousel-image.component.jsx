/*Render individual pictures, also has an onClick listner attahced such that it takes user to the public profile */
/*but if reload then it might not work, As giphi api dosen't provide users ID*/
import "./carousel-image.styles.css";
import Favourites from "../../assets/favourites.png";
import { useHistory } from "react-router-dom";
export default function CarouselImage({
  imageLink,
  Width,
  height,
  user,
  id,
  title,
}) {
  let history = useHistory();
  console.log(id);
  return (
    <div
      className="carousel-Image"
      onClick={() => history.push(`/publicProfile/${id}`)}
    >
      <div style={{ position: "relative" }}>
        <img src={imageLink} height={height} width={Width} />
      </div>
      <div className="carousel-image-title">{title}</div>
      <div className="favourites-button">
        <img src={Favourites} height="35px" />
      </div>
    </div>
  );
}
