import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant";

const initialState = {
  cartData: [], //data from addToCart() in actions will be sent and stored in cardData var
};
export default function cartItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("Reducer ", action);
      return [
        ...state, //send data which was previously in the state
        { cartData: action.data }, //send newData
      ];
    case REMOVE_TO_CART:
      // console.log("Reducer ", action);
      state.pop();
      return [
        ...state, //send data which was previously in the state
      ];
    default: {
      return state;
    }
  }
}
