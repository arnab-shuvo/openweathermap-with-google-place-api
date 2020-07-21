import React from 'react';
import { LandingWrapper, Shape } from './styled';
import Landing from './Landing';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import WeatherDetail from './WeatherDetails';
import NoPage from '../NoPageFound';

const LandingPage = () => {
	const WeatherData = useSelector((state) => state.weatherData);
	return (
		<LandingWrapper>
			<Switch>
				<Route exact path='/' component={Landing} />
				{Object.keys(WeatherData).length === 0 && (
					<Route
						exact
						path='/weather'
						render={() => <Redirect to='/' />}
					/>
				)}
				{Object.keys(WeatherData).length !== 0 && (
					<Route exact path='/weather' component={WeatherDetail} />
				)}
				<Route exact path='/404' component={NoPage} />
				<Route path='*' render={() => <Redirect to='/404' />} />
			</Switch>
			<Shape />
		</LandingWrapper>
	);
};
export default LandingPage;
