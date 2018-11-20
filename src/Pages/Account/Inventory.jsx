import React, { Component } from 'react'
import { withRouter } from "react-router"

import { connect } from 'react-redux'
import { getMyItems } from 'Modules/Inventory/head'

class Inventory extends Component {

    componentWillMount() {
        this.props.getMyItems(this.props.accountid);
    }

    render() {
        const { items } = this.props;
        console.log(items);
        return (
            items.map(item => (
                <div className="contentitem" key={item.id}>
                    <div className="contentimage">
                    { /*<img src={require(`img/${item.}`)} alt="itemimage"/> */}
                    </div>
                    <div className="contentinfo">
                        <h1> {item.itemname}</h1>
                        <h3> €{item.itemprice} </h3>
                    </div>
                </div>
            ))
        );
    }
}

const mapStateToProps = state => {
    //TODO : rename state.account to state.auth.
    return {
        items: state.inventory
    };
}

export default withRouter(connect(
    mapStateToProps,
    { getMyItems }
)(Inventory));