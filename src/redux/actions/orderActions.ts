import { IOrder } from "../../Types/order";

export const SET_ORDERS = 'SET_ORDERS';
export const SELECT_ORDER = 'SELECT_ORDER';
export const CHANGE_SOURCE_POINT = 'CHANGE_SOURCE_POINT';
export const CHANGE_DESTINATION_POINT = 'CHANGE_DESTINATION_POINT';

export interface ISetOrdersAction {
    readonly type: typeof SET_ORDERS;
    orders: IOrder[];
}

export interface ISelectOrderAction {
    readonly type: typeof SELECT_ORDER;
    orderId: number;
}

export interface IChangeSourcePointAction {
    readonly type: typeof CHANGE_SOURCE_POINT;
    orderId: number;
    pointId: number;
}

export interface IChangeDestinationPointAction {
    readonly type: typeof CHANGE_DESTINATION_POINT;
    orderId: number;
    pointId: number;
}

export type TOrderAction = 
    | ISetOrdersAction
    | ISelectOrderAction
    | IChangeSourcePointAction
    | IChangeDestinationPointAction;

export const setOrders = (orders: IOrder[]): ISetOrdersAction => ({type: SET_ORDERS, orders});

export const selectOrder = (orderId: number): ISelectOrderAction => ({type: SELECT_ORDER, orderId});

export const changeSourcePoint = (orderId: number, pointId: number): IChangeSourcePointAction => ({type: CHANGE_SOURCE_POINT, orderId, pointId});

export const changeDestinationPoint = (orderId: number, pointId: number): IChangeDestinationPointAction => ({type: CHANGE_DESTINATION_POINT, orderId, pointId});
