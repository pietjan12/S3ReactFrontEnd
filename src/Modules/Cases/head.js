import { FETCH_HOT_CASES, FETCH_CASE_BY_ID } from '../types';
import { gamblingUrl } from '../serverconstants'
import { apiCall } from '../../Services/api';

// reducer
export default (state = [], action) => {
    switch (action.type) {
      case FETCH_HOT_CASES:
        return action.payload;
      case FETCH_CASE_BY_ID:
        return action.payload;
      default:
        return state;
    }
};

// actions
export const fetchHotCases = () => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('GET', `${gamblingUrl}/cases`)
            .then((req) => {
                dispatch({
                    type: FETCH_HOT_CASES,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
};

export const fetchCaseByID = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('GET', `${gamblingUrl}/cases/${id}`)
            .then((req) => {
                dispatch({
                    type: FETCH_CASE_BY_ID,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
};