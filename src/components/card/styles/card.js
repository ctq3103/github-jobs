import styled from 'styled-components';
import { devices } from '../../../general-styles/devices';
import { cardBgColor, mainColor } from '../../../general-styles/theme';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	${({ justifyContent }) =>
		justifyContent && `justify-content: ${justifyContent}`};
`;

export const Item = styled.div`
	background-color: ${cardBgColor};
	border-radius: 0.5rem;
	padding: 0 1rem 3rem 3rem;
	cursor: pointer;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;

	flex: 0 100%;
	margin-bottom: 6rem;

	@media ${devices.tablet} {
		flex: 0 49%;
	}
	@media ${devices.laptop} {
		flex: 0 32%;
	}
`;

export const Image = styled.img`
	width: 8rem;
	height: 8rem;
	object-fit: contain;
	border-radius: 1rem;
	background-color: #ffffff;
	transform: translate(-10%, -50%);
`;

export const Group = styled.div``;

export const Title = styled.h1``;

export const Subtitle = styled.p``;

export const Text = styled.p`
	color: ${mainColor};
	font-weight: 700;
	margin-top: 2rem;
	margin-bottom: 0;
`;
