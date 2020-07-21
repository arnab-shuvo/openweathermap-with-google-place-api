import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const LandingContainer = styled(Grid)`
	height: 100vh;
	.gotlost {
		font-size: 40px;
		.back-btn {
			background: #82bf00;
			border: 1px solid #82bf00;
			padding: 15px 30px;
			font-size: 20px;
			color: #fff;
			cursor: pointer;
			transition: all 0.5s ease;
			&:hover {
				background: transparent;
			}
		}
	}
	.landingLogo {
		width: 100%;
		box-sizing: border-box;
		&.right-align {
			text-align: right;
		}
		.title {
			font-size: 50px;
			margin: 0;
			font-weight: bold;
			color: #fff;
			span {
				color: rgb(130, 191, 0);
			}
			margin-bottom: 10px;
		}
		.subtitle {
			letter-spacing: 6px;
			margin: 0;
			font-size: 20px;
		}
	}
`;

export const AutocompleteInput = styled.input`
	background: #fff;
	width: 100%;
	box-sizing: border-box;
	border: 1px solid #cdcdcd;
	padding: 10px;
	font-size: 15px;
	color: rgb(130, 191, 0);
	text-align: left;
	&.hide {
		display: none;
	}
`;
export const Map = styled.canvas`
	display: none;
`;
