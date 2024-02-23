const initialState = {
  userId: null,
  otherValue: "Hello",
};

//front end components will dispatch an action object
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_AUTH":
      return {
        ...state,
        userId: action.payload,
      };

    //triggered from the front end with this dispatch action object
    case "LOGOUT":
      return {
        ...state,
        userId: null,
      };

    default:
      return state;
  }
};

export default reducer;
