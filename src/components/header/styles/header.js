import styled from 'styled-components/macro';
import { devices } from '../../../general-styles/devices';
import { mainColor } from '../../../general-styles/theme';

export const Background = styled.div`
	background-color: ${mainColor};
	padding: 3.5rem 2.5rem 7rem 2.5rem;
	background-image: url(/images/mobile/bg-pattern-header.svg);
	background-repeat: no-repeat;
	background-size: cover;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media ${devices.tablet} {
		padding: 4rem 4rem 8rem 4rem;
		border-bottom-left-radius: 9.5rem;
		background-image: url(/images/tablet/bg-pattern-header.svg);
	}

	@media ${devices.laptop} {
		padding: 4rem 12rem 8rem 12rem;
		background-image: url(/images/desktop/bg-pattern-header.svg);
	}
`;

export const Link = styled.p`
	text-decoration: none;
`;

export const Group = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Switch = styled.label`
	margin: 0 1rem;
	position: relative;
	display: inline-block;
	width: 4rem;
	height: 2rem;
`;

export const SwitchInput = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
`;

export const SwitchSlider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: hsl(0, 0%, 100%);
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 3.4rem;

	&:before {
		position: absolute;
		content: '';
		height: 1.6rem;
		width: 1.6rem;
		left: 0.2rem;
		bottom: 0.2rem;
		background-color: ${mainColor};
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	${SwitchInput}:checked + & {
		background-image: linear-gradient(
			90deg,
			hsl(230, 22%, 74%) 0,
			hsl(230, 22%, 74%) 100%
		);
	}

	${SwitchInput}:checked + &:before {
		transform: translateX(2rem);
		background-color: hsl(0, 0%, 100%);
	}
`;
