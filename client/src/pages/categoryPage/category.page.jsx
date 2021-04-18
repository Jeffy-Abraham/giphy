import CategoryGallery from "../../components/category-grid-component/category.component";
import DisplayPic from "../../components/displaypic-component/displaypic.component";
import GifGallery from "../../components/gif-gallery.component/gifsgallery.component";
import SearchBar from "../../components/search-bar-component/searchbar.component";
import "./category.styles.css";
export default function CategoryPage({
  profileImage,
  memberShip,
  description,
  title,
  atrate,
  label,
  imageArray,
  loggedinAt
}) {
  return (
    <div className="category-container">
      <div className="category-logo-container">
        <DisplayPic imageLink={profileImage} />
        <div style={{ color: "gray", marginTop: "20px",fontSize:'18px' }}>
         {description}
        </div>
        <div style={{ marginTop: "90px" }}>
          <SearchBar Width="60%" Height="40px" />
        </div>
      </div>
      <div style={{ marginLeft: "60px" }}>
        <div style={{color:'black'}}>
          <h1 style={{ color: "black" , fontSize:'36px'}}>@ {title}</h1>
          <h3 >Member of {memberShip} club</h3>
          <h3></h3>
          <small style={{ color: "gray", fontWeight: "600", fontSize: "16px" }}>
            {atrate}
          </small>
          <div>
          <small style={{fontSize:'15px', color:'maroon'}}>
            last login:{loggedinAt} April
          </small>
          </div>
        </div>
      
        <GifGallery images={imageArray}label={label} />
      </div>
    </div>
  );
}
