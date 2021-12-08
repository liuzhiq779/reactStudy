/* eslint-disable no-unused-vars */
import { createStore,applyMiddleware, compose } from 'redux';
import reducer from './reducer';
//import thunk from 'redux-thunk';
//使用redux-saga
import createSagaMiddleware from 'redux-saga'
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window ==window._REDUX_EXTENSION_COMPOSE_? 
window._REDUX_EXTENSION_COMPOSE_({

}): compose;

const enhancer = composeEnhancers(
  //  applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
)
const store = createStore(
    reducer,
    //applyMiddleware(thunk)
    enhancer
    );
    sagaMiddleware.run(saga)


export default store;