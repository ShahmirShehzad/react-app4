import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant";

export const addToCart = (data) => {
  // console.log("Action ", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = () => {
  console.log("Action ");
  return {
    type: REMOVE_TO_CART,
  };
};

//Sends data from react component to redux store
