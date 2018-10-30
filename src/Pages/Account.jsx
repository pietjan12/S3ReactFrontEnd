import React, { Component } from 'react';

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import './Account/account.css';

class Account extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="outerlogincontainer">
                    <h1> dit is de account pagina </h1>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Account;