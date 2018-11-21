import React, { Component } from 'react';

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import './Account/account.css';
import AccountInfo from './Account/AccountInfo';
import UserProfile from './Account/UserProfile';

class Account extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="outerlogincontainer">
                    <h1 className="myaccount">
                        My Account
                    </h1>
                    <UserProfile/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Account;