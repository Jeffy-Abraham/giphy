import { connect } from "react-redux";
import { useEffect } from "react";
import CarouselAlbum from "../../components/carousel-container/carousel-container.component";
const SearchPage = ({ data, match }) => {
  useEffect(() => {
    // Update the document title using the browser API
  }, [match.params]);

  return (
    <div>
      <CarouselAlbum data={data} />
    </div>
  );
};

const mapStateToProps = ({
  search: {
    search: { data },
  },
}) => ({
  data,
});

export default connect(mapStateToProps, null)(SearchPage);
