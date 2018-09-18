import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CaseListComponent.css';

class CaseListComponent extends Component {
    render() {
        const { Cases } = this.props;  
        return (
            <div className="listcontainer">
                {Cases.map(item => (
                    <div className="casecontainer" key={item.caseid}>
                        <Link to={`/Case/`+item.caseid}>
                            <div className="top">
                                <img src={require(`img/${item.caseavatarurl}`)} className="caseimg" alt="caseimg"/>
                            </div>
                            <div className="bottom">
                                <h3>{item.casename}</h3>
                                <h4>{item.casedescription}</h4>
                            </div> 
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default CaseListComponent;