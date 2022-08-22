export const SET_ORDERS = 'SET_ORDERS';
export const SELECT_ORDER = 'SELECT_ORDER';
export const CHANGE_SOURCE_POINT = 'CHANGE_SOURCE_POINT';
export const CHANGE_DESTINATION_POINT = 'CHANGE_DESTINATION_POINT';

export const setOrders = (orders) => ({SET_ORDERS, orders});
export const selectOrder = (orderId) => ({SELECT_ORDER, orderId});
export const changeSourcePoint = (orderId, pointId) => ({CHANGE_SOURCE_POINT, orderId, pointId});
export const changeDestinationPoint = (orderId, pointId) => ({CHANGE_DESTINATION_POINT, orderId, pointId});
