import CarouselHeader from "../carousel-header/carousel-header.component";
import CarouselImage from "../carousel-image/carousel-image.component";
import favourite from  '../../assets/favourites.png'
export default function GifGallery({ images, label }) {
  return (
    <div>
        <CarouselHeader title='Favourites' icon={favourite}/>
      <div className="category-grid">
        {images.map((subArray) => {
          return (
            <div className="flex-category-grid">
              {subArray.map(({ link }) => {
                return <CarouselImage imageLink={link} Width="100%" />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
