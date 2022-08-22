import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ordersListReducer } from './ordersListReducer';

export const rootReducer = combineReducers({
    ordersList: ordersListReducer
});

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*const middleWares = applyMiddleware(thunk, wsFeed, wsUser);
const enhancer = composeEnhancers(middleWares);*/

export const store = createStore(rootReducer/*, enhancer*/);
