import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import AreaData from './AreaData';

const WeatherDetail = () => {
	return (
		<Grid container direction={'row'}>
			<Header />
			<AreaData />
		</Grid>
	);
};
export default WeatherDetail;
