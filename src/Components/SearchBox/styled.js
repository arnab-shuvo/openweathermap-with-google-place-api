import styled from 'styled-components';

export const SearchButton = styled.button`
	background: rgb(130, 191, 0);
	color: #fff;
	border: 1px solid rgb(130, 191, 0);
	padding: 10px 20px;
	font-size: 15px;
	transition: all 0.5s ease;
	cursor: pointer;
	&:hover {
		background: transparent;
	}
	&:focus {
		outline: 0;
		background: transparent;
	}
`;
