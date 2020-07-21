import React from 'react';
import { AreaInfo, AreaInfoContainer, WeatherDetails } from './styled';
import Grid from '@material-ui/core/Grid';
import InfoBlock from './InfoBlock';
import { useSelector } from 'react-redux';

const AreaData = () => {
	const informations = useSelector((state) => state.weatherData);
	const weatherIcon = require(`../../../assets/icons/${informations.weatherUpdate.weather[0].icon}.png`);

	return (
		<AreaInfoContainer
			item
			container
			direction={'row'}
			alignItems={'flex-start'}>
			<Grid item md={12}>
				<AreaInfo>
					<p className='date'>
						<img src={weatherIcon} alt='icon' />{' '}
						<span>
							{informations.weatherUpdate.weather[0].description}
						</span>
					</p>
					<p className='place'>{informations.address}</p>
				</AreaInfo>
			</Grid>
			<Grid item md={8}>
				<WeatherDetails>
					<Grid container direction={'row'} alignItems={'center'}>
						<Grid item md={3} xs={12}>
							<p className='temp'>
								{informations.weatherUpdate.main.temp}
								<sup>o</sup> C
							</p>
							<p className='feeltemp'>
								FEELS LIKE
								<span>
									{informations.weatherUpdate.main.feels_like}
								</span>
								<sup>o</sup> C
							</p>
						</Grid>
						<Grid item md={9}>
							<Grid container direction={'row'}>
								<Grid item md={3} xs={6}>
									<InfoBlock
										label={'Maximum'}
										value={
											informations.weatherUpdate.main
												.temp_max
										}
										temperature={true}>
										<i className='flaticon-hot'></i>
									</InfoBlock>
								</Grid>
								<Grid item md={3} xs={6}>
									<InfoBlock
										label={'Minimum'}
										value={
											informations.weatherUpdate.main
												.temp_min
										}
										temperature={true}>
										<i className='flaticon-temperature'></i>
									</InfoBlock>
								</Grid>
								<Grid item md={3} xs={6}>
									<InfoBlock
										label={'Humidity'}
										value={'40%'}
										temperatue={true}>
										<i className='flaticon-humidity'></i>
									</InfoBlock>
								</Grid>
								<Grid item md={3} xs={6}>
									<InfoBlock
										label={'Wind Speed'}
										value={
											informations.weatherUpdate.wind
												.speed
										}
										windAngle={
											informations.weatherUpdate.wind.deg
										}>
										<i className='flaticon-wind'></i>
									</InfoBlock>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</WeatherDetails>
			</Grid>
		</AreaInfoContainer>
	);
};
export default AreaData;
