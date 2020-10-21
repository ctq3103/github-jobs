import styled, { keyframes } from 'styled-components';
import { mainColor } from '../../../general-styles/theme';

const scrollTop = keyframes`
    from {
        transform: translateY(0.2rem)
    }
    to {
        transform: translateY(-0.1rem)
    }
`;

export const Container = styled.div`
	position: fixed;
	bottom: 1.2rem;
	right: 0;
	margin-right: 3rem;
	width: 4rem;
	height: 4rem;
	border-radius: 100%;
	background: ${mainColor};
	cursor: pointer;
	z-index: 10;

	justify-content: center;
	align-items: center;

	& .icon {
		animation: ${scrollTop} 0.5s alternate ease infinite;
		color: #ffffff;
	}
`;
