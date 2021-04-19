import CarouselHeader from "../carousel-header/carousel-header.component";
import CarouselImage from "../carousel-image/carousel-image.component";
import favourite from "../../assets/favourites.png";
import "./gifsgaller.css";
export default function GifGallery({ images }) {
  return (
    <div>
      <div className="category-grid">
        {images.map((subArray) => {
          return (
            <div className="flex-category-grid">
              {subArray.map((link) => {
                return (
                  <CarouselImage
                    key={link.id}
                    label="false"
                    show="false"
                    id={link.id}
                    otherProps={link}
                    imageLink={link.images.fixed_height.url}
                    height="150px"
                    title={link.title}
                    user={link.user}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
