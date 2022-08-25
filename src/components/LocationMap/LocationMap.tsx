import { FC } from 'react';
import { Map, TileLayer, Marker, Polyline } from 'react-leaflet';
import { useSelector } from '../../hooks';

import './LocationMap.css';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { TCoord } from '../../Types/coord';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

interface ILocationMapProps {
    coords?: TCoord;
    zoom?: number;
}

export const LocationMap: FC<ILocationMapProps> = ({coords, zoom}: ILocationMapProps) => {
    const mapMarkers = useSelector(store => store.mapMarkers);
    const route = useSelector(store => store.mapRoute?.points);

    const defaultCoords: TCoord = {
        lat: 59.93,
        lng: 30.30
    };

    const defaultZoom = 12;

    return (
        <div className="mapContainer">
            <Map center={coords || defaultCoords} zoom={zoom || defaultZoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
                {mapMarkers && mapMarkers.map(
                    (marker, index: number) => <Marker key={index} position={[marker.lat, marker.lng]} />
                )}
                {route && <Polyline positions={route} />}
            </Map>
        </div>
    );
}
