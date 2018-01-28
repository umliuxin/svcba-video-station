import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';
import {fetchVideos} from '../actions';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export const store = createStoreWithMiddleware(reducers);
