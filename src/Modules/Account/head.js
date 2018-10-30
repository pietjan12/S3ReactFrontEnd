import { REGISTER, LOGIN } from '../types'
import { bankUrl, inventoryUrl } from '../serverconstants'
import axios from 'axios';

//reducer
export default (state = [], action) => {
    switch (action.type) {
      case REGISTER:
        return action.payload;
      case LOGIN:
        return action.payload;
      default:
        return state;
    }
};

//actions
export const registerUser = (username, password, email, phonenr) => dispatch => {
    axios.post(bankUrl + "/account/add",
                        {username : username, password : password, email : email, phonenr : phonenr}, 
                        {headers: { 'Access-Control-Allow-Origin': '*' }})
                        .then(req => {
                            dispatch({
                                type: REGISTER,
                                payload: req.data
                            });
                        })
                        .catch(r => {
                            console.log("error registering user");
                        });
};

export const loginUser = (username, password) => dispatch => {
    axios.post(bankUrl + "/login",
                        {username : username, password : password},
                        {headers: { 'Access-Control-Allow-Origin': '*' }})
                        .then(req => {
                            dispatch({
                                type: LOGIN,
                                payload: req.data
                            });
                        })
                        .catch(r => {
                            console.log("error logging in user");
                        })
}