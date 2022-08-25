import { GIS_API_KEY } from '../../config';
import { getPointById } from '../../utils/points';
import axios from 'axios';
import { AppDispatch } from '../reducers';
import { Route } from '../../Types/route';

export const BUILD_ROUTE_REQUEST = 'BUILD_ROUTE_REQUEST';
export const BUILD_ROUTE_SUCCESS = 'BUILD_ROUTE_SUCCESS';
export const BUILD_ROUTE_ERROR = 'BUILD_ROUTE_ERROR';

export interface IBuildRouteRequestAction {
    readonly type: typeof BUILD_ROUTE_REQUEST;
}

export interface IBuildRouteSuccessAction {
    readonly type: typeof BUILD_ROUTE_SUCCESS;
    route: Route;
}

export interface IBuildRouteErrorAction {
    readonly type: typeof BUILD_ROUTE_ERROR;
}

export type TRouteAction = 
    | IBuildRouteRequestAction
    | IBuildRouteSuccessAction
    | IBuildRouteErrorAction;

export const buildRouteRequest = (): IBuildRouteRequestAction => ({type: BUILD_ROUTE_REQUEST});

export const buildRouteSuccess = (route: Route): IBuildRouteSuccessAction => ({type: BUILD_ROUTE_SUCCESS, route});

export const buildRouteError = (): IBuildRouteErrorAction => ({type: BUILD_ROUTE_ERROR});

export const buildRoute = (sourcePointId: number, destPointId: number) => (dispatch: AppDispatch) => {

    const END_POINT = `https://routing.api.2gis.com/carrouting/6.0.0/global?key=${GIS_API_KEY}`;

    const sourcePoint = getPointById(sourcePointId);
    const destPoint = getPointById(destPointId);

    if (!sourcePoint || !destPoint)
        return;

    const points = {
        points: [{
            type: "walking",
            y: sourcePoint.lat,
            x: sourcePoint.lng
        }, {
            type: "walking",
            y: destPoint.lat,
            x: destPoint.lng
        }]
    };

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    dispatch(buildRouteRequest());

    axios.post(END_POINT, points, options)
    .then((response) => {
        dispatch(buildRouteSuccess(response.data.result[0].maneuvers));
    }, (error) => {
        dispatch(buildRouteError());
        console.error(error);
    });
}
