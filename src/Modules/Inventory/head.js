import { GET_INVENTORY } from '../types'
import { inventoryUrl } from '../serverconstants'
import { apiCall } from '../../Services/api';

//reducer
export default (state = [], action) => {
    switch (action.type) {
      case GET_INVENTORY: 
        return action.payload;
      default:
        return state;
    }
};


export const getMyItems = (accountID) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('GET', `${inventoryUrl}/inventory/${accountID}`)
            .then((req) => {
                dispatch({
                    type: GET_INVENTORY,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
}