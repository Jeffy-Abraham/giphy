import axios from "axios";

export const getUser = () => ({
  type: "GET_USER",
});

export const failedUser = (err) => ({
  type: "ERROR_USER",
  payload: err,
});
export const successUser = (data) => ({
  type: "SET_USER",
  payload: data,
});

export const signUpUser = (formValue) => {
  return (dispatch) => {
    dispatch(getUser());

    axios
      .post("/signUp", formValue)
      .then((success) => {
       
        dispatch(successUser(success.data.message));
      })
      .catch((err) => {
        dispatch(failedUser(err.response.data.message));
      });
  };
};


export const updateDescription=(formdata,user)=>
{
    var data={formdata,user}
    return (dispatch) => {
        dispatch(getUser());
    
        axios
          .post("/signUp/updateDescription", data)
          .then((success) => {
           
            dispatch(successUser(success.data.message));
          })
          .catch((err) => {
            dispatch(failedUser(err.response.data.message));
          });
      };
}