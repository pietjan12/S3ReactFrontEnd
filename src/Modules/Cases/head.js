import { FETCH_HOT_CASES } from '../types';
import { FETCH_NEW_CASES } from '../types';
import { FETCH_CASE_BY_ID } from '../types';

const data = [
    {
        caseid: 1,
        casename : "Billionaire Case",
        casedescription : "Een hele mooie case",
        caseavatarurl: "tempcase.png",
        caseprice: "55",
        casecontents: [
            {
                itemid: "2",
                itemname: "ak skin",
                itemprice: "15",
                itemavatarurl: "ak.png"
            },
            {
                itemid: "3",
                itemname: "m4 skin",
                itemprice: "20",
                itemavatarurl: "ak2.png"
            }
        ]
    },
    {
        caseid: 2,
        casename: "poor mans case",
        casedescription: "een hele arme case",
        caseavatarurl: "poormans.png",
        caseprice: "0.50",
        casecontents: [
            {
                itemid: "5",
                itemname: "ak skin",
                itemprice: "2",
                itemavatarurl: "ak.png"
            },
            {
                itemid: "7",
                itemname: "m4 skin",
                itemprice: "4",
                itemavatarurl: "ak2.png"
            }
        ]
    }
]

// reducer
export default (state = [], action) => {
    switch (action.type) {
      case FETCH_HOT_CASES:
        return action.payload;
      case FETCH_NEW_CASES:
        return action.payload;
      case FETCH_CASE_BY_ID:
        return action.payload;
      default:
        return state;
    }
};

// actions
export const fetchHotCases = () => dispatch => {
    dispatch({
      type: FETCH_HOT_CASES,
      payload: data
    });
};

export const fetchNewCases = () => dispatch => {
    dispatch({
        type: FETCH_NEW_CASES,
        payload: data
    });
};

export const fetchCaseByID = (id) => dispatch => {
    dispatch({
      type: FETCH_CASE_BY_ID,
      id,
      payload: data.filter(el => el.caseid == id)
    });
};