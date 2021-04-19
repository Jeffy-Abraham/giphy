import { useEffect } from "react";
import { selectCategorybyRoute } from "../../redux/gifsTypes/gifsTypes-selector";
import { makeApiCalls } from "../../redux/gifsTypes/gifsTypes-action";
import { connect } from "react-redux";
import "./category.route.css";
import CarouselAlbum from "../carousel-container/carousel-container.component";
import CategoryPage from "../../pages/categoryPage/category.page";

function Category({ match, currentCategory, makeApiCalls }) {
  const { imageArray } = currentCategory;
  useEffect(() => {
    makeApiCalls(currentCategory.ApiLink, match.params.categoryId);
  }, [match.params.categoryId]);

  console.log(currentCategory);
  return (
    <div>
      <CategoryPage imageArray={imageArray} currentCategory={currentCategory} />
    </div>
  );
}
const mapStateToProps = (state, ownprops) => ({
  currentCategory: selectCategorybyRoute(
    state,
    ownprops.match.params.categoryId
  ),
});

const mapDispatchToProps = (dispatch) => ({
  makeApiCalls: (data, id) => dispatch(makeApiCalls(data, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
//<CarouselAlbum label='false'data={imageArray} />
