import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import customInputStyle from "./SpinningMechanic.css";

const

function SpinningMechanic({ ...props }) {
    const {
        outerClass,
        wrapperClass,
        ItemClass,
        Items
    } = props;

    var i = 0;
    var ItemsList = Items.map(function(item){
        <div className={ItemClass}>
            <h1>item.name</h1>
        </div>
    });

    return (
        <div className={outerClass}>
            <div className={wrapperClass}>
                {ItemsList}
            </div>
        </div>
    );
}  

CustomInput.propTypes = {
    outerClass : PropTypes.object.isRequired,
    wrapperClass : PropTypes.object.isRequired,
    ItemClass : PropTypes.object.isRequired,
    Items: PropTypes.object.isRequired
  };
  
  export default withStyles(customInputStyle)(CustomInput);