import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import videoReducer from './reducers/videoReducer';
import playlistReducer from './reducers/playlistReducer';
import { createLogger } from 'redux-logger';

const store = createStore(
    combineReducers({video: videoReducer, playlist: playlistReducer}),
    {},
    applyMiddleware(createLogger()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();