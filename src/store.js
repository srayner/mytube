import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import videoReducer from './reducers/videoReducer';
import playlistReducer from './reducers/playlistReducer';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers({video: videoReducer, playlist: playlistReducer}),
    {},
    applyMiddleware(createLogger(), thunk)
);
