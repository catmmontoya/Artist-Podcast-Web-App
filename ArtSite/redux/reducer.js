const initialState = {
  userId: null,
  adminId: null,
  otherValue: "Hello",
  cartItems: [],
};

// const addToCart = (item) => ({
//   type: "ADD_TO_CART",
//   payload: item,
// });

//front end components will dispatch an action object
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_AUTH":
      return {
        ...state,
        userId: action.payload,
      };

    case "ADMIN_AUTH":
      return {
        ...state,
        adminId: action.payload,
      };

    //triggered from the front end with this dispatch action object
    case "LOGOUT":
      return {
        ...state,
        userId: null,
        adminId: null,
        cartItems: [],
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "REMOVE_FROM_CART":
      console.log("hit reducer remove cart");
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.itemId !== action.payload
        ),
      };

    case "ADMIN_AUTH":
      return {
        ...state,
        adminId: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
