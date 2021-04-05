import "../../common/template/dependencies"
import "./countries.css"
import Const from "../../consts"
import React, { Component } from "react"
import StandardPage from "../../common/components/standardPage"
import Main from "../../common/components/main/main"
import { connect } from "react-redux"
import { _onLoadList } from "./countries-action"
import { toastr } from "react-redux-toastr"
import { TOAST_ERROR } from "../constsMessage"
import { MensagemTraduzida } from "../../common/utils/utils"
import Loader from "../../common/components/loader/loader"
import { Card, Form, Col } from "react-bootstrap"
import { PaginatedList } from "react-paginated-list"

function mapStateToProps(state) {
  const {
    data,
    list,
    errorMessage,
    stateCode,
    error,
  } = state.countriesActionReducer;
  return { data, list, errorMessage, stateCode, error };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadList: () => {
      return dispatch(_onLoadList());
    },
  };
}

class CountriesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      listSearch: [],
      isLoader: true,
      currentPage: 1,
      totalPerPage: 16
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { onLoadList } = this.props;
    this.setState({ ...this.state, isLoader: true });
    onLoadList()
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
          this.setState({ ...this.state, list: this.props.list, listSearch: this.props.list });
          toastr.success(
            MensagemTraduzida(
              this.props.stateCode,
              this.props.data.message,
              this.props.methods
            )
          );
        }
      })
      .catch(() => {
        this.setState({ ...this.state, isLoader: false });
        toastr.error(TOAST_ERROR);
      });
  }

  handleChange(e) {
    const listFilter = this.state.listSearch.filter(item => item.name.includes(e.target.value));
    this.setState({
      ...this.state,
      list: listFilter,
    });
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { list, totalPerPage } = this.state;

    return (
      <React.Fragment>
        <Main>
          <StandardPage
            title="Paises"
            subTitle=" - Listagem"
            breadMain={Const.TITULO_HOME}
            breadLink={Const.FRONT_URL}
            breadItem="Listagem de Países"
          >
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="Pesquisar" onChange={(e) => { this.handleChange(e) }} />
                </Col>
              </Form.Row>
            </Form>

            {this.state.isLoader ? (
              <Loader />
            ) : (
              <div className="container mt-3">
                <PaginatedList
                  list={list}
                  itemsPerPage={totalPerPage}
                  renderList={(list) => (
                    <>
                      <div className="row">
                        {list.map((data, id) => {
                          return (
                            <div className="col-auto mb-3" key={id}>
                              <Card bg={data.originalInfo ? "dark" : "warning"} style={{ width: '250px' }}>
                                <Card.Img variant="top" src={data.svgFile} className="bandeira" />
                                <Card.Body>
                                  <Card.Title>{data.name}</Card.Title>
                                  <Card.Text>
                                    Capital : {data.capital} <br />
                                  </Card.Text>
                                  <a href={'countries/' + data.id} className="card-link" >Editar</a>
                                  <a class="card-link" data-toggle="collapse" href={"#collapseExample" + data.id} role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i class="fas fa-chevron-down"></i> Mais detalhes </a>
                                  <div className="collapse" id={"collapseExample" + data.id} >
                                    <br />
                                    <p>População: {data.population.toFixed(4)} </p>
                                    <p>População por Mêtro: {parseFloat(data.populationDensity).toFixed(4)}</p>
                                    <p>Área: {data.area} </p>
                                  </div>
                                </Card.Body>
                              </Card>
                            </div>

                          );
                        })}
                      </div>
                    </>
                  )}
                />
              </div>
            )}
          </StandardPage>
        </Main>

      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesIndex);
