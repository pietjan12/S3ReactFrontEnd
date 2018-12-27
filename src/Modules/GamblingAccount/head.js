import {BUY_TOKENS, GET_ACCOUNT} from '../types.js'
import { apiCall } from '../../Services/api';
import { gamblingUrl } from '../serverconstants'

//reducer
export default (state = [], action) => {
    switch (action.type) {
        case BUY_TOKENS:
            return action.payload;
        case GET_ACCOUNT:
            return action.payload;
        default:
            return state;
    }
};

export const buyTokens = (tokenAmount, senderID) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('post', `${gamblingUrl}/tokens`, {amount: tokenAmount, senderID})
            .then((req) => {
                dispatch({
                    type: BUY_TOKENS,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
};

export const fetchUser = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('get', `${gamblingUrl}/accounts/${id}`)
            .then((req) => {
                dispatch({
                    type: GET_ACCOUNT,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
};