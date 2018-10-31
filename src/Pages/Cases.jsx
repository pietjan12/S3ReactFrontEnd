import React, { Component } from 'react';

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import CaseListComponent from './Cases/CaseListComponent';
import './Cases/Cases.css';

import { connect } from 'react-redux';
import { fetchHotCases } from 'Modules/Cases/head';

class Cases extends Component {
    componentWillMount() {
        this.props.fetchHotCases();
    }

    render() {
        const { caselist } = this.props;
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

const mapStateToProps = state => {
    return {
        caselist: state.cases
    };
}

export default connect(
    mapStateToProps,
    { fetchHotCases }
)(Cases);