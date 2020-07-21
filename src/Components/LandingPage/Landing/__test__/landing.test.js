import React from 'react';
import ReactDOM from 'react-dom';
import Landing from '../index';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../Store';

afterEach(cleanup);
it('Should Render Without Crash', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<Landing />
		</Provider>,
		div,
	);
});
