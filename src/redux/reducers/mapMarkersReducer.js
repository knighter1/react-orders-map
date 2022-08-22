import { SETUP_MARKER, RESET_MARKERS } from '../actions/mapMarkersActions';

export const mapMarkersReducer = (state = null, action) => {

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
