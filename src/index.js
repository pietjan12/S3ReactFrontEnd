import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'

import './css/index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import registerServiceWorker from './registerServiceWorker';
import store from './store'

import Home from 'Pages/Home';
import Cases from 'Pages/Cases';
import Account from 'Pages/Account';
import CaseDetails from 'Pages/CaseDetails';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Account" component={Account} />
            <Route exact path="/Cases" component={Cases} />
            <Route exact path="/Case/:CaseID" component={CaseDetails} />
            </Switch>
        </Provider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
