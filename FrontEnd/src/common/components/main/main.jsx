import React, { Component } from 'react';
import Header from '../header/header'
import SideBar from '../sideBar/sideBar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { validateToken } from '../../../app/login/login-action'
import '../../template/dependencies'

class Main extends Component {
    componentDidMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user)
        }
    }

    render() {
        const { user } = this.props.auth
        return (
            <React.Fragment>
                <Header />
                <SideBar userName={user.userName} userImage='/img/user2-160x160.jpg' />
                {this.props.children}

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({ auth: state.loginActionReducer })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main)
