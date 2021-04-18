import axios from "axios";
//actions related to trending
export const getTrending = () => ({
  type: "GET_TRENDING",
});

export const failedTrending= (err) => ({
  type: "ERROR_TRENDING",
  payload: err,
});
export const successTrending = (data) => ({
  type: "SET_TRENDING",
  payload: data,
});
export const findbyIdGif=(id)=>
({
    type:"FIND_GIF",
    payload:id
})
export const fetchTrendingGifs=()=>
{
  
    return (dispatch) => {
       
        dispatch(getTrending())
        axios
          .get("http://api.giphy.com/v1/gifs/trending?api_key=zhtJEMYUEJVlw4z5Ergb8jgXD4SGvIUK&limit=10&rating=g")
          .then((success) => {
           
         dispatch(successTrending(success.data.data))
          })
          .catch((err) => {
          dispatch(failedTrending(err.data))
          });
      };
}