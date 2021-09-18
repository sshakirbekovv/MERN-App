import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [promiseMiddleware, thunk];

const enhancer =  composeWithDevTools(applyMiddleware(...middleware));

export default createStore(rootReducer, enhancer);