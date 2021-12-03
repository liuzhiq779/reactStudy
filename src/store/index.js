/* eslint-disable no-unused-vars */
import { createStore,applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';



const composeEnhancers = typeof window ==window._REDUX_EXTENSION_COMPOSE_? 
window._REDUX_EXTENSION_COMPOSE_({

}): compose;

const enhancer = composeEnhancers(
    applyMiddleware([thunk])
)
const store = createStore(
    reducer,
    applyMiddleware(thunk)
    );


export default store;