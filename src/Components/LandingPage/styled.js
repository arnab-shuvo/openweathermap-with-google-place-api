import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Banner from '../../assets/images/banner.jpg';

export const LandingWrapper = styled.div`
	min-height: 100vh;
	width: 100%;
	overflow: hidden;
	background: url(${Banner});
	position: relative;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	.herder {
		padding: 30px;
		width: 100%;
		box-sizing: border-box;
		&.right-align {
			text-align: right;
		}
		.title {
			font-size: 30px;
			margin: 0;
			font-weight: bold;
			color: #fff;
			span {
				color: rgb(130, 191, 0);
			}
		}

		@media screen and (max-width: 767px) {
			text-align: center;
			&.xs-center {
				text-align: center;
			}
		}
	}
`;

export const Shape = styled.div`
	position: absolute;
	bottom: -100px;
	left: -16px;
	width: 110%;
	height: 184px;
	background: rgb(130, 191, 0);
	transform: rotate(-6deg);
	@media screen and (max-width: 990px) {
		bottom: -160px;
	}
`;

export const LandingContainer = styled(Grid)``;
