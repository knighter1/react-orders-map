import { GIS_API_KEY } from '../../config';
import { getPointById } from '../../utils/points';
import axios from 'axios';

export const BUILD_ROUTE_REQUEST = 'BUILD_ROUTE_REQUEST';
export const BUILD_ROUTE_SUCCESS = 'BUILD_ROUTE_SUCCESS';
export const BUILD_ROUTE_ERROR = 'BUILD_ROUTE_ERROR';

export const buildRouteRequest = () => ({type: BUILD_ROUTE_REQUEST});

export const buildRouteSuccess = (route) => ({type: BUILD_ROUTE_SUCCESS, route});

export const buildRouteError = () => ({type: BUILD_ROUTE_ERROR});

export const buildRoute = (source, dest) => (dispatch) => {

    const END_POINT = `https://routing.api.2gis.com/carrouting/6.0.0/global?key=${GIS_API_KEY}`;

    dispatch(buildRouteRequest());

    const sourcePoint = getPointById(source);
    const destPoint = getPointById(dest);

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

    axios.post(END_POINT, points, options)
    .then((response) => {
        dispatch(buildRouteSuccess(response.data.result[0].maneuvers));
    }, (error) => {
        dispatch(buildRouteError());
        console.log(error);
    });
}
