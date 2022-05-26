import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { routes } from './routes';

// render the main component
createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <Router>
            { routes }
        </Router>
    </React.StrictMode>
);

// initialize neutralino
window.Neutralino.init();