export const addtoFav = (state, data) => {
 
 var newFav=[...state.currentUser.favourites,data]
 console.log(newFav)
 return newFav
};
