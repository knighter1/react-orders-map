import { SET_ORDERS, SELECT_ORDER, CHANGE_SOURCE_POINT, CHANGE_DESTINATION_POINT } from '../actions/orderActions';

export const orderReducer = (state = null, action) => {

    switch (action.type) {

        case SET_ORDERS:
            return {...state, ordersList: action.orders};

        case SELECT_ORDER:
            return {...state, currentOrderId: action.orderId};

        case CHANGE_SOURCE_POINT: {
            return {
                ...state,
                ordersList: state.ordersList.map(
                    order => order.id === action.orderId
                        ? {
                            ...order,
                            source: action.pointId
                        }
                        : order
                )
            }
        }

        case CHANGE_DESTINATION_POINT: {
            return {
                ...state,
                ordersList: state.ordersList.map(
                    order => order.id === action.orderId
                        ? {
                            ...order,
                            dest: action.pointId
                        }
                        : order
                )
            }
        }

        default:
            return state;
    }
}
