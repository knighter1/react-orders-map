import { SELECT_ORDER } from '../actions/ordersListActions';

export const ordersListReducer = (state = null, action) => {

    switch (action.type) {
        case SELECT_ORDER:
            return action.orderId;

        default:
            return state;
    }
}
