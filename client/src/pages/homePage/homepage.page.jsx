/* Home page component , this is the root page.This page displays the trending gifs */
/* Component is connected to a redux-store which provides it with the necessary data ,eg:trendinggifs */

import TrendingIcon from "../../assets/trending.png";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTrendingGifs } from "../../redux/gifsCategory/category-actions";
import CarouselAlbum from "../../components/carousel-container/carousel-container.component";
import CarouselHeader from "../../components/carousel-header/carousel-header.component";

function HomePage({ trendinGifs, fetchTrendingGifs }) {
  useEffect(() => {
    fetchTrendingGifs();
  }, []);

  return (
    <div>
      <div>
        <CarouselHeader title="Trending" icon={TrendingIcon} />
        <CarouselAlbum data={trendinGifs} />
      </div>
      <div></div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchTrendingGifs: () => dispatch(fetchTrendingGifs()),
});

const mapStateToProps = ({ category: { trendinGifs } }) => ({
  trendinGifs,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
