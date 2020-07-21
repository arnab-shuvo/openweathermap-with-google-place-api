import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store';

test('renders learn react link', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		div,
	);
});
