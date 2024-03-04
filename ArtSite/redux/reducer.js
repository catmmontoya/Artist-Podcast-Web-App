const initialState = {
  userId: null,
  adminId: null,
  otherValue: "Hello",
  cart: [],
};

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
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: action.payload,
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
