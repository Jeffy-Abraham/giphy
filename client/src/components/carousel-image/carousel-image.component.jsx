import "./carousel-image.styles.css";
import Favourites from "../../assets/favourites.png";
export default function CarouselImage({ imageLink,Width,height }) {
  return (
    <div className="carousel-Image">
      <div style={{ position: "relative" }}>
        <img src={imageLink} height={height} width={Width}/>
        <div className="favourites-button">
          <img src={Favourites} height="35px"  />
        </div>
      </div>
    </div>
  );
}
