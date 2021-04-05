import "../../common/template/dependencies"
import "../../common/template/custom"
import React, { Component } from "react"
import StandardPage from "../../common/components/standardPage"
import Main from "../../common/components/main/main"
import Box from "../../common/components/box/box"
import Message from "../../common/msg/message"
import { Formik, Form } from "formik"
import ButtonsBar from "../../common/components/button/buttonsBar"
import DivFormGroup from "../../common/components/layout/divFormGroup"
import InputAndLabel from "../../common/components/formikInputs/inputAndLabel"
import MoneyAndLabel from '../../common/components/formikInputs/moneyAndLabel'
import Row from '../../common/components/layout/row'
import Grid from '../../common/components/layout/grid'

export default class CountriesForm extends Component {
  render() {
    return (
      <React.Fragment>
        <Main>
          <StandardPage
            title="Cadastro de País"
            subTitle=" - Alteração"
            breadMain="Listagem de Países"
            breadLink="/countries"
            breadItem="Cadastro de País"
          >
            <Box title="Formulário de Cadastro">
              <Formik
                enableReinitialize={true}
                initialValues={{
                  id: this.props.record.id,
                  name: this.props.record.name,
                  capital: this.props.record.capital,
                  population: this.props.record.population,
                  area: this.props.record.area,
                  populationDensity: this.props.record.populationDensity,
                  officialLanguage: this.props.record.officialLanguage,
                  svgFile: this.props.record.svgFile,
                }}
                validate={(values) => {
                  const errors = {};

                  if (values.capital < 3) {
                    errors.capital =
                      "Capital deve possuir no mínimo 3 caracteres";
                  }

                  if (!values.capital) {
                    errors.capital = "Capital é campo obrigatório";
                  }

                  return errors;
                }}
                onSubmit={(values) => {
                  this.props.onSave(values);
                }}
              >
                {(props) => (
                  <Form>

                    <Row>
                      <Grid cols='12 5'>
                        <DivFormGroup>
                          <InputAndLabel
                            disabled={true}
                            name="name"
                            caption="Nome"
                            placeholder="Digite o Nome"
                            value={props.values.name}
                            handleChange={props.handleChange}
                            handleBlur={props.handleBlur}
                            errors={props.errors.name}
                            touched={props.touched.name}
                          ></InputAndLabel>
                        </DivFormGroup>
                      </Grid>
                      <Grid cols='12 3'>
                        <DivFormGroup>
                          <InputAndLabel
                            disabled={true}
                            name="officialLanguage"
                            caption="Idioma Oficial"
                            value={props.values.officialLanguage}
                            handleChange={props.handleChange}
                            handleBlur={props.handleBlur}
                            errors={props.errors.officialLanguage}
                            touched={props.touched.officialLanguage}
                          ></InputAndLabel>
                        </DivFormGroup>
                      </Grid>
                      <Grid cols='8 3'>
                        <DivFormGroup>
                          <InputAndLabel
                            name="capital"
                            caption="Capital"
                            placeholder="Digite o Capital"
                            value={props.values.capital}
                            handleChange={props.handleChange}
                            handleBlur={props.handleBlur}
                            errors={props.errors.capital}
                            touched={props.touched.capital}
                          ></InputAndLabel>
                        </DivFormGroup>
                      </Grid>
                      <Grid cols='4 1'>
                        <DivFormGroup>
                          <img src={props.values.svgFile} alt="Minha Figura" style={{ width: '100px' }} />
                        </DivFormGroup>
                      </Grid>
                    </Row>

                    <Row>
                      <Grid cols='12 4'>
                        <DivFormGroup>
                          <InputAndLabel
                            number={true}
                            name="population"
                            caption="População"
                            value={props.values.population}
                            handleChange={props.handleChange}
                            handleBlur={props.handleBlur}
                            errors={props.errors.population}
                            touched={props.touched.population}
                          ></InputAndLabel>
                        </DivFormGroup>
                      </Grid>
                      <Grid cols='12 4'>
                        <DivFormGroup>
                          <InputAndLabel
                            number={true}
                            name="area"
                            caption="Área"
                            value={props.values.area}
                            handleChange={props.handleChange}
                            handleBlur={props.handleBlur}
                            errors={props.errors.area}
                            touched={props.touched.area}
                          ></InputAndLabel>
                        </DivFormGroup>
                      </Grid>
                      <Grid cols='12 4'>
                        <DivFormGroup>
                          <MoneyAndLabel
                            name="populationDensity"
                            caption="Densidade Demográfica"
                            value={props.values.populationDensity}
                            handleChange={props.handleChange}
                            handleBlur={props.handleBlur}
                            errors={props.errors.populationDensity}
                            touched={props.touched.populationDensity}
                          ></MoneyAndLabel>
                        </DivFormGroup>
                      </Grid>
                    </Row>

                    <ButtonsBar
                      link="/countries"
                      novoRegistro={this.props.novoRegistro}
                      isLoader={this.props.isLoader}
                      desabilitarBotaoSalvar={this.props.desabilitarBotaoSalvar}
                    />
                  </Form>
                )}
              </Formik>
              <Message />
            </Box>
          </StandardPage>
        </Main>
      </React.Fragment >
    );
  }
}
