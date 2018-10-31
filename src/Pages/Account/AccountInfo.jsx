import React, { Component } from 'react';

import './AccountInfo.css';

import { connect } from 'react-redux';
import { fetchUser } from 'Modules/Account/head';

class AccountInfo extends Component {
    
    componentWillMount() {
        this.props.fetchUser(this.props.user.user);
    }

    render() {
        const {user} = this.props;
        console.log(user);
        return (
            <div className="innerlogincontainer">
                <form onSubmit={this.onLogin}>
                    <div className="innerloginitem">
                        <h5>username</h5>
                        <input className="username" value={user.username} type="text" required className="validate" onChange={this.handleUserChange}/>
                    </div>
                    <div className="innerloginitem">
                        <h5>password</h5>
                        <input className="password" value={user.password} type="password" required className="validate" onChange={this.handlePassChange}/>
                    </div>
                    <div className="innerloginitem">
                        <h5>email</h5>
                        <input className="email" value={user.email} type="email" required className="validate" onChange={this.handleEmailChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.account
    };
}

export default connect(
    mapStateToProps,
    { fetchUser }
)(AccountInfo);