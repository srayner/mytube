import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import videoReducer from './reducers/videoReducer';
import playlistReducer from './reducers/playlistReducer';

export default createStore(
    combineReducers({video: videoReducer, playlist: playlistReducer}),
    {},
    applyMiddleware(createLogger())
);
