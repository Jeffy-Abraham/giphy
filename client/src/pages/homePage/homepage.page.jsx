import Trending from "../../assets/trending.png";
import CarouselAlbum2 from "../../components/carousel-container-2/carousel-container-2.compponent";
import CarouselAlbum from "../../components/carousel-container/carousel-container.component";
import CarouselHeader from "../../components/carousel-header/carousel-header.component";
import Stories from '../../assets/stories.png'
export default function HomePage() {
  return (
    <div>
      <div>
        <CarouselHeader title="Trending" icon={Trending} />
        <CarouselAlbum />
      </div>
      <div>
      <CarouselHeader title="Stories" icon={Stories} />
          <CarouselAlbum2/>
      </div>
    </div>
  );
}
