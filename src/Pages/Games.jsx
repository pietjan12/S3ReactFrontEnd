import React, { Component } from 'react';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { Link } from 'react-router-dom';

import GridItem from "Components/Grid/GridItem.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";
import Card from "Components/Card/Card.jsx";
import CardHeader from "Components/Card/CardHeader.jsx";
import CardAvatar from "Components/Card/CardAvatar.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import Button from "Components/CustomButtons/Button.jsx";

import './Games/Games.css';

import cardImage from "img/GameImages/hilow.png"
import rouletteImage from "img/GameImages/roulette.png"

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
        color: "#FFF"
    }
};

class Games extends Component {
    render() {
        const { classes } = this.props;
        return(
            <div>
                <Header/>
                <div className="outercontainer">
                    <div className="outermargin">
                    <GridContainer className="fullwidth">
                        <GridItem xs={12} sm={12} md={12}>
                            <h1 className={classes.headerWhite}>Games List</h1>
                        </GridItem>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={3}>
                                <Card>
                                <CardAvatar profile>
                                    <a href="#">
                                    <img src={cardImage} alt="hi/low" />
                                    </a>
                                </CardAvatar>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>Higher / Lower</h4>
                                    <p className={classes.cardCategoryWhite}>guess if the next card is going to be higher or lower.</p>
                                </CardHeader>
                                <CardBody>
                                <Button color="primary">
                                        <Link to="/Games/HighLow" className={classes.linkWhite}>Play Hi/Low</Link>
                                    </Button>
                                </CardBody>
                                </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                                <Card>
                                <CardAvatar profile>
                                    <a href="#">
                                    <img src={rouletteImage} alt="Roulette" />
                                    </a>
                                </CardAvatar>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>Roulette</h4>
                                    <p className={classes.cardCategoryWhite}>Spin that wheel.</p>
                                </CardHeader>
                                <CardBody>
                                    <Button color="primary">
                                        <Link to="/" className={classes.linkWhite}>Play Roulette</Link>
                                    </Button>
                                </CardBody>
                                </Card>
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

export default withStyles(styles)(Games);