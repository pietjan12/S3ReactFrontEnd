import { FETCH_USER } from '../types'
import { bankUrl, inventoryUrl } from '../serverconstants'
import { apiCall } from '../../Services/api';

//user state

//reducer
export default (state = [], action) => {
    switch (action.type) {
      case FETCH_USER: 
        return action.payload
      default:
        return state;
    }
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

