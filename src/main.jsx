import { Fragment } from 'react';
import { createRoot } from 'react-dom/client';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Application
import App from './App.jsx';

// Css
import './index.css';

createRoot(document.getElementById('root')).render(
    <Fragment>
        <BrowserRouter>
            <App />
        </BrowserRouter >
    </Fragment>,
)