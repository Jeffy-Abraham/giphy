export const findGifs = (state, id) => {
  var gif = state.trendinGifs.filter((gifs) => {
    return gifs.id == id;
  });
  console.log(gif[0])
  return gif[0];
};
