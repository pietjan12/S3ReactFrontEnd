import { LOGIN } from '../types';
import { setToken, apiCall } from '../../Services/api';
import { gamblingUrl } from '../serverconstants'


const USER_STATE = {
    isAuthenticated : false,
    user: ""
}

export const setAuthorizationToken = (token) => {
    setToken(token);
};

//reducer
export default (state = USER_STATE, action) => {
    switch (action.type) {
      case LOGIN:
        return {
            isAuthenticated : !!Object.keys(action.payload).length,
            user : action.payload,
        }
      default:
        return state;
    }
};

export const loginUser = (username, password) => dispatch => {
    return new Promise((resolve, reject) => {
        return apiCall('post', `${gamblingUrl}/login`, {username, password})
            .then((req) => {
                localStorage.setItem('jwtToken', req.token);
                setAuthorizationToken(req.token);
                dispatch({
                    type: LOGIN,
                    payload: username
                })
                resolve(); //API call succeeded
            })
            .catch(e => {
                reject(); //fail!
            })
    })
};

export const logoutUser = () => dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch({
        type: LOGIN,
        payload: ""
    });
};