import axios from "axios";

export const search = (data) => ({
  type: "SEARCH",
  payload: data,
});

export const searchGifs = (data) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=zhtJEMYUEJVlw4z5Ergb8jgXD4SGvIUK&q=${data}&limit=10&offset=0&rating=g&lang=en`
      )
      .then((success) => {
        dispatch(search(success.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
