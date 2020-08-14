/**
 * @author Eli Zhang
 * created on 8/14/2020
 * modified on 8/14/2020
 */

import { combineReducers } from 'redux';
import instagramFeedReducer from './instagramFeedReducer';

export const rootReducer = combineReducers({
    instagramFeedReducer: instagramFeedReducer,
});