import { LOADER } from '../types';

const INITIAL_STATE = {
	loading: false,
};

const LoaderReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOADER:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default LoaderReducer;
