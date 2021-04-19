import { findGifs } from "./category-utility";

const INITIAL_STATE = {
  isfetching: false,
  error: false,
  trendinGifs: [],
  entertainmentGifs: [],
  animalGifs: [],
  reactionGifs: [],
  sportsGifs: [],

  currentPublic: {},
};
const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FIND_GIF":
      var currentGif = findGifs(state, action.payload);
      return {
        ...state,
        currentPublic: currentGif,
      };
    case "GET_TRENDING":
      return {
        ...state,

        isfetching: true,
        error: false,
      };
    case "ERROR_TRENDING":
      return {
        ...state,

        isSettingUp: false,
        error: action.payload,
      };
    case "SET_TRENDING":
      return {
        ...state,
        trendinGifs: action.payload,
        isSettingUp: false,
        error: false,
      };

    default:
      return state;
  }
};

export default categoryReducer;
