import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Header/Avatar.jsx';

import LogoImage from 'img/templogo.png';
import './Header/Header.css'

import { connect } from 'react-redux';

class Header extends Component {
    render() {
        const {user} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark nav-bg">   
                <img className="navbar-brand logo" src={LogoImage} alt="logo"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <div className="nav-item">
                            <Link to="/" className="nav-link uppercase">Home</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/Cases" className="nav-link uppercase">Cases</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/Games" className="nav-link uppercase">Games</Link>
                        </div>
                    </ul>
                        {console.log("header user : " + user.user)}
                    {   
                        user.isAuthenticated ? 
                        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                            <Avatar name={user.user}/>
                        </ul> 
                        :
                        <div className="nav-item justify-content-end w-100">
                            <Link to="/Login"  className="nav-link uppercase">Login</Link>
                        </div>
                    }
                </div>

            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.account
    };
}

export default connect(
    mapStateToProps,
    null
)(Header);