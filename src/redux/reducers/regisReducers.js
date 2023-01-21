const regisState = {
  message: "",
};

const regisReducer = (state = regisState, action) => {
  switch (action.type) {
    case "REGIS":
      return {
        ...regisState,
        message: action.payload,
      };
    case "REMOVE_MESSAGE":
      return {
        ...regisState,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default regisReducer;
