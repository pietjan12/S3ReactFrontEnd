import React, { Component } from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

import './CaseSlotMachine.css';
import commonItem from '../../img/ItemImages/Rarity/common.jpg';
import uncommonItem from '../../img/ItemImages/Rarity/uncommon.jpg';
import rareItem from '../../img/ItemImages/Rarity/rare.jpg';
import legendaryItem from '../../img/ItemImages/Rarity/legendary.jpg';

import { CaseRoulette } from './CaseRoulette.js';

const styles = {
    wrapper: {
        height: "100px",
        margin: "0 auto",
        marginTop: "50px",
        marginBottom: "50px",
        color: "#fff",
        overflow: "hidden"
    },
    wheel : {
        
    },
    wheelitem: {
        float: "left",
        width: "150px",
        height: "100%",
        color: "white",
        textAlign: "center",
        '& img': {
            width: "100px",
            height: "auto"
        }
    },
    wheelpointer: {
        width: "0",
        height: "50px",
        position: "absolute",
        top: "140px",
        left: "0",
        right: "0",
        margin: "auto",
        borderLeft: "4px solid orange"
    },
    commonItem: {
        background: `url(${commonItem})`,
        backgroundSize: "cover"
    },
    uncommonItem : {
        background: `url(${uncommonItem})`,
        backgroundSize: "cover"
    },
    rareItem : {
        background: `url(${rareItem})`,
        backgroundSize: "cover"
    },
    legendaryItem : {
        background: `url(${legendaryItem})`,
        backgroundSize: "cover"
    },
    '@media only screen and (min-width: 1350px)' : {
        wrapper :{
            width: "1350px"
        }   
    },
    '@media only screen and (max-width: 1349px)' : {
        wrapper :{
            width: "1050px"
        }
    },
    '@media only screen and (max-width: 1049px)' : {
        wrapper :{
            width: "750px"
        }
    },
    '@media only screen and (max-width: 749px)' : {
        wrapper :{
            width: "450px"
        }
    },
    '@media only screen and (max-width: 449px)' : {
        wrapper :{
            width: "150px"
        }
    }
}

class CaseSlotMachine extends Component {
    constructor() {
        super();
        this.spinWheel = this.spinWheel.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this)
        this.roulette = new CaseRoulette(document.getElementById("wheelwrapper"), this.props.items.length, 150, this.props.items);
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
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

    renderBufferItems(items, classes) {
        var rows = [];
        var count = 0;

        for(var i = 0; i < 15; i++) {
            if(count == 4) {
                count = 0;
            }

            var item = items[count];

            rows.push(
            <div className={classes.wheelitem} key={i}>
                <div className={this.renderRarity(item.rarity)}>
                    <img src={require(`img/ItemImages/Placeholdergun.png`)} alt="itemimage"/>
                    <p>{item.name}</p>
                </div>
            </div>
            );

            count++;
        }

        return rows;
    }

    spinWheel(outcomeID) {
        this.roulette.start(outcomeID);
    }

    render() {
        const {items, classes} = this.props;
        //MAPPEN DOOR DE ITEMS
        return (
            <div className={classes.wrapper}>
                <div className={classes.wheel} style={{width : items.length * 150 + 2250}} id="wheelwrapper"> 
                    {items.map(item => (
                        <div className={classes.wheelitem} key={item.itemID}>
                            <div className={this.renderRarity(item.rarity)}>
                                <img src={require(`img/ItemImages/Placeholdergun.png`)} alt="itemimage"/>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))}

                    {this.renderBufferItems(items, classes)}
                </div>
            <div className={classes.wheelpointer}></div>
            </div>
        );
    }
}

CaseSlotMachine.propTypes = {
    items : PropTypes.array.isRequired
}

export default withStyles(styles)(CaseSlotMachine);