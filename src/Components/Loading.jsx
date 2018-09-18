import React, { Component } from 'react';
import Logo from 'img/templogo.png'

class Loading extends Component {
    render() {
        return (
            <div className="outerloading">
                <img src={Logo} className="loadinglogo"/>
            </div>
        );
    }
}

export default Loading;