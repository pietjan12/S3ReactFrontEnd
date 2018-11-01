import React, { Component } from 'react';
import { withRouter } from "react-router";
import ReactLoading from 'react-loading';

import './AccountInfo.css';
import Button from '@material-ui/core/Button';
import {Form, FormInput } from 'react-chloroform';

import { connect } from 'react-redux';
import { fetchUser } from 'Modules/Account/head';
import { logoutUser } from 'Modules/Authentication/head';

class AccountInfo extends Component {
    
    constructor() {
        super();

        //state for controlled components , will be updated on componentdidmount with redux values.
        this.formState = {
            username : "bb",
            email : "",
            newpass: "",
            confirmnewpass : ""
        }

        this.logout = this.logout.bind(this);
    }

    changeUsername(model) {
        console.log(model);
    }

    changeEmail(model) {
        console.log(model);
    }

    changePass(model) {
        console.log(model);
    }

    componentWillMount() {
        this.props.fetchUser(this.props.account.user);
    }

    logout() {
        this.props.logoutUser();
        this.props.history.push("/");
    }

    render() {
        const { user } = this.props;
        if(user.length === 0) {
            //return loading screen while redux action finishes.
            return (
                <div>
                     <ReactLoading type="bubbles" color="#fff" height={'50px'} width={'50px'} className="centered"/>
                </div>
            );
        } else {
            //update form state with redux values. Waarom zuigt react zo hard met forms maken (╯°□°）╯︵ ┻━┻
            this.formState.username = user.username;
            this.formState.email = user.email;

            return (
                <div className="innerlogincontainer">
                        <div className="innerloginitem">
                            <h5>username</h5>
                            <Form initialState={this.formState} onSubmit={this.changeUsername}>
                                <div className="userinput">
                                    <FormInput 
                                        model="username"
                                        id="username"
                                    />
                                </div>
                                <Button type="submit" variant="contained" color="secondary">Change username</Button>
                            </Form>
                        </div>
                        <div className="innerloginitem">
                            <h5 className="noinput">password</h5>
                            <Form initialState={this.formState} onSubmit={this.changePass}>
                                <div className="userinput">
                                    <FormInput 
                                        model="newpass"
                                        id="newpass"
                                    />
                                </div>
                                <div className="userinput">
                                    <FormInput 
                                        model="confirmnewpass"
                                        id="confirmnewpass"
                                    />
                                </div>
                                <Button type="submit" variant="contained" color="secondary">Change password</Button>
                            </Form>
                            {  /* <input className="password" value={user.password} type="password" required className="validate"/> */ }
                        </div>
                        <div className="innerloginitem">
                            <h5>email</h5>
                            <Form initialState={this.formState} onSubmit={this.changeEmail}>
                                <div className="userinput">
                                    <FormInput
                                        model="email"
                                        id="email"
                                    />
                                </div>
                                <Button type="submit" variant="contained" color="secondary">Change email</Button>
                            </Form>
                        </div>
                    <div className="innerloginitem">
                        <button onClick={this.logout}> Logout </button>
                    </div>
                </div>
            ); 
        }
    }
}


const mapStateToProps = state => {
    return {
        user: state.users,
        account: state.account
    };
}

export default withRouter(connect(
    mapStateToProps,
    { fetchUser, logoutUser }
)(AccountInfo));