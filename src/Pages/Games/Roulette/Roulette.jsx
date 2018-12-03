import React, { Component } from 'react';
import { withRouter } from "react-router";

import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Card from "Components/Card/Card.jsx";
import CardHeader from "Components/Card/CardHeader.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import CustomInput from "Components/CustomInput/CustomInput.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import Button from "Components/CustomButtons/Button.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";

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

    startGame(values) {
        //split ints and strings choices and pass them seperately to rest API.
        var intChoices = values.choices.filter(function(item) {
            return (parseInt(item) == item);
        });
    
        var stringChoices = values.choices.filter(function(item) {
            return intChoices.indexOf(item) === -1;
        });

        this.props.rouletteRoll(values.bet, intChoices, stringChoices);
        //redux call
        //this.rollWheel(5);
    }


    rollWheel(id) {
        //start the visual roulette spin with id returned from redux -> for testing we'll use 5
        var rouletteWheel = new RouletteWheel();
        
        //Even when spinning in succession, we will get the correct result.
        rouletteWheel.start(id);
        
        

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
                                                    <Button color="primary" onClick={this.rollWheel}>Test</Button>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel className={classes.textWhite}>Choices</InputLabel>
                                                        <Select
                                                            name="choices"
                                                            className={classes.textWhite}
                                                            multiple
                                                            value={values.choices}
                                                            onChange={handleChange}
                                                            input={<Input id="select-multiple-chip" />}
                                                            renderValue={selected => (
                                                            <div className={classes.chips}>
                                                                {selected.map(value => (
                                                                <Chip key={value} label={value} className={classes.chip} />
                                                                ))}
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