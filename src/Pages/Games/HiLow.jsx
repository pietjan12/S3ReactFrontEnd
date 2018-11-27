import React, { Component } from 'react';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { Link } from 'react-router-dom';

import GridItem from "Components/Grid/GridItem.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";

import { connect } from 'react-redux';

import './HiLow.css'

const styles = {
};

class HiLow extends Component {
    componentWillMount() {

    }


    render() {
        <div>
            <Header/>
                <h1>HILOW</h1>
            <Footer/>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        gambleSystem: state.gambleSystem,
        account: state.account
    };
  }

export default withRouter(connect(mapStateToProps, {})(withStyles(styles)(HiLow)));