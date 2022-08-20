import React from 'react';
import 'leaflet/dist/leaflet.css';
import LocationMap from '../LocationMap/LocationMap';
import SplitPane from "react-split-pane";
import './App.css';
import './resizer.css';

const App = () => {
    return (
    <SplitPane split="vertical" minSize={400} defaultSize={400} onDragFinished={() => console.log('finish')}>
        <LocationMap />
        <LocationMap />
    </SplitPane>
)};

export default App; 