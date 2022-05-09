import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reducers from './redux/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './style/index.css';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);