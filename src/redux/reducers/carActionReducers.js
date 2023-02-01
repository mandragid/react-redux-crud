const initialState = {
  carlist: [],
  message: "",
  carid: {},
};

export const carActionReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GETALLCARS":
      return {
        ...initialState,
        carlist: action.payload,
      };

    case "DELETECARS":
      return {
        ...initialState,
        message: action.payload,
      };

    case "ADDCARS":
      return {
        ...initialState,
        message: action.payload,
      };

    case "EDITCARS":
      return {
        ...initialState,
        message: action.payload,
      };

    case "GETCARBYID":
      return {
        ...initialState,
        carid: action.payload,
      };
    default:
      return state;
  }
};
