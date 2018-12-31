import React, { Component } from 'react';

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import CaseListComponent from './Cases/CaseListComponent';
import './Cases/Cases.css';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { fetchHotCases } from 'Modules/Cases/head';

class Cases extends Component {
    componentWillMount() {
        this.props.fetchHotCases();
    }

    render() {
        const { caselist } = this.props;
        if(caselist.length === 0 || !Array.isArray(caselist)) {
            console.log("loading" )
            //return loading screen while redux action finishes.
            return (
                <div>
                    <Header/>
                    <div className="outercontainer">
                        <ReactLoading type="bubbles" color="#fff" height={'50px'} width={'50px'} className="centered"/>
                    </div>
                    <Footer/>
                </div>
            );
        } else {
        return (
            <div>   
                <Header/>
                <div className="outercontainer">
                    <div className="hotcases">
                        <h1> Hot Cases </h1>
                        <CaseListComponent Cases={caselist}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
        }
    }
}

const mapStateToProps = state => {
    return {
        caselist: state.cases
    };
}

export default connect(
    mapStateToProps,
    { fetchHotCases }
)(Cases);