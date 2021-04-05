import "../../../src/common/template/dependencies";
import "./login.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { login, logout } from "./login-action";
import { toastr } from "react-redux-toastr";
import Message from "../../common/msg/message";
import { TOAST_ERROR } from "../constsMessage";

function mapStateToProps(state) {
  const { dataUser, errorMessage, stateCode, error } = state.loginActionReducer;
  return { dataUser, errorMessage, stateCode, error };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (values) => {
      return dispatch(login(values));
    },
    onLogout: () => {
      return dispatch(logout());
    },
  };
}

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginMode: true,
    };
  }

  componentDidMount() {
    if (this.props.match.url === "/logout") {
      this.props.onLogout();
    }
  }

  onSubmit(values) {
    const { onLogin, onSignup } = this.props;
    this.state.loginMode
      ? onLogin(values)
        .then(() => {
          if (this.props.error) {
            toastr.error(this.props.errorMessage);
          } else {
            this.props.history.push("/");
            this.props.history.go(0);
          }
        })
        .catch(() => {
          toastr.error(TOAST_ERROR);
        })
      : onSignup(values);
  }

  render() {
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">
                Faça o Login para acessar o Sistema
              </p>
              <Formik
                initialValues={{ email: "" }}
                validate={(values) => {
                  const errors = {};

                  if (!values.email) errors.email = "Email é campo obrigatório";

                  if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Email inválido";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  this.onSubmit(values);
                  setSubmitting(false);
                }}
              >
                {(props) => (
                  <Form>
                    <div className="form-group has-feedback">
                      <label htmlFor="email">Informe o email do usuário</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Digite o email"
                        value={props.values.email}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        style={{
                          borderColor:
                            props.errors.email && props.touched.email && "red",
                        }}
                      />
                      <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                      {props.errors.email && props.touched.email && (
                        <div style={{ color: "red" }}>{props.errors.email}</div>
                      )}
                    </div>


                    <div className="row">
                      <div className="col-12">
                        <input
                          className="btn btn-primary btn-block"
                          type="submit"
                          value="Acessar"
                          disabled={props.isSubmitting}
                        />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
              <Message />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
