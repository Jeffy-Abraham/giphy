import Tick from "../../assets/tick.png";
import DisplayPic from "../../components/displaypic-component/displaypic.component";
import GifGallery from "../../components/gif-gallery.component/gifsgallery.component";
import CarouselAlbum from "../../components/carousel-container/carousel-container.component";
import "./category.styles.css";
export default function CategoryPage({ imageArray, currentCategory, label }) {
  const { atrate, description, title, profileImage } = currentCategory;

  return (
    <div className="category-container">
      <div className="category-logo-container">
        <div>
          <DisplayPic imageLink={profileImage} alt='' />
        </div>
        <div
          style={{
            fontSize: "14px",
            marginTop: "30px",
            color: "lightgray",
            fontWeight: "400",
            width: "48%",
          }}
        >
          {description}
        </div>
        <small>Follow on</small>
      </div>
      <div
        className="category-title-container"
        style={{ marginLeft: "-180px" }}
      >
        <div>
          <h1
            style={{
              fontSize: "36px",
              color: "white",
              fontFamily: "Raleway",
              letterSpacing: "0.08rem",
            }}
          >
            {title}
          </h1>

          <div
            style={{
              color: "gray",
              fontWeight: "regular",
              marginTop: "10px",
              fontSize: "17px",
            }}
          >
            {atrate}
            <span style={{ marginLeft: "5px" }}>
              <img src={Tick} width="15px" alt=''/>
            </span>
          </div>

          <div>
            {label !== "userProfile" ? (
              <h2 style={{ color: "white" }}>All {title} </h2>
            ) : (
              <h2 style={{ color: "white" }}>Your favourite GIFS </h2>
            )}
          </div>
          <div>
            {label !== "userProfile" ? (
              <GifGallery images={imageArray} />
            ) : (
              <CarouselAlbum data={imageArray} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
