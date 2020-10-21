import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../../general-styles/theme';

const StyledSpinner = styled.div`
	border: 0.5rem solid #f3f3f3;
	border-top: 0.5rem solid ${mainColor};
	border-radius: 50%;
	width: 5rem;
	height: 5rem;
	animation: spin 0.8s linear infinite;
	margin: 2rem auto;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
export default function Spinner() {
	return <StyledSpinner></StyledSpinner>;
}
