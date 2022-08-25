import { TCoord } from "../../Types/coord";

export const SETUP_MARKER = 'SETUP_MARKER';
export const RESET_MARKERS = 'RESET_MARKERS';

export interface ISetupMakerAction {
    readonly type: typeof SETUP_MARKER;
    position: TCoord;
}

export interface IResetMakersAction {
    readonly type: typeof RESET_MARKERS;
}

export type TMapMarkersAction = 
    | ISetupMakerAction
    | IResetMakersAction;

export const setupMarker = (markerCoord: TCoord): ISetupMakerAction => ({type: SETUP_MARKER, position: markerCoord});
export const resetMarkers = (): IResetMakersAction => ({type: RESET_MARKERS});
