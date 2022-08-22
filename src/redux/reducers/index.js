import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { orderReducer } from './orderReducer';
import { mapMarkersReducer } from './mapMarkersReducer';
import { mapRouteReducer } from './mapRouteReducer';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    order: orderReducer,
    mapMarkers: mapMarkersReducer,
    mapRoute: mapRouteReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWares = applyMiddleware(thunk);
const enhancer = composeEnhancers(middleWares);

export const store = createStore(rootReducer, enhancer);
