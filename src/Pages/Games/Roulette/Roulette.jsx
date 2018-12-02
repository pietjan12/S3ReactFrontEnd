import React, { Component } from 'react';

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

import { RouletteWheel } from './Roulette.js';
import './Roulette.css';

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
    }
}

class Roulette extends Component {
    rollWheel() {
        //make redux call for id / and if we won or not.

        //start the visual roulette spin with id returned from redux -> for testing we'll use 5
        var rouletteWheel = new RouletteWheel();
        
        //Even when spinning in succession, we will get the correct result.
        rouletteWheel.start(5);
        
        //show dialog if they have won something / lost something.

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
                                            <Button color="primary" onClick={this.rollWheel}>Test</Button>
                                        { /*<InputLabel htmlFor="age-simple">Choice</InputLabel>
                                        <Select
                                            value=""
                                            onChange={this.handleChange}
                                            inputProps={{
                                            name: 'choice',
                                            id: 'choice-simple',
                                            }}
                                        >
                                            <MenuItem value="">
                                            <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select> */}
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

export default withStyles(styles)(Roulette);