const loginState = {
  isLogin: false,
  loading: true,
};

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...loginState,
        isLogin: action.payload,
      };
    case "TOKEN_CHECK":
      return {
        ...loginState,
        isLogin: action.payload.isLogin,
        loading: action.payload.loading,
      };

    default:
      return state;
  }
};

export default loginReducer;
