import React, { Component } from 'react';
import Header from 'Components/Header';
import CaseSlotMachine from './CaseDetails/CaseSlotMachine'
import Footer from 'Components/Footer';
import ReactLoading from 'react-loading';

import Snackbar from "Components/Snackbar/Snackbar.jsx";
import AddAlert from "@material-ui/icons/AddAlert";


import GridContainer from "Components/Grid/GridContainer.jsx";
import Button from "Components/CustomButtons/Button.jsx";

import './CaseDetails/CaseDetails.css';

import { connect } from 'react-redux';
import { fetchCaseByID } from 'Modules/Cases/head';
import { openCaseByID } from 'Modules/CaseOpening/head';
import { fetchItemById } from 'Modules/Item/head';

class CaseDetails extends Component {
    constructor() {
        super();

        this.state = {
            notification: false,
            message: ""
        }

        this.rouletteWheel = React.createRef();
        this.openCase = this.openCase.bind(this);
    }

    componentWillMount() {
        this.props.fetchCaseByID(this.props.match.params.CaseID);
    }

    showNotification(message) {
        this.setState(
            {notification: true, message: message}
        );
    }

    openCase() {
        //make rest call with outcome
        this.props.openCaseByID(this.props.match.params.CaseID).then(res => {    
            console.log(this.props.caseResult);
            this.rouletteWheel.spinWheel(this.props.caseResult.item.itemID);

            this.props.fetchItemById(this.props.caseResult.item.itemID).then(res => {
                //wait for 6 seconds, not the cleanest solution but it is the fastest...
                setTimeout(function() { 
                    //After 6 seconds show a dialog with the result.
                    var message = "Congratulations, you've won : " + this.props.item.name + "\n Worth " + this.props.item.price +  " Euros!";
                    
                    this.showNotification(message);
                }.bind(this), 6000); 
            });
        });
    }
    
    //Renders contents of a case
    RenderContents(items) {
        return (
            items.map(item => (
                <div className="contentitem" key={item.itemID}>
                    <div className="contentimage">
                        {//TODO : item avatar hier maken / achtergrondkleur van rarity en dan gewoon generic placeholder foto erin!
                            //<img src={require(`img/${item.itemavatarurl}`)} alt="itemimage"/>
                        }
                        <img src={require(`img/ItemImages/Placeholdergun.png`)} alt="itemimage"/>
                    </div>
                    <div className="contentinfo">
                        <h1> {item.name}</h1>
                        <h3> €{item.price} </h3>
                    </div>
                </div>
            ))
        );
    }

    render() {
        const { chosencase } = this.props;
        if(chosencase.length == 0 || Array.isArray(chosencase)) {
            return (
                <div>
                    <Header/>
                    <div className="outercontainercase">
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
                        <GridContainer>
                        <CaseSlotMachine items={chosencase.items} onRef={ref => (this.rouletteWheel = ref)}/>
                            <div className="casedetails">
                                <div className="casetop">
                                    <div className="caseimage">
                                        <img src={require(`img/CaseImages/${chosencase.image}`)} className="caseimg" alt="caseimg"/>
                                    </div>
                                    <div className="casename">
                                        <h1>{chosencase.name}  - {chosencase.price} tokens</h1>
                                        <Button color="primary" onClick={this.openCase}> Open Case </Button>
                                    </div>
                                </div>
                                <div className="casebottom">
                                    <div className="casecontentscontainer">
                                        <div className="contentlist">
                                            {this.RenderContents(chosencase.items)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Snackbar
                                place="br"
                                color="info"
                                icon={AddAlert}
                                message={this.state.message}
                                open={this.state.notification}
                                closeNotification={() => this.setState({ notification: false })}
                                close
                            />
                        </GridContainer>
                    </div>
                    <Footer/>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        chosencase: state.cases,
        caseResult : state.caseopening,
        item : state.item
    };
}

export default connect(
    mapStateToProps,
    { fetchCaseByID, openCaseByID, fetchItemById }
)(CaseDetails);