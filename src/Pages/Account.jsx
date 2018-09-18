import React, { Component } from 'react';

import Header from 'Components/Header';
import Footer from 'Components/Footer';

class Account extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1> dit is de account pagina </h1>
                <Footer/>
            </div>
        );
    }
}

export default Account;