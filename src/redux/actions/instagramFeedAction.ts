/**
 * @author Eli Zhang
 * created on 8/14/2020
 * modified on 8/14/2020
 */

import axios from 'axios';

import {
    GET_INSTAGRAM_FEED,
    GET_INSTAGRAM_FEED_SUCCESS,
    GET_INSTAGRAM_FEED_FAIL,
    RESET_GET_INSTAGRAM_FEED
} from './types';
import { BASE_URL, INSTAGRAM_URL } from "../../constants";

// initialize the axios base url
const instance = axios.create({
  baseURL: `${BASE_URL}`,
});


/**
* Description: get Instagram Feed Api
* 
*/

export const get_instagram_feed = () => dispatch => {
    dispatch(fetchData(true));
    instance.get(INSTAGRAM_URL)
        .then(res => {
            dispatch(fetchDataFulfilled(res.data));
        }).catch(err => dispatch(fetchDataRejected(err)));
}

//Define your action create that set your loading state.
export const fetchData = (bool) => {
    //return a action type and a loading state indicating it is getting data. 
    return {
        type: GET_INSTAGRAM_FEED,
        payload: bool,
    };
}

//Define a action creator to set your loading state to false, and return the data when the promise is resolved
export const fetchDataFulfilled = (data) => {
    //Return a action type and a loading to false, and the data.
    return {
        type: GET_INSTAGRAM_FEED_SUCCESS,
        payload: data,
        loading: false,
    };
}

//Define a action creator that catches a error and sets an errorMessage
export const fetchDataRejected = (error) => {
    //Return a action type and a payload with a error
    return {
        type: GET_INSTAGRAM_FEED_FAIL,
        payload: error,
        loading: false,
    };
}

//Define a action creator that resets the api call
export const reset = () => dispatch => {
    dispatch({ type: RESET_GET_INSTAGRAM_FEED });
}