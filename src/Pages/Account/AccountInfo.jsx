import React, { Component } from 'react';
import { withRouter } from "react-router";
import ReactLoading from 'react-loading';

import './AccountInfo.css';
import Button from '@material-ui/core/Button';
import {Form, FormInput } from 'react-chloroform';

import { connect } from 'react-redux';
import { fetchUser } from 'Modules/Account/head';
import { logoutUser } from 'Modules/Authentication/head';
import { registerBankAccount, linkToMyBankAccount } from 'Modules/BankAccount/head';

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

        this.createBankAccountState = {
            bankName : "your desired name"
        }

        this.linkBankAccountState = {
            otherUserName : "Account Name To Link",
            bankAccount : "TODO"
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
                            <h5> create bank account </h5>
                            <Form initialState={this.createBankAccountState} onSubmit={this.createBankAccount}>
                                <div className="userinput">
                                    <FormInput
                                        model="bankName"
                                        id="bankName"
                                    />
                                </div>
                                <Button type="submit" variant="contained" color="secondary"> Create Bank Account</Button>
                            </Form>
                        </div>
                        <div className="innerloginitem">
                            <h5> link bank account </h5>
                            <Form initialState={this.linkBankAccountState} onSubmit={this.linkToBankAccount}>
                                <div className="userinput">
                                    <FormInput
                                        model="otherUserName"
                                        id="otherUserName"
                                    />
                                </div>
                                <div className="userinput">
                                    {/* TODO : LIST OFZO MAKEN EN VULLEN MET ALLE BANK ACCOUNTS VAN ACCOUNT IN DROPDOWN, ZO KAN IK METEEN ID MEEGEVEN */}
                                </div>
                                <Button type="submit" variant="contained" color="secondary"> Link Bank Account</Button>
                            </Form>
                        </div>
                        <div className="innerloginitem">
                            <Button variant="contained" color="secondary" onClick={this.logout}> Logout </Button>
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