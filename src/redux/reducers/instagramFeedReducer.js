/**
 * @author Eli Zhang
 * created on 8/17/2020
 * modified on 8/17/2020
 */

import {
    GET_INSTAGRAM_FEED,
    GET_INSTAGRAM_FEED_SUCCESS,
    GET_INSTAGRAM_FEED_FAIL,
    RESET_GET_INSTAGRAM_FEED
} from '../actions/types';

const initialState = {
    instagramFeedRes: null,
    loading: false,
    error: null
}


/**
* Description: instagram Feed action Reducer function
* 
*/

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_INSTAGRAM_FEED:
            return {
                ...state,
                loading: action.payload
            };
        case GET_INSTAGRAM_FEED_SUCCESS:
            return {
                ...state,
                instagramFeedRes: action.payload,
                loading: action.loading
            };
        case GET_INSTAGRAM_FEED_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: action.loading
            };
        case RESET_GET_INSTAGRAM_FEED: 
            return {
                instagramFeedRes: null,
                loading: false,
                error: null
            };
        default:
            return state;
    }
}