import { combineReducers, applyMiddleware, compose, createStore, ActionCreator } from 'redux';
import { orderReducer } from './orderReducer';
import { mapMarkersReducer } from './mapMarkersReducer';
import { mapRouteReducer } from './mapRouteReducer';
import thunk, { ThunkAction } from 'redux-thunk';
import { TMapMarkersAction } from '../actions/mapMarkersActions';
import { TOrderAction } from '../actions/orderActions';
import { TRouteAction } from '../actions/mapRouteActions';

export const rootReducer = combineReducers({
    order: orderReducer,
    mapMarkers: mapMarkersReducer,
    mapRoute: mapRouteReducer
});

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWares = applyMiddleware(thunk);
const enhancer = composeEnhancers(middleWares);

export const store = createStore(rootReducer, enhancer);

export type TStore = ReturnType<typeof rootReducer>;

type TApplicationActions = 
    TMapMarkersAction |
    TRouteAction |
    TOrderAction;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, TStore, unknown, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;
