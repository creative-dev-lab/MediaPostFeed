/**
 * @author Eli Zhang
 * created on 8/14/2020
 * modified on 8/14/2020
 */

import { combineReducers } from 'redux';
import instagramFeedReducer from './instagramFeedReducer';
import behanceFeedReducer from './behanceFeedReducer';

export const rootReducer = combineReducers({
    instagramFeedReducer: instagramFeedReducer,
    behanceFeedReducer: behanceFeedReducer
});