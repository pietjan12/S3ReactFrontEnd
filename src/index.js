import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import {Provider} from 'react-redux'

import './css/index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import registerServiceWorker from './registerServiceWorker';
import store from './store'

import Home from 'Pages/Home';
import Cases from 'Pages/Cases';
import Account from 'Pages/Account';
import Login from 'Pages/Login';
import Register from 'Pages/Register';
import CaseDetails from 'Pages/CaseDetails';
import Games from 'Pages/Games';
import HiLow from 'Pages/Games/HiLow'

import { LOGIN } from './Modules/types';
import jwtDecode from 'jwt-decode';

import { setAuthorizationToken } from './Modules/Authentication/head'

//Token controleren
if (localStorage.jwtToken) {
    //restore axios default header sessions
    setAuthorizationToken(localStorage.jwtToken);
    
    // prevent jwtToken tampering
    try {
        store.dispatch({
            type: LOGIN,
            payload : jwtDecode(localStorage.jwtToken)["sub"]
        });
    } catch (err) {
        store.dispatch({
            type: LOGIN,
            payload: ""
        });
    }
}

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/Account" component={Account}/>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Cases" component={Cases} />
            <Route exact path="/Case/:CaseID" component={CaseDetails} />
            <Route exact path="/Games" component={Games} />
            <Route exact path="/Games/HighLow" component={HiLow} />
            </Switch>
        </Provider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
