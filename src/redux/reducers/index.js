import { combineReducers, createStore } from 'redux';
import { orderReducer } from './orderReducer';
import { mapMarkersReducer } from './mapMarkersReducer';

export const rootReducer = combineReducers({
    order: orderReducer,
    mapMarkers: mapMarkersReducer
});

export const store = createStore(rootReducer);
