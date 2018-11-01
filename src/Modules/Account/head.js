import { FETCH_USER, REGISTER } from '../types'
import { bankUrl, inventoryUrl } from '../serverconstants'
import { apiCall } from '../../Services/api';

//user state

//reducer
export default (state = [], action) => {
    switch (action.type) {
      case FETCH_USER: 
        return action.payload;
    case REGISTER:
        return action.payload;
      default:
        return state;
    }
};


//actions
export const registerUser = (username, password, email, phonenr) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('post', `${bankUrl}/account/add`, {username, password, email, phonenr})
            .then((req) => {
                dispatch({
                    type: REGISTER,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
};



export const fetchUser = (username) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('GET', `${bankUrl}/account/${username}`)
            .then((req) => {
                dispatch({
                    type: FETCH_USER,
                    payload: req
                })
                resolve(); //API call succeeded
            })
            .catch(e => {
                reject(); //fail!
            })
    })
}

