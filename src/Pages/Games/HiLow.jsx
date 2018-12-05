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
import CardHeader from "Components/Card/CardHeader.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import CustomInput from "Components/CustomInput/CustomInput.jsx";
import Button from "Components/CustomButtons/Button.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";

import { connect } from 'react-redux';
import emptyImage from 'img/CardImages/leeg.png'
import higher from 'img/GameImages/hilow/higher.png'
import lower from 'img/GameImages/hilow/lower.png'

import { Formik } from 'formik';

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
                                                    <Formik
                                                    initialValues ={{ choice : "", bet: 0}}
                                                    onSubmit={(values, actions) => {
                                                        console.log("values");
                                                    }}
                                                    render={({
                                                    values,
                                                    handleChange,
                                                    handleSubmit
                                                    }) => ( 
                                                        <div>
                                                            <form onSubmit={handleChange}>
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