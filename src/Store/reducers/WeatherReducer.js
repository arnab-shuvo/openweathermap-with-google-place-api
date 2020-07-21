import { GET_WEATHER } from '../types';

const INITIAL_STATE = {};

const WeatherReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_WEATHER:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default WeatherReducer;
