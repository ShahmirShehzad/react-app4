import { combineReducers } from "redux";
import cartItems from "./reducer"; // function from reducer file

export default combineReducers({
  //combineReducer is high lvl component that will merge all reducers. e.g cartItems
  cartItems,
});

//rootReducer
//It is needed to merge all reducers into one because there can only be 1 datastore in redux app
