import { FC } from 'react';
import 'leaflet/dist/leaflet.css';
import { LocationMap } from '../LocationMap/LocationMap';
import { SplitPane } from "react-multi-split-pane";
import OrdersList from '../OrdersList/OrdersList';

import './App.css';
import './resizer.css';

import orders from '../../orders.json';

export const App: FC = () => {
    return (
        <SplitPane split="vertical" minSize={200} defaultSizes={[400, 1200]}>
            <OrdersList orders={orders} />
            <LocationMap />
        </SplitPane>
)};
