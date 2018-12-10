import React, { Component } from 'react';

import Header from 'Components/Header';
import CaseSlotMachine from './CaseDetails/CaseSlotMachine'
import Footer from 'Components/Footer';

import './CaseDetails/CaseDetails.css';

import { connect } from 'react-redux';
import { fetchCaseByID } from 'Modules/Cases/head';


class CaseDetails extends Component {
    componentWillMount() {
        this.props.fetchCaseByID(this.props.match.params.CaseID);
    }
    
    //Renders contents of a case
    RenderContents(mycase) {
        return (
            mycase.casecontents.map(item => (
                <div className="contentitem" key={item.itemid}>
                    <div className="contentimage">
                        <img src={require(`img/${item.itemavatarurl}`)} alt="itemimage"/>
                    </div>
                    <div className="contentinfo">
                        <h1> {item.itemname}</h1>
                        <h3> €{item.itemprice} </h3>
                    </div>
                </div>
            ))
        );
    }

    render() {
        const { chosencase } = this.props;

        if(chosencase.length > 0) {
            var mycase = chosencase[0];
            return (
                <div>
                    <Header/>
                    <div className="outercontainercase">
                        <CaseSlotMachine/>
                        <div className="casedetails">
                            <div className="casetop">
                                <div className="caseimage">
                                    <img src={require(`img/${mycase.caseavatarurl}`)} alt="caseimage"/>
                                </div>
                                <div className="casename">
                                    <h1>{mycase.casename}</h1>
                                </div>
                            </div>
                            <div className="casebottom">
                                <div className="casecontentscontainer">
                                    <div className="contentlist">
                                        {this.RenderContents(mycase)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <Footer/>
                </div>
            );
        } else {
            return(
                <div>
                    <Header/>
                    <div>
                        Loading...
                    </div>
                    <Footer/>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        chosencase: state.cases
    };
}

export default connect(
    mapStateToProps,
    { fetchCaseByID }
)(CaseDetails);