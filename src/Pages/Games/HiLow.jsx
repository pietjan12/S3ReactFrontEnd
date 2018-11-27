import React, { Component } from 'react';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { withRouter } from "react-router";

import Card from "Components/Card/Card.jsx";
import CardHeader from "Components/Card/CardHeader.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import Button from "Components/CustomButtons/Button.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";

import { connect } from 'react-redux';
import emptyImage from 'img/CardImages/leeg.png'
import higher from 'img/GameImages/hilow/higher.png'
import lower from 'img/GameImages/hilow/lower.png'

import './HiLow.css'

const styles = {
    headerWhite: {
        color: "rgba(255,255,255,.7)",
        marginBottom: "30px"
    },
    margin: {
        margin: "40px"
    },
    whiteColor: {
        color: "#fff"
    },
    cardImageStyle: {
        maxWidth: "40vw",
        height: "40vh",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    choiceImageStyle: {
        maxWidth: "20vw",
        height: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto" 
    }
};

class HiLow extends Component {
    constructor() {
        super();

        this.state = {
            choice : "",
            betamount : 0
        }

        this.ChangeChoice = this.ChangeChoice.bind(this);
    }

    ChangeChoice(choice) {
        //Change state
        this.setState(
            { Choice : choice},
            () => console.log(this.state.Choice)
        );
    }


    render() {
        const {classes} = this.props;
        return (
        <div>
            <Header/>
                <div className="outercontainer">
                    <div className={classes.margin}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <h1 className={classes.headerWhite}>Higher/Lower</h1>
                            </GridItem>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <GridContainer>
                                       <Card>
                                           <CardBody>
                                                <img className={classes.cardImageStyle} src={emptyImage} alt="cardImage"/>
                                           </CardBody>
                                       </Card>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <Card>
                                                <CardBody>
                                                    <GridContainer>
                                                        <GridItem xs={12} sm={12} md={12}>
                                                            <div onClick={() => this.ChangeChoice("higher")}>
                                                                <img className={classes.choiceImageStyle} src={higher} alt="higher"/>
                                                            </div>
                                                        </GridItem>
                                                        <div className="marginBottomChoice" />
                                                        <GridItem xs={12} sm={12} md={12}>
                                                            <div onClick={() => this.ChangeChoice("lower")}>
                                                                <img className={classes.choiceImageStyle} src={lower} alt="lower"/>
                                                            </div>
                                                        </GridItem>
                                                    </GridContainer>
                                                </CardBody>
                                            </Card>
                                           
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <Card>
                                                <CardBody>
                                                    <h1 className={classes.whiteColor}> hier komt higher lower bet gedeelte en "submit" knop ofzo</h1>
                                                </CardBody>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </GridContainer>
                    </div>
                </div>
            <Footer/>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        
    };
}

export default withRouter(connect(mapStateToProps, {})(withStyles(styles)(HiLow)));