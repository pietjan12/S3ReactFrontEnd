import { PLAY_ROULETTE } from '../types'
import { gamblingUrl } from '../serverconstants'
import { apiCall } from '../../Services/api';
import { string } from 'prop-types';

//reducer
export default (state = [], action) => {
    switch (action.type) {
      case PLAY_ROULETTE: 
        return action.payload;
      default:
        return state;
    }
};

export const rouletteRoll = (bet, intChoices, stringChoices) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('post', `${gamblingUrl}/roulette`, {bet, intChoices, stringChoices})
            .then((req) => {
                dispatch({
                    type: PLAY_ROULETTE,
                    payload: req
                });
                resolve();
            })
            .catch(e => {
                reject(); //fail!
            })
    })
}