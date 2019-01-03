import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

import Header from 'Components/Header';
import CaseSlotMachine from './CaseDetails/CaseSlotMachine'
import Footer from 'Components/Footer';
import ReactLoading from 'react-loading';
import SockJsClient from 'react-stomp';

import Snackbar from "Components/Snackbar/Snackbar.jsx";
import AddAlert from "@material-ui/icons/AddAlert";


import GridContainer from "Components/Grid/GridContainer.jsx";
import Button from "Components/CustomButtons/Button.jsx";

import './CaseDetails/CaseDetails.css';
import commonItem from '../img/ItemImages/Rarity/common.jpg';
import uncommonItem from '../img/ItemImages/Rarity/uncommon.jpg';
import rareItem from '../img/ItemImages/Rarity/rare.jpg';
import legendaryItem from '../img/ItemImages/Rarity/legendary.jpg';

import { connect } from 'react-redux';
import { fetchCaseByID } from 'Modules/Cases/head';
import { openCaseByID } from 'Modules/CaseOpening/head';
import { fetchItemById } from 'Modules/Item/head';

const styles = {
    commonItem: {
        background: `url(${commonItem})`,
        backgroundSize: "cover",
        width: "inherit",
        height: "inherit"
    },
    uncommonItem : {
        background: `url(${uncommonItem})`,
        backgroundSize: "cover",
        width: "inherit",
        height: "inherit"
    },
    rareItem : {
        background: `url(${rareItem})`,
        backgroundSize: "cover",
        width: "inherit",
        height: "inherit"
    },
    legendaryItem : {
        background: `url(${legendaryItem})`,
        backgroundSize: "cover",
        width: "inherit",
        height: "inherit"
    },
    scrollitem : {
        position: "relative",
        zIndex : "0",
        display: "inline-block",
        width: "150px",
        height: "120px",
        flex: "0 0 auto",
        color: "#fff",
        textAlign: "center",
        '& img': {
            width: "100px",
            height: "auto",
        }
    },
    scrollHeader: {
        color: "rgba(255,255,255,.7)",
        marginTop : "50px",
        marginLeft : "50px"
    }
}



class CaseDetails extends Component {
    constructor() {
        super();

        this.state = {
            notification: false,
            message: "",
            messages: []
        }

        this.rouletteWheel = React.createRef();
        this.openCase = this.openCase.bind(this);
        this.onMessageReceived = this.onMessageReceived.bind(this);
    }

    componentWillMount() {
        this.props.fetchCaseByID(this.props.match.params.CaseID);
    }

    renderRarity(rarity) {
        const {classes} = this.props;
        switch(rarity) {
            case "COMMON":
                return classes.commonItem;
            case "UNCOMMON":
                return classes.uncommonItem;
            case "RARE":
                return classes.rareItem;
            case "LEGENDARY":
                return classes.legendaryItem;
            default:
                return "";
        }
    }

    onMessageReceived(message) {
        console.log(message);
        this.setState(prevState => ({
            messages: [message, ...prevState.messages]
        }));
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

                    //send message to websocket server
                    var itemMessage = {
                        itemID : this.props.item.itemID,
                        name : this.props.item.name,
                        price : this.props.item.price,
                        rarity : this.props.caseResult.item.rarity
                    };
                    this.sendMessage(itemMessage);
                }.bind(this), 6000); 
            });
        });
    }

    //send a stomp message
    sendMessage = (msg) => {
        this.clientRef.sendMessage(`/app/${this.props.match.params.CaseID}/items`, JSON.stringify(msg));
    }

    //Render the recent wins from database.
    RenderWinHistory(history) {
        const {classes} = this.props;
        return (
            <div className="scroll">
                {
                    //map websocket elements
                    this.state.messages.map(item => (
                        <div className={classes.scrollitem} key={item.msgID}>
                            <div className={this.renderRarity(item.item.rarity)}>
                                <img src={require(`img/ItemImages/Placeholdergun.png`)} alt="itemimage"/>
                                <div>{item.item.name}</div>
                                <div>{item.item.price} tokens</div>
                            </div>
                        </div>
                    ))
                }
                {
                    history.map(historyItem => (
                        <div className={classes.scrollitem} key={historyItem.id}>
                            <div className={this.renderRarity(historyItem.item.rarity)}>
                                <img src={require(`img/ItemImages/Placeholdergun.png`)} alt="itemimage"/>
                                <div>{historyItem.item.name}</div>
                                <div>{historyItem.item.price} tokens</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
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
        const { chosencase, classes } = this.props;
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
                        <h1 className={classes.scrollHeader}> Recent wins </h1>
                        {this.RenderWinHistory(chosencase.history)}

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
                        <SockJsClient url='http://localhost:8080/websocket' topics={[`/topic/${this.props.match.params.CaseID}/items`]}
                            onMessage={this.onMessageReceived}
                            ref={ (client) => { this.clientRef = client }} 
                        />
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
)(withStyles(styles)(CaseDetails));