export const selectCategorybyRoute = function (state, routeName) {
  const currentCategory = state.categoryTypes[routeName];
  var link = `https://api.giphy.com/v1/gifs/search?api_key=zhtJEMYUEJVlw4z5Ergb8jgXD4SGvIUK&q=${routeName}&limit=21&offset=0&rating=g&lang=en`;
  currentCategory["ApiLink"] = link;
  return currentCategory;
};
