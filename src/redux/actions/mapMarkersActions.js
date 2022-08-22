export const SETUP_MARKER = 'SETUP_MARKER';
export const RESET_MARKERS = 'RESET_MARKERS';

export const setupMarker = ([lat, lng]) => ({type: SETUP_MARKER, position: [lat, lng]});
export const resetMarkers = () => ({type: RESET_MARKERS});
