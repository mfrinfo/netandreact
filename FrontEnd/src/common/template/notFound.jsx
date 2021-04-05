import './dependencies'
import Const from '../../consts'
import React, { Component } from 'react'
import StandardPage from '../components/standardPage'
import Main from '../components/main/main'

class Notfound extends Component {
    render() {
        return (
            <div>
                <Main>
                    <StandardPage
                        title="Erro 404"
                        subTitle=""
                        breadMain="Home"
                        breadLink={Const.FRONT_URL}
                        breadItem="Erro 404"
                    >
                        <div className="error-page">
                            <h1><i className="fa fa-warning text-yellow"></i> Ops! Página não encontrada.</h1>
                            <h4> Não foi possível encontrar a página que você estava procurando...</h4>
                        </div>
                    </StandardPage>
                </Main>

            </ div>
        );
    }
}

export default Notfound
