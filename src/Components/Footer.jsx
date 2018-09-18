import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from 'img/templogo.png';

import './Footer/Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer"> 
                <div className="col-md-4 footer-left">
                    <img src={LogoImage} className="logofooter" alt="logo"/>
                    <p className="footer-links">
                        <Link to="/" className="uppercase">Home</Link>
                        <Link to="/" className="uppercase">Cases</Link>
                        <Link to="/" className="uppercase">Home</Link>
                    </p>
                    <p className="footer-company-name">Kiddy Gambles &copy; 2018</p>
                </div>
                <div className="col-md-4 footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Narnia Laan</span> Narnia, Wonderland</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+12 1234 5678</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:contact@grindinggear.com">contact@totallylegitcompany.com</a></p>
                    </div>
                </div>
                <div className="col-md-4 footer-right">
                    <p className="footer-about">
                        <span>About Kiddy Gambles</span>
                        Kiddy Gambles was founded in 2018 with one goal in mind, to make alot of money. Our dream is to be able to randomly quit a year from now. We hope you will help us achieve this goal and achieve true success.
                    </p>
                    <div className="footer-icons">
                        <a><i className="fa fa-facebook"></i></a>
                        <a><i className="fa fa-twitter"></i></a>
                        <a><i className="fa fa-linkedin"></i></a>
                        <a><i className="fa fa-github"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;