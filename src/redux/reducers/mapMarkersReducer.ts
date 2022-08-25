import { TCoord } from '../../Types/coord';
import { SETUP_MARKER, RESET_MARKERS, TMapMarkersAction } from '../actions/mapMarkersActions';

export type MapMarkersState = TCoord[];

export const mapMarkersReducer = (state: MapMarkersState = [], action: TMapMarkersAction) => {

    switch (action.type) {

        case SETUP_MARKER: {
            state.push(action.position)
            return state;
        }

        case RESET_MARKERS:
            return [];

        default:
            return state;
    }
}
