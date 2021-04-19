import { setFavour } from './user-action';
import {addtoFav} from './user-utiliy'

const INITIAL_STATE = {
  currentUser: false,
  error: false,
  isSettingUp: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
        isSettingUp: false,
        error: false,
      };

    case "GET_USER":
      return {
        ...state,
        isSettingUp: true,
        error: false,
      };

    case "SET_FAVOUR":
      var favgif=addtoFav(state,action.payload)
      return {
        ...state,currentUser:{...state.currentUser,favourites:favgif}
        
         
        
      };

    case "ERROR_USER":
      return {
        ...state,
        error: action.payload,
        isSettingUp: false,
      };

    default:
      return state;
  }
};

export default userReducer;
