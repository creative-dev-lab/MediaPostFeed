/**
 * @author Eli Zhang
 * created on 8/17/2020
 * modified on 8/17/2020
 */

import {
    GET_BEHANCE_FEED,
    GET_BEHANCE_FEED_SUCCESS,
    GET_BEHANCE_FEED_FAIL,
    RESET_GET_BEHANCE_FEED
} from '../actions/types';

const initialState = {
    behanceFeedRes: null,
    loading: false,
    error: null
}


/**
* Description: behance Feed action Reducer function
* 
*/

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BEHANCE_FEED:
            return {
                ...state,
                loading: action.payload
            };
        case GET_BEHANCE_FEED_SUCCESS:
            return {
                ...state,
                behanceFeedRes: action.payload,
                loading: action.loading
            };
        case GET_BEHANCE_FEED_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: action.loading
            };
        case RESET_GET_BEHANCE_FEED: 
            return {
                behanceFeedRes: null,
                loading: false,
                error: null
            };
        default:
            return state;
    }
}