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
        dispatch(successUser(success.data));
      })
      .catch((err) => {
        dispatch(failedUser(err.response.data.message));
      });
  };
};
