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
import CardBody from "Components/Card/CardBody.jsx";

import './Games/Games.css';

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
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <h1> Games List</h1>
                        </GridItem>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>GAME NAME</h4>
                                    <p className={classes.cardCategoryWhite}>GAME NAME</p>
                                </CardHeader>
                                <CardBody>
                                    <Link to="/"  className="nav-link uppercase">GO TO GAMENAME</Link>
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