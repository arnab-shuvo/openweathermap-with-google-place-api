import React, { useState, useEffect, useRef } from 'react';
import { SearchButton } from './styled';
import { useDispatch } from 'react-redux';
import { fetchWeather, setLoader } from '../../Store/actions/WeatherActions';
import { Map, AutocompleteInput } from '../LandingPage/Landing/styled';

const SearchBox = () => {
	const [isSearching, setIsSearching] = useState(false);
	const dispatch = useDispatch();
	const searchButtonClickHandler = () => {
		setIsSearching(true);
	};
	const inputRef = useRef(null);
	const fetchWeatherData = (lcoation) => {
		if (lcoation.place_id) {
			setIsSearching(false);
			dispatch(setLoader(true));
			dispatch(fetchWeather(lcoation));
		}
	};
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

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			{!isSearching && (
				<SearchButton onClick={searchButtonClickHandler}>
					Search Again
				</SearchButton>
			)}
			<AutocompleteInput
				className={isSearching ? 'show' : 'hide'}
				id='searchTextField'
				ref={inputRef}
				type='text'
				placeholder='Enter location name to search '
			/>
			<Map id='map-canvas' />
		</>
	);
};

export default SearchBox;
