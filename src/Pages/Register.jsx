import React, { Component } from 'react';
import './Register/register.css';

import Header from 'Components/Header';
import Footer from 'Components/Footer';

import Email from '@material-ui/icons/Email';
import Face from '@material-ui/icons/Face';
import Lock from '@material-ui/icons/Lock';
import VpnKey from '@material-ui/icons/VpnKey';

class Register extends Component {

    constructor() {
        super();

        this.state = {
            email : "your email",
            username : "your username",
            password : "your password"
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    onRegister(e) {
        e.preventDefault();
        //get values from state
        const { email, username, password } = this.state;

        console.log(email + username + password);
    }

    handleEmailChange(event) {
        this.setState({email : event.target.value});
    }

    handleUserChange(event) {
        this.setState({username: event.target.value});
    }

    handlePassChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return(
            <div>
                <Header/>
                <div className="registercontainer">
                    <div id="container-register">
                        <div id="title">
                            <Lock/> Register
                        </div>

                        <form onSubmit={this.onRegister}>

                        <div className="input">
                            <div className="input-addon">
                                <Email/>
                            </div>
                            <input id="email" value={this.state.email} type="email" required className="validate" onChange={this.handleEmailChange}/>
                        </div>

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

                        <input type="submit" value="Register" />
                    </form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Register;