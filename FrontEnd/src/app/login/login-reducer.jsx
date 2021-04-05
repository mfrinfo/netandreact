import consts from "../../consts";

const INITIAL_STATE = {
  dataUser: [],
  dataCompanies: [],
  user: JSON.parse(localStorage.getItem(consts.USERKEY)),
  validToken: false,
  errorMessage: {},
  stateCode: undefined,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOKEN_VALIDATED":
      const localTeste = JSON.parse(localStorage.getItem(consts.USERKEY));
      const dataExpirar = new Date(localTeste.expiration);
      const data = new Date();
      if (localTeste.authenticated && data < dataExpirar) {
        return { ...state, validToken: true };
      } else {
        localStorage.removeItem(consts.USERKEY);
        return { ...state, validToken: false, user: null };
      }
    case "USER_LOGOUT":
      localStorage.removeItem(consts.USERKEY);
      localStorage.removeItem(consts.COMPANYKEY_ID);
      localStorage.removeItem(consts.COMPANYKEY_NAME);
      return {
        ...state,
        validToken: false,
        user: null,
      };
    case "USER_FETCHED": //usuario é obtido depois do login ou singup
      localStorage.setItem(consts.USERKEY, JSON.stringify(action.payload));
      return {
        ...state,
        dataUser: action.payload,
        user: action.payload,
        validToken: true,
        error: false,
      };

    case "ERROR_USER":
      localStorage.removeItem(consts.USERKEY);
      localStorage.removeItem(consts.COMPANYKEY_ID);
      localStorage.removeItem(consts.COMPANYKEY_NAME);
      return {
        ...state,
        errorMessage: action.payload.message,
        stateCode: action.payload.response.status,
        error: true,
      };
    default:
      return state;
  }
};
