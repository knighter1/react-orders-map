import { combineReducers, createStore } from 'redux';
import { ordersListReducer } from './ordersListReducer';
import { mapMarkersReducer } from './mapMarkersReducer';

export const rootReducer = combineReducers({
    ordersList: ordersListReducer,
    mapMarkers: mapMarkersReducer
});

export const store = createStore(rootReducer);
