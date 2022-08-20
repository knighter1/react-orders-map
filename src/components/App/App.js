import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import LocationMap from '../LocationMap/LocationMap';

const App = () => {
    return (
        <div className="App">
            <LocationMap />
        </div>
    );
}

export default App; 