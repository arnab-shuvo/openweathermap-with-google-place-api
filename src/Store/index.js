import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import WeatherReducer from './reducers/WeatherReducer';
import LoaderReducer from './reducers/LoaderReducer';

const reducers = combineReducers({
	weatherData: WeatherReducer,
	loader: LoaderReducer,
});

const composeEnhancers = compose;

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk)),
);
