import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CaseListComponent.css';

class CaseListComponent extends Component {
    render() {
        const { Cases } = this.props;  
        return (
            <div className="listcontainer">
                {Cases.map(item => (
                    <div className="casecontainer" key={item.id}>
                        <Link to={`/Case/`+item.id}>
                            <div className="top">
                                <img src={require(`img/CaseImages/${item.image}`)} className="caseimg" alt="caseimg"/>
                            </div>
                            <div className="bottom">
                                <h3>{item.name} - {item.price} Tokens</h3>
                                <h4>{item.description}</h4>
                            </div> 
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default CaseListComponent;