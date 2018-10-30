import React, { Component } from 'react';
import './Login/login.css';

import Header from 'Components/Header';
import Footer from 'Components/Footer';

import Face from '@material-ui/icons/Face';
import Lock from '@material-ui/icons/Lock';
import VpnKey from '@material-ui/icons/VpnKey';

import { connect } from 'react-redux';
import { loginUser } from 'Modules/Account/head';

class Login extends Component {
    constructor() {
        super();
        //controlled form to update and save form changes : https://reactjs.org/docs/forms.html#controlled-components
        this.state = {
            username: "username",
            password: "password"
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    handleUserChange(event) {
        this.setState({username: event.target.value});
    }

    handlePassChange(event) {
        this.setState({password: event.target.value});
    }


    onLogin(e) {
        e.preventDefault();

        const { username, password } = this.state;
        this.props.loginUser(username, password);
    }

    render() {
        const { loggingIn } = this.props;
        console.log(loggingIn);
        return (
        <div>
            <Header/>
            <div id="logincontainer">
                <div id="container-login">
                    <div id="title">
                        <Lock/> Login
                    </div>

                    <form onSubmit={this.onLogin}>
                        <div className="input">
                            <div className="input-addon">
                                <Face/>
                            </div>
                            <input id="username" value={this.state.username} type="text" required className="validate" onChange={this.handleUserChange}/>
                        </div>

                        <div className="clearfix"></div>

                        <div className="input">
                            <div className="input-addon">
                                <VpnKey/>
                            </div>
                            <input id="password" value={this.state.password} type="password" required className="validate" onChange={this.handlePassChange}/>
                        </div>

                        <input type="submit" value="Log In" />
                    </form>

                    <div className="register">
                        Don't have an account yet?
                        <button id="register-link"><a href="/register">Register here</a></button>
                    </div>
                </div>
            </div>
            <Footer/>  
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.account.head
    };
}

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);