import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from './Components/Loader';

const App = () => {
	return (
		<>
			<Loader />
			<Router>
				<Route path='/' component={LandingPage} />
			</Router>
		</>
	);
};

export default App;
