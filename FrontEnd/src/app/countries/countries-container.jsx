import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { TOAST_ERROR } from "../constsMessage";
import { MensagemTraduzida } from "../../common/utils/utils";
import CountriesForm from "./countries-form";
import { _submit, _onLoad } from "./countries-action";

function mapStateToProps(state) {
  const {
    data,
    list,
    errorMessage,
    stateCode,
    error,
    methods,
  } = state.countriesActionReducer;
  return { data, list, errorMessage, stateCode, error, methods };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => {
      return dispatch(_submit(values));
    },

    onLoad: (id) => {
      return dispatch(_onLoad(id));
    },
  };
}

class CountriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      novoRegistro: false,
      isLoader: false,
      desabilitarBotaoSalvar: true,
      list: [],
      record: {
        id: this.props.match.params.id,
        name: "",
        capital: "",
        population: 0,
        area: 0,
        populationDensity: 0,
        officialLanguage: "",
        svgFile: ""
      },
    };
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    if (this.state.record.id !== undefined && this.state.record.id !== null) {
      const { onLoad } = this.props;
      this.setState({ ...this.state, isLoader: true });
      onLoad(this.state.record.id)
        .then(() => {
          this.setState({ ...this.state, isLoader: false });
          if (this.props.error) {
            toastr.error(
              MensagemTraduzida(
                this.props.stateCode,
                this.props.errorMessage,
                this.props.methods
              )
            );
          } else {
            this.setState({ ...this.state, record: this.props.data });
          }
        })
        .catch(() => {
          this.setState({ ...this.state, isLoader: false });
          toastr.error(TOAST_ERROR);
        });
    }
  }

  onSave(values) {
    const { onSubmit } = this.props;
    this.setState({
      ...this.state,
      isLoader: true,
    });
    onSubmit(values)
      .then(() => {
        this.setState({ ...this.state, isLoader: false });
        if (this.props.error) {
          this.setState({ ...this.state });
          toastr.error(
            MensagemTraduzida(
              this.props.stateCode,
              this.props.errorMessage,
              this.props.methods
            )
          );
        } else {
          toastr.success(
            MensagemTraduzida(
              this.props.stateCode,
              this.props.data.message,
              this.props.methods
            ),
            {
              timeOut: 1000,
              onHideComplete: () =>
                this.props.history.push("/"),
            }
          );
        }
      })
      .catch(() => {
        this.setState({
          ...this.state,
          isLoader: false,
        });
        toastr.error(TOAST_ERROR);
      });
  }

  render() {
    return (
      <CountriesForm
        {...this.props}
        {...this.state}
        onSave={this.onSave}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);
