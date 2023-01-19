const loginState = {
  isLogin: false,
};

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...loginState,
        isLogin: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
