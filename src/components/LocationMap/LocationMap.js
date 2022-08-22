import React, { useRef } from 'react';
import { Map, TileLayer, Marker, Polyline } from 'react-leaflet';
import { useSelector } from '../../hooks';

import './LocationMap.css';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LocationMap = ({coords, zoom}) => {
    const mapRef = useRef();
    const mapMarkers = useSelector(store => store.mapMarkers);
    const route = useSelector(store => store.mapRoute?.points);

    const defaultCoords = [59.93, 30.30];
    const defaultZoom = 12;

    return (
        <Map ref={mapRef} center={coords || defaultCoords} zoom={zoom || defaultZoom}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
            {mapMarkers && mapMarkers.map((marker, index) =>
                {
                    return <Marker key={index} position={[marker.lat, marker.lng]}></Marker>;
                })}
            {route && <Polyline positions={route} />}
        </Map>
    );
}

export default LocationMap;
