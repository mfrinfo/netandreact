import '../../src/common/template/dependencies'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import axios from 'axios'
import LoginPage from '../app/login/login-page'
import { validateToken } from '../app/login/login-action'
import Countries from '../app/countries/countries-index'

class AuthOrApp extends Component {

    componentWillMount() {

        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user)
        }
    }

    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            axios.defaults.headers.common['Authorization'] = user.acessToken //coloca em todos os headers
            return <Countries />
        } else if (!user && !validToken) {
            return <LoginPage />
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.loginActionReducer })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)
