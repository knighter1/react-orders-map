import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './redux/reducers/index';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement!);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
