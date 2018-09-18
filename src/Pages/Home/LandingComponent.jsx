import React, { Component } from 'react';
import './LandingComponent.css';
import HypeImage from 'img/Home/alia.png';
import CaseImage from 'img/Home/caseloot.png';

class LandingComponent extends Component {
    render() {
        return (
            <div className="intro">
                <div className="info">
                    <h1>Kiddy Gambles</h1>
                     <h2>The <i>BEST</i> place to win big!</h2>
                    <h3>Open cases play games, whatever you want to do to win big!</h3>
                </div>
                <div className="picture">
                    <img src={HypeImage} alt="hypeimage"/>
                </div>
                <div className="picture2">
                    <img src={CaseImage} alt="caseimage"/>
                </div>
            </div>
        );
    }
}

export default LandingComponent;