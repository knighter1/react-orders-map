import { parseRoute } from '../../utils/2gis-route-parserer';
import { BUILD_ROUTE_REQUEST, BUILD_ROUTE_SUCCESS, BUILD_ROUTE_ERROR } from '../actions/mapRouteActions';

export const mapRouteReducer = (state = null, action) => {

    switch (action.type) {

        case BUILD_ROUTE_REQUEST:
            return { ...state, isError: false, isRequest: true };

        case BUILD_ROUTE_SUCCESS: {
            const route = parseRoute(action.route);
            return { success: true, points: route, isError: false, isRequest: false };
        }

        case BUILD_ROUTE_ERROR:
            return { success: false, route: '', isError: true, isRequest: false };

        default:
            return state;
    }
}
