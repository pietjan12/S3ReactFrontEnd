import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux'
import thunk from 'redux-thunk';

import casesHead from 'Modules/Cases/head';
import accountHead from 'Modules/Account/head';

const rootReducer = combineReducers({
  cases: casesHead,
  account: accountHead
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;