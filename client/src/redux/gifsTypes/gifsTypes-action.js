import axios from "axios";
export const setEntertainmentGifs = (data) => ({
  type: "SET_ENTERTAINMENT",
  payload: data,
});

export const setReactionGifs = (data) => ({
  type: "SET_REACTIONS",
  payload: data,
});

export const setSportsGifs = (data) => ({
  type: "SET_SPORTS",
  payload: data,
});
export const makeApiCalls = (apiEndPoint,id) => {
  return (dispatch) => {
    axios
      .get(
        apiEndPoint
      )
      .then((success) => {

       if(id=='Entertainment')
       {
        dispatch(setEntertainmentGifs(success.data.data))

       }
       if(id==='Sports')
       {
         dispatch(setSportsGifs(success.data.data))

       }
       if(id==='Reactions')
       {
        dispatch(setReactionGifs(success.data.data));
       }



        
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
