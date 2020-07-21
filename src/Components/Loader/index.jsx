import React, { useState, useEffect } from 'react';
import { Load } from './styled';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

const Loader = () => {
	const [loading, setLoading] = useState(false);
	const loader = useSelector((state) => state.loader);
	useEffect(() => {
		setLoading(loader.loading);
	}, [loader]);
	return (
		<Load
			container
			alignItems='center'
			justify={'center'}
			className={!loading ? 'loader-off' : ''}>
			<Grid item>
				<div className='loader3'>
					<span></span>
					<span></span>
				</div>
			</Grid>
		</Load>
	);
};

export default Loader;
