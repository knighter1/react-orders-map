export const SET_ORDERS = 'SET_ORDERS';
export const SELECT_ORDER = 'SELECT_ORDER';
export const CHANGE_SOURCE_POINT = 'CHANGE_SOURCE_POINT';
export const CHANGE_DESTINATION_POINT = 'CHANGE_DESTINATION_POINT';

export const setOrders = (orders) => ({type: SET_ORDERS, orders});
export const selectOrder = (orderId) => ({type: SELECT_ORDER, orderId});
export const changeSourcePoint = (orderId, pointId) => ({type: CHANGE_SOURCE_POINT, orderId, pointId});
export const changeDestinationPoint = (orderId, pointId) => ({type: CHANGE_DESTINATION_POINT, orderId, pointId});
