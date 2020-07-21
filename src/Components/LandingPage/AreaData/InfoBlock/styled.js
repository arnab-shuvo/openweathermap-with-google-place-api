import styled from 'styled-components';

export const InfoBlockWrapper = styled.div`
	padding: 15px 30px;
	border-left: 1px solid #949292;
	.info {
		display: flex;
		align-items: center;

		.infolabel {
			margin-left: 10px;
			font-size: 16px;
		}
	}
	.amount {
		font-size: 30px;
		span {
			font-size: 15px;
		}
	}
`;
