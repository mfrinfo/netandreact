import axios from "axios";
import consts from "../../consts";

export function login(values) {
  return _submit(values, `${consts.API_URL + consts.LOGIN}`);
}
export function logout() {
  return _logout();
}

export function _submit(values, url) {
  return axios
    .post(url, JSON.stringify(values), consts.HEADER_AXIOS)
    .then((resp) => ({ type: "USER_FETCHED", payload: resp.data }))
    .catch((e) => ({ type: "ERROR_USER", payload: e }));
}

export function _logout() {
  return { type: "USER_LOGOUT", payload: false };
}

export function validateToken(token) {
  return (dispatch) => {
    if (token) {
      dispatch({ type: "TOKEN_VALIDATED", payload: true });
    } else {
      dispatch({ type: "TOKEN_VALIDATED", payload: false });
    }
  };
}
