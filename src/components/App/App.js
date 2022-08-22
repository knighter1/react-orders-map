import React from 'react';
import 'leaflet/dist/leaflet.css';
import LocationMap from '../LocationMap/LocationMap';
import SplitPane from "react-split-pane";
import OrdersList from '../OrdersList/OrdersList';

import './App.css';
import './resizer.css';

import orders from '../../orders.json';

const App = () => {
    return (
        <SplitPane split="vertical" minSize={400} defaultSize={400} onDragFinished={() => (console.log('finish'))}>
            <OrdersList orders={orders} />
            <LocationMap />
        </SplitPane>
)};

export default App;
