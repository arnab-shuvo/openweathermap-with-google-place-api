import React from 'react';
import SearchBox from '../../SearchBox';
import Grid from '@material-ui/core/Grid';

const Header = () => {
	return (
		<Grid item container direction={'row'} alignItems={'flex-start'}>
			<Grid item md={6} xs={12} sm={6}>
				<div className='herder'>
					<p className='title'>
						<span> {'<Tele'}</span>port<span> {'/>'}</span>
					</p>
				</div>
			</Grid>
			<Grid container item md={6} sm={6} xs={12} justify={'flex-end'}>
				<Grid item md={8} sm={6} xs={12}>
					<div className='herder right-align xs-center'>
						<SearchBox />
					</div>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default Header;
