import React, { Component } from 'react';
import { withRouter } from "react-router";

import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import AddAlert from "@material-ui/icons/AddAlert";

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Card from "Components/Card/Card.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import CustomInput from "Components/CustomInput/CustomInput.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import Button from "Components/CustomButtons/Button.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";
import Snackbar from "Components/Snackbar/Snackbar.jsx";

import { RouletteWheel } from './Roulette.js';
import './Roulette.css';
import { Formik } from 'formik';

import { connect } from 'react-redux';
import { rouletteRoll } from 'Modules/Roulette/head';

const numbers = [
    "Red", "Black", "Green", 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36
]

const styles = {
    margin: {
        margin: "40px"
    },
    headerWhite: {
        color: "rgba(255,255,255,.7)",
        marginBottom: "30px"
    },
    textWhite: {
        color: "#fff"
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        width: "100%" 
    }
}

class Roulette extends Component {
    constructor() {
        super();

        this.state = {
            notification: false,
            message: ""
        }
    }

    showNotification(message) {
        this.setState(
            {notification: true, message: message}
        );
    }

    startGame(values) {
        //get value from select input, could be int or string
        var intChoice = -1;
        var stringChoice = "";

        if(Number.isInteger(values.choices)) {
            intChoice = values.choices;
        } else {
            stringChoice = values.choices;
        }

        this.props.rouletteRoll(values.bet, intChoice, stringChoice).then(res => {
            this.rollWheel(this.props.roulette.rolledNumber);
        });
    }

    rollWheel(id) {  
        var rouletteWheel = new RouletteWheel();
        rouletteWheel.start(id);

        //wait for 6 seconds, not the cleanest solution but it is the fastest...
        setTimeout(function() { 
            //After 6 seconds show a dialog with the result.
            var message = "";
            if(this.props.roulette.won) {
                message = "Congratulations, you've won " + this.props.roulette.wonTokens + " Tokens!";
            } else {
                message = "Unlucky, better luck next time!"
            }

            this.showNotification(message);
        }.bind(this), 6000)
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
                                <h1 className={classes.headerWhite}>Roulette</h1>
                            </GridItem>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <GridContainer>
                                       <Card>
                                           <CardBody>
                                           <div className="wheel">
                                                <div className="wheel-wrapper">
                                                    <div className="wheel-item wheel-green">
                                                        <p>0</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>32</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>15</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>19</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>4</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>21</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>2</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>25</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>17</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>34</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>6</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>27</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>13</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>36</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>11</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>30</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>8</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>23</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>10</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>5</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>24</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>16</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>33</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>1</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>20</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>14</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>31</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>9</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>22</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>18</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>29</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>7</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>28</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>12</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>35</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>3</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>26</p>
                                                    </div>

                                                    { /* Repeat some of the earliest numbers, translateX is reset before they can be hit but otherwise the player might see some blank spaces. */ }
                                                    <div className="wheel-item wheel-green">
                                                        <p>0</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>32</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>15</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>19</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>4</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>21</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>2</p>
                                                    </div>

                                                     <div className="wheel-item wheel-red">
                                                        <p>25</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>17</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>34</p>
                                                    </div>

                                                    <div className="wheel-item wheel-black">
                                                        <p>6</p>
                                                    </div>

                                                    <div className="wheel-item wheel-red">
                                                        <p>27</p>
                                                    </div>
                                                    { /* Repeat some of the earliest numbers, translateX is reset before they can be hit but otherwise the player might see some blank spaces. */ }
                                                </div>
                                            </div>
                                            <div className="wheel-pointer"></div>
                                           </CardBody>
                                       </Card>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <Card>
                                        <CardBody>
                                            <Formik
                                            initialValues ={{ bet : 0, choices : []}}
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
                                                        <InputLabel className={classes.textWhite}>Choices</InputLabel>
                                                        <Select
                                                            name="choices"
                                                            className={classes.textWhite}
                                                            value={values.choices}
                                                            onChange={handleChange}
                                                            input={<Input id="select-multiple-chip" />}
                                                            renderValue={selected => (
                                                            <div className={classes.chips}>
                                                                <Chip key={selected} label={selected} className={classes.chip} />
                                                            </div>
                                                            )}
                                                        >
                                                            {numbers.map(number => (
                                                            <MenuItem key={number} value={number}>
                                                                {number}
                                                            </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
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
                                                </form>
                                            </div>
                                            )}
                                            />
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
        );
    }
}

const mapStateToProps = state => {
    //TODO : rename state.account to state.auth.
    return {
        roulette : state.roulette
    };
}


export default withRouter(connect(mapStateToProps, { rouletteRoll })(withStyles(styles)(Roulette)));