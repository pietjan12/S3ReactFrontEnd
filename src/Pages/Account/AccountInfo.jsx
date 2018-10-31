import React, { Component } from 'react';

import './AccountInfo.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import { fetchUser, logoutUser } from 'Modules/Account/head';

class AccountInfo extends Component {
    
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        this.props.fetchUser(this.props.user.user);
    }

    logout() {
        this.props.logoutUser();
        console.log(this.props.history);
    }

    render() {
        const {user} = this.props;
        console.log(user);
        return (
            <div className="innerlogincontainer">
                    <div className="innerloginitem">
                        <h5>username</h5>
                        <form onSubmit={this.changeUsername}>
                            <div className="userinput">
                                <TextField
                                    id="username"
                                    value={user.username}
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <Button type="submit" variant="contained" color="secondary">Change username</Button>
                        </form>
                    </div>
                    <div className="innerloginitem">
                        <h5 className="noinput">password</h5>
                        <form onSubmit={this.changePass}>
                            <div className="userinput">
                                <TextField
                                    id="username"
                                    value=""
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChangePassFirst}
                                />
                            </div>
                            <div className="userinput">
                                <TextField
                                    id="username"
                                    value=""
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.onChangePassConfirm}
                                />
                            </div>
                            <Button type="submit" variant="contained" color="secondary">Change password</Button>
                        </form>
                        {  /* <input className="password" value={user.password} type="password" required className="validate"/> */ }
                    </div>
                    <div className="innerloginitem">
                        <h5>email</h5>
                        <form onSubmit={this.changeEmail}>
                            <div className="userinput">
                                <TextField
                                    id="email"
                                    value={user.email}
                                    type="email"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <Button type="submit" variant="contained" color="secondary">Change email</Button>
                        </form>
                    </div>
                <div className="innerloginitem">
                    <button onClick={this.logout}> Logout </button>
                </div>
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
    { fetchUser, logoutUser }
)(AccountInfo);