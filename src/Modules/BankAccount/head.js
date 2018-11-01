import {LINK_TO_BANKACCOUNT, CREATE_BANKACCOUNT} from '../types.js'
import { apiCall } from '../../Services/api';
import { bankUrl } from '../serverconstants'

//reducer
export default (state = [], action) => {
    switch (action.type) {
        case LINK_TO_BANKACCOUNT:
            return action.payload;
        case CREATE_BANKACCOUNT:
            return action.payload;
        default:
            return state;
    }
};

export const registerBankAccount = (accountname) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('post', `${bankUrl}/bank/create`, {accountname})
            .then((req) => {
                dispatch({
                    type: CREATE_BANKACCOUNT,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
};

export const linkToMyBankAccount = (otherAccountID, bankAccountID) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('post', `${bankUrl}/bank/link`, {otherAccountID, bankAccountID})
            .then((req) => {
                dispatch({
                    type: LINK_TO_BANKACCOUNT,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
}
