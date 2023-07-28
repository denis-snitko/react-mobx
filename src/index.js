import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RootStoreContext } from './contextProvider';
import RootStore from './stores';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RootStoreContext.Provider value={new RootStore()}>
		<App />
	</RootStoreContext.Provider>
);
