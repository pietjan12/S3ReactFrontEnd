import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux'
import thunk from 'redux-thunk';

import casesHead from 'Modules/Cases/head';
import authorizationHead from 'Modules/Authentication/head';
import usersHead from 'Modules/Account/head';
import inventoryHead from 'Modules/Inventory/head'
import rouletteHead from 'Modules/Roulette/head'

const rootReducer = combineReducers({
  cases: casesHead,
  account: authorizationHead,
  users: usersHead,
  inventory : inventoryHead,
  roulette : rouletteHead
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;