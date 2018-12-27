import React, { Component } from 'react';

import Header from 'Components/Header';
import Footer from 'Components/Footer';

import { withStyles } from '@material-ui/core';
import AddAlert from "@material-ui/icons/AddAlert";

import smallStack from 'img/TokenImages/smallstack.png'
import mediumStack from 'img/TokenImages/mediumstack.png'
import largeStack from 'img/TokenImages/largestack.png'
import maxStack from 'img/TokenImages/maxstack.png'

import GridItem from "Components/Grid/GridItem.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";
import Card from "Components/Card/Card.jsx";
import CardHeader from "Components/Card/CardHeader.jsx";
import CardAvatar from "Components/Card/CardAvatar.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import Button from "Components/CustomButtons/Button.jsx";
import Snackbar from "Components/Snackbar/Snackbar.jsx";


import { connect } from 'react-redux';
import { buyTokens } from 'Modules/GamblingAccount/head';
import { fetchUser } from 'Modules/Account/head';

const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    },
    headerWhite: {
        color: "rgba(255,255,255,.7)",
        marginBottom: "30px"
    },
    linkWhite: {
        color: "#FFF",
        '&:hover': {
            color: "#fff",
            textDecoration: "none"  
        }
    }
};

class BuyTokens extends Component {
    constructor() {
        super();

        this.state = {
            notification: false,
            message: ""
        }
    }

    componentWillMount() {
        this.props.fetchUser(this.props.account.user.username);
    }

    showNotification(message) {
        this.setState(
            {notification: true, message: message}
        );
    }

    buyTokens(amount) {
        //get sender bank ID
        if(this.props.user.bankAccounts.length > 0) {   
            this.props.buyTokens(amount, this.props.user.bankAccounts[0].id).then(res => {
                this.showNotification("Successfully bought " + amount + " tokens!")
            });
        } else {
            this.showNotification("No bank account linked")
        }
    }

    render() {
        const {classes} = this.props;
        return(
            <div>
                <Header/>
                <div className="outercontainer">
                    <div className="outermargin">
                        <GridContainer className="fullwidth">
                            <GridItem xs={12} sm={12} md={12}>
                                <h1 className={classes.headerWhite}>Buy Tokens</h1>
                            </GridItem>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                    <Card>
                                        <CardAvatar profile>
                                            <img src={smallStack} alt="500"/>
                                        </CardAvatar>
                                        <CardHeader color="primary">
                                            <h4 className={classes.cardTitleWhite}>500 tokens - €5,00 </h4>
                                        </CardHeader>
                                        <CardBody>
                                            <Button color="primary" onClick={() => this.buyTokens(500)}>
                                                BUY   
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                    <Card>
                                        <CardAvatar profile>
                                            <img src={mediumStack} alt="500" />
                                        </CardAvatar>
                                        <CardHeader color="primary">
                                            <h4 className={classes.cardTitleWhite}>1100 tokens - €10,00</h4>
                                        </CardHeader>
                                        <CardBody>
                                            <Button color="primary" onClick={() => this.buyTokens(1100)}>
                                                BUY   
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                     <Card>
                                        <CardAvatar profile>
                                            <img src={largeStack} alt="500"/>
                                        </CardAvatar>
                                        <CardHeader color="primary">
                                            <h4 className={classes.cardTitleWhite}>2200 tokens - €20,00</h4>
                                        </CardHeader>
                                        <CardBody>
                                            <Button color="primary" onClick={() => this.buyTokens(2200)}>
                                                BUY   
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                     <Card>
                                        <CardAvatar profile>
                                            <img src={maxStack} alt="500" />
                                        </CardAvatar>
                                        <CardHeader color="primary">
                                            <h4 className={classes.cardTitleWhite}>4400 tokens - €40,00</h4>
                                        </CardHeader>
                                        <CardBody>
                                            <Button color="primary" onClick={() => this.buyTokens(4400)}>
                                                BUY
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            </GridContainer>
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
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users,
        account : state.account,
        gamblingAccount: state.gamblingAccount
    };
}

export default connect(
    mapStateToProps,
    {buyTokens, fetchUser}
)(withStyles(styles)(BuyTokens));