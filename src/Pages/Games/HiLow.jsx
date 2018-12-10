import React, { Component } from 'react';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import AddAlert from "@material-ui/icons/AddAlert";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { withRouter } from "react-router";
import Card from "Components/Card/Card.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import CustomInput from "Components/CustomInput/CustomInput.jsx";
import Button from "Components/CustomButtons/Button.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";
import CardHeader from "Components/Card/CardHeader.jsx";
import Snackbar from "Components/Snackbar/Snackbar.jsx";

import { Formik } from 'formik';
import { connect } from 'react-redux';
import { HiLowRoll } from 'Modules/HiLow/head';

import cardImages from '../../Services/CardImageHelper'
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
    },
    outerWhiteLine: {
        outline: "2px solid #FFF",
        width: " 100%"
    },
    centerDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};

class HiLow extends Component {
    constructor() {
        super();

        this.state = {
            notification: false,
            message: ""
        }

        if(!localStorage.getItem("lastCard")) {
            localStorage.setItem("lastCard", 5);
        }
    }

    startGame(values) {
        var { choice, bet } = values;
        if(choice != "" && bet > 0) {
            var higher = choice == "higher";

            this.props.HiLowRoll(bet, higher, localStorage.getItem("lastCard")).then(res => {
                localStorage.setItem("lastCard", this.props.hilow.rolledNumber);

                var message = "";
                if(this.props.hilow.won) {
                    message = "Congratulations, you've won " + this.props.hilow.wonTokens + " Tokens!";
                } else {
                    message = "Unlucky, better luck next time!"
                }
    
                this.showNotification(message);
            });
        }
    }

    showNotification(message) {
        this.setState(
            {notification: true, message: message}
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
                                            <CardHeader color="primary">
                                                <h4 className={classes.cardTitleWhite}>Current Card</h4>
                                            </CardHeader>
                                            <CardBody>
                                                    <img className={classes.cardImageStyle} src={cardImages[localStorage.getItem("lastCard")]} alt="cardImage"/>
                                            </CardBody>
                                       </Card>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <Card>
                                                <CardBody>
                                                    <Formik
                                                    initialValues ={{ choice : "", bet: 0}}
                                                    onSubmit={(values, actions) => {
                                                        this.startGame(values);
                                                    }}
                                                    render={({
                                                    values,
                                                    handleChange,
                                                    handleSubmit
                                                    }) => ( 
                                                        <div>
                                                            <form onSubmit={handleSubmit}>
                                                                <FormControl className={classes.formControl}>
                                                                    <InputLabel className={classes.whiteColor}>Higher / Lower</InputLabel>
                                                                    <Select
                                                                        name="choice"
                                                                        className={classes.whiteColor}
                                                                        value={values.choice}
                                                                        onChange={handleChange}
                                                                        input={<Input id="select-multiple-chip" />}
                                                                        renderValue={selected => (
                                                                        <div className={classes.chips}>
                                                                            <Chip key={selected} label={selected} className={classes.chip} />
                                                                        </div>
                                                                        )}
                                                                    >
                                                                        <MenuItem key="higher" value="higher">Higher</MenuItem>
                                                                        <MenuItem key="lower" value="lower">lower</MenuItem>
                                                                    </Select>
                                                                    <CustomInput
                                                                        labelText="Bet Amount"
                                                                        id="bet"
                                                                        formControlProps={{
                                                                            fullWidth: true
                                                                        }}
                                                                        value={values.bet}
                                                                        onChange={handleChange}
                                                                    />
                                                                    <Button type="submit" color="primary">Bet</Button>
                                                                </FormControl>
                                                            </form>
                                                        </div>
                                                    )}
                                                    />
                                                </CardBody>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
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
        );
    }
}

const mapStateToProps = state => {
    //TODO : rename state.account to state.auth.
    return {
        hilow : state.hilow
    };
  }


export default withRouter(connect(mapStateToProps, { HiLowRoll })(withStyles(styles)(HiLow)));