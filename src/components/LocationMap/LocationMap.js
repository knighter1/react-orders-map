import React, { useRef } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './LocationMap.css';
import 'leaflet/dist/leaflet.css';

const LocationMap = ({coords, zoom}) => {
    const mapRef = useRef();

    const defaultCoords = [59.93, 30.30];
    const defaultZoom = 12;

    return (
        <Map ref={mapRef} center={coords || defaultCoords} zoom={zoom || defaultZoom}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        </Map>
    );
}

export default LocationMap; 