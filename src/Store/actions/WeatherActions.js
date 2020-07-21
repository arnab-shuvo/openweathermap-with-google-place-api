import { GET_WEATHER, LOADER } from '../types';
import { WEATHER } from '../../Base';
import axios from 'axios';

const setWeather = (data) => {
	return { type: GET_WEATHER, payload: data };
};
export const setLoader = (data) => {
	return { type: LOADER, payload: { loading: data } };
};

export const fetchWeather = (data) => async (dispatch) => {
	const address = data.formatted_address;
	const lattitude = data.geometry.location.lat();
	const longitude = data.geometry.location.lng();

	try {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${WEATHER}&units=metric`,
			)
			.then((response) => {
				let payload = {
					address,
				};
				payload.weatherUpdate = response.data;

				setTimeout(() => {
					dispatch(setWeather(payload));
					dispatch(setLoader(false));
				}, 500);
			});
	} catch (e) {
		console.log('error: ', e);
	}
};
