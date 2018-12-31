import { OPEN_CASE_BY_ID } from '../types';
import { gamblingUrl } from '../serverconstants'
import { apiCall } from '../../Services/api';

// reducer
export default (state = [], action) => {
    switch (action.type) {
      case OPEN_CASE_BY_ID:
        return action.payload;
      default:
        return state;
    }
};

// actions
export const openCaseByID = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('POST', `${gamblingUrl}/games/case`, {id})
            .then((req) => {
                dispatch({
                    type: OPEN_CASE_BY_ID,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
};