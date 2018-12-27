import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CustomDropdown from './CustomDropdown/CustomDropdown'
import LogoImage from 'img/templogo.png';
import AvatarImage from 'img/tempavatar.png';
import './Header/Header.css'
import navbarsStyle from "css/navbarsStyle.jsx";

import withStyles from "@material-ui/core/styles/withStyles";

import { connect } from 'react-redux';
import { fetchUser } from 'Modules/GamblingAccount/head';

class Header extends Component {
    componentWillMount() {
        //fetch user details by username stored in authentication.
        this.props.fetchUser(this.props.user.user.id);
    }

    render() {
        const {user, gamblingAccount, classes} = this.props;
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
                        {   
                        user.isAuthenticated ? 
                        <ul className="nav navbar-nav ml-auto w-300 justify-content-end dropdown">
                            <CustomDropdown
                                right
                                caret={false}
                                buttonText={
                                    <img
                                    src={AvatarImage}
                                    className={classes.img}
                                    alt="profile"
                                    />
                                }
                                buttonProps={{
                                    className:
                                    classes.navLink + " " + classes.imageDropdownButton,
                                    color: "transparent"
                                }}
                                dropdownList={[
                                    <Link to="/Account">
                                        {user.user.username}
                                    </Link>,
                                     <Link to="/Tokens">
                                        {gamblingAccount.tokens} tokens
                                     </Link>
                                ]}
                            />
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
        user: state.account,
        gamblingAccount: state.gamblingAccount
    };
}

export default connect(
    mapStateToProps,
    {fetchUser}
)(withStyles(navbarsStyle)(Header));