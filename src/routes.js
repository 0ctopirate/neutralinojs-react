import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from 'components/App'

const routes = (
	<Routes>
		<Route exact path="/" element={<App />} />
	</Routes>
);

export { routes }