import { addtoType } from "./gifsTypes-utility";

const INITIAL_STATE = {
  Reactions: {
    id: "Reaction",
    imageArray: [],
    profileImage:
      "https://media.giphy.com/channel_assets/reactions/k2ybPvSfRQuK/200h.gif",
    description: "Dont tell it to me, GIF it to me!",
    title: "Reaction GIFs",
    atrate: "@ reaction Gifs",
  },
  Sports: {
    id: "Sports",
    imageArray: [],
    description:
      "Your go-to for any and all sports GIFs! LeBron, Ronaldo, Gronk, Serena...We’ve got them all!",
    profileImage:
      "https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif",
    title: "Sports GIFs",
    atrate: "@ sport Gifs",
  },
  Entertainment: {
    id: "Entertainment",
    imageArray: [],
    description: "Get the latest GIFs from movies, TV, music, celebrities.",
    profileImage:
      "https://media.giphy.com/avatars/entertainment/Poc7fb6dD9q5/200h.gif",
    title: "Entertainment",
    atrate: "@entertainment Gifs",
  },
};

const typesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_REACTIONS":
      
     return {
        ...state,
        Reactions: {
          ...state.Reactions,imageArray:addtoType(state.Reactions.imageArray, action.payload)
          
        },
      };
    case "SET_SPORTS":
    
      return {
        ...state,
        Sports: {
          ...state.Sports,imageArray:addtoType(state.Sports.imageArray, action.payload)
          
        },
      };
    case "SET_ENTERTAINMENT":
   
      return {
        ...state,
        Entertainment: {
          ...state.Entertainment,imageArray:addtoType(state.Entertainment.imageArray, action.payload)
          
        },
      };

    default:
      return state;
  }
};

export default typesReducer;
