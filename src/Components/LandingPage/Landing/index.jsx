import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { LandingContainer, AutocompleteInput, Map } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setLoader } from '../../../Store/actions/WeatherActions';
import { useHistory } from 'react-router-dom';

const Landing = () => {
	const WeatherData = useSelector((state) => state.weatherData);
	const [isRecurringLoad, setisRecurringLoad] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();
	const fetchWeatherData = (lcoation) => {
		if (lcoation.place_id) {
			dispatch(setLoader(true));
			dispatch(fetchWeather(lcoation));
			setisRecurringLoad(true);
		}
	};
	useEffect(() => {
		if (Object.keys(WeatherData).length !== 0 && isRecurringLoad) {
			history.push('/weather');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [WeatherData, isRecurringLoad]);
	useEffect(() => {
		const google = window.google;
		const map = new google.maps.Map(document.getElementById('map-canvas'));
		const input = document.getElementById('searchTextField');
		const autocomplete = new google.maps.places.Autocomplete(input);

		autocomplete.bindTo('bounds', map);
		google.maps.event.addListener(autocomplete, 'place_changed', () => {
			const place = autocomplete.getPlace();
			fetchWeatherData(place);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<LandingContainer container alignItems={'center'} justify={'center'}>
			<Grid item md={5}>
				<div className='landingLogo text-center'>
					<p className='title'>
						<span> {'<Tele'}</span>port<span> {'/>'}</span>
					</p>
					<p className='subtitle'>
						ENTER LOCATION TO FIND THE CURRENT WEATHER
					</p>
				</div>
				<div className='herder text-center'>
					<AutocompleteInput
						id='searchTextField'
						type='text'
						placeholder='Enter location name to search '
					/>
					<Map id='map-canvas' />
				</div>
			</Grid>
		</LandingContainer>
	);
};

export default Landing;
