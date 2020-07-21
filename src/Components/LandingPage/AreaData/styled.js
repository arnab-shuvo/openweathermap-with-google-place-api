import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const AreaInfo = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 100px 30px;
`;

export const AreaInfoContainer = styled(Grid)`
	p {
		margin: 0;
		font-weight: bold;
		&.date {
			color: rgb(130, 191, 0);
			font-size: 20px;
			span {
				text-transform: uppercase;
			}
		}
		&.place {
			padding-top: 20px;
			font-size: 20px;
			color: #fff;
			text-transform: uppercase;
			letter-spacing: 10px;
		}
	}
`;

export const WeatherDetails = styled.div`
	margin-top: 30px;
	background: rgba(255, 255, 255, 0.3);
	padding: 40px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	@media screen and (max-width: 990px) {
		background: transparent;
		border-radius: unset;
		padding: 0;
		margin-top: 0;
		margin-bottom: 100px;
		.temp {
			text-align: center;
			&.amount {
				text-align: left;
			}
		}

		.feeltemp {
			text-align: center;
			margin-bottom: 30px;
		}
	}
	.temp {
		font-size: 60px;
	}
	.feeltemp {
		font-size: 12px;
		span {
			font-size: 16px;
			padding-left: 10px;
		}
	}
`;
