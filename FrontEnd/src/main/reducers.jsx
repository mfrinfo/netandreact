import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import LoginActionReducer from "../app/login/login-reducer";
import CountriesActionReducer from '../app/countries/countries-reducer';

const mainReducer = combineReducers({
  toastr: toastrReducer,
  loginActionReducer: LoginActionReducer,
  countriesActionReducer: CountriesActionReducer,
});

export default mainReducer;
