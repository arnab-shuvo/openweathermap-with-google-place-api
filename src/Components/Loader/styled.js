import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const Load = styled(Grid)`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 111;
	&.loader-off {
		display: none;
	}
	.loader3 {
		width: 50px;
		height: 50px;
		display: inline-block;
		padding: 0px;
		text-align: left;
		span {
			position: absolute;
			display: inline-block;
			width: 50px;
			height: 50px;
			border-radius: 100%;
			background: rgba(130, 191, 0, 1);
			-webkit-animation: loader3 1.5s linear infinite;
			animation: loader3 1.5s linear infinite;
			&:last-child {
				animation-delay: -0.9s;
				-webkit-animation-delay: -0.9s;
			}
		}
		@keyframes loader3 {
			0% {
				transform: scale(0, 0);
				opacity: 0.8;
			}
			100% {
				transform: scale(1, 1);
				opacity: 0;
			}
		}
		@-webkit-keyframes loader3 {
			0% {
				-webkit-transform: scale(0, 0);
				opacity: 0.8;
			}
			100% {
				-webkit-transform: scale(1, 1);
				opacity: 0;
			}
		}
	}
`;
