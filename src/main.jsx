import { Fragment } from 'react';
import { createRoot } from 'react-dom/client';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Context
import AppContextprovider from './context/AppContext';

// Application
import App from './App.jsx';

// Css
import './index.css';

createRoot(document.getElementById('root')).render(
    <Fragment>
        <BrowserRouter>
            <AppContextprovider>
                <App />
            </AppContextprovider>
        </BrowserRouter >
    </Fragment>,
)