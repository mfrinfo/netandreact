const INITIAL_STATE = {
  data: {},
  list: [],
  errorMessage: {},
  stateCode: undefined,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOAD_LIST_COUNTRY": console.log(action.payload)
      return {
        ...state,
        list: action.payload.data,
        data: {},
        errorMessage: {},
        error: false,
        stateCode: action.payload.status,
        methods: "GET",
      };
    case "LOAD_COUNTRY":
      return {
        ...state,
        list: [],
        data: action.payload.data,
        errorMessage: {},
        error: false,
        stateCode: action.payload.status,
        methods: "GET",
      };
    case "PUT_COUNTRY":
      return {
        ...state,
        list: [],
        data: action.payload.data,
        errorMessage: {},
        error: false,
        stateCode: action.payload.status,
        methods: "PUT",
      };
    case "ERROR_COUNTRY":
      return {
        ...state,
        list: [],
        data: {},
        errorMessage: action.payload.message,
        error: true,
        stateCode:
          action.payload.response === undefined
            ? 500
            : action.payload.response.status,
        methods: "",
      };
    default:
      return state;
  }
};
