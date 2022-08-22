export const SETUP_MARKER = 'SETUP_MARKER';
export const RESET_MARKERS = 'RESET_MARKERS';

export const setupMarker = ([lat, lng]) => ({SETUP_MARKER, position: [lat, lng]});
export const resetMarkers = () => ({RESET_MARKERS});
