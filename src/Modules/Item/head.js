import { FETCH_ITEM_BY_ID } from '../types'
import { inventoryUrl } from '../serverconstants'
import { apiCall } from '../../Services/api';


//reducer
export default (state = [], action) => {
    switch (action.type) {
      case FETCH_ITEM_BY_ID: 
        return action.payload;
      default:
        return state;
    }
};

export const fetchItemById = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('GET', `${inventoryUrl}/item/${id}`)
            .then((req) => {
                dispatch({
                    type: FETCH_ITEM_BY_ID,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
}