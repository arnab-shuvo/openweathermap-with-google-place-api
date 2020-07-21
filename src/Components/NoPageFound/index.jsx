import React from 'react';
import Grid from '@material-ui/core/Grid';
import { LandingContainer } from '../LandingPage/Landing/styled';
import { useHistory } from 'react-router-dom';

const NoPage = () => {
	const history = useHistory();
	const goBack = () => {
		history.push('/');
	};
	return (
		<LandingContainer container alignItems={'center'} justify={'center'}>
			<Grid item md={5}>
				<div className='gotlost text-center'>
					<p className='title'>OOPSS!!! You got lost </p>
					<button className='back-btn' onClick={goBack}>
						Lets Start Again
					</button>
				</div>
			</Grid>
		</LandingContainer>
	);
};
export default NoPage;
