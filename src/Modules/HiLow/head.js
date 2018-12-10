import { PLAY_HILOW } from '../types'
import { gamblingUrl } from '../serverconstants'
import { apiCall } from '../../Services/api';

//reducer
export default (state = [], action) => {
    switch (action.type) {
      case PLAY_HILOW: 
        return action.payload;
      default:
        return state;
    }
};

export const HiLowRoll = (bet, choice, currentCardNumber) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('post', `${gamblingUrl}/games/hilow`, {bet, choice, currentCardNumber})
            .then((req) => {
                dispatch({
                    type: PLAY_HILOW,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
}