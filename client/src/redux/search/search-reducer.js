
const INITIAL_STATE = {
  search: [],
};
const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        search: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
