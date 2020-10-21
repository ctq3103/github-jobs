import styled from 'styled-components';
import { devices } from '../../../general-styles/devices';
import { cardBgColor, mainColor } from '../../../general-styles/theme';

export const Container = styled.div``;

export const Group = styled.div`
	display: flex;
	flex-direction: column;

	${({ padding }) => padding && `padding: ${padding}`};
	${({ textAlign }) => textAlign && `text-align: ${textAlign}`};

	@media ${devices.tablet} {
		${({ flexDirection }) =>
			flexDirection && `flex-direction: ${flexDirection}`};
		${({ justifyContent }) =>
			justifyContent && `justify-content: ${justifyContent}`};
		${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
		${({ transform }) => transform && `transform: ${transform}`};
		${({ margin }) => margin && `margin: ${margin}`};
	}
`;
export const Image = styled.img`
	width: 5rem;
	height: 5rem;
	object-fit: contain;
	border-radius: 0.5rem;
	background-color: #ffffff;
	transform: translate(-10%, -50%);

	@media ${devices.tablet} {
		width: 12rem;
		height: 12rem;
		transform: none;
	}
`;

export const Header = styled.div`
	background-color: ${cardBgColor};
	border-radius: 0.5rem;
	padding: 0 4rem 2rem 4rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	transform: translateY(-20%);

	@media ${devices.tablet} {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 3rem 0 0;
		text-align: left;

		transform: translateY(-50%);
	}
`;

export const Content = styled.div`
	background-color: ${cardBgColor};
	border-radius: 0.5rem;
	padding: 4rem;
`;

export const AfterContent = styled.div`
	background-color: ${mainColor};
	padding: 4rem;
	background-image: url(/images/mobile/bg-pattern-detail-footer.svg);
	background-repeat: no-repeat;
	background-size: cover;
	color: #ffffff;
	border-radius: 0.5rem;

	margin: 6rem auto;

	& a {
		color: #ffffff;
	}

	@media ${devices.tablet} {
		background-image: url(/images/desktop/bg-pattern-detail-footer.svg);
	}
`;

export const Footer = styled.div`
	background-color: ${cardBgColor};

	@media ${devices.tablet} {
		& ${Container} {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
`;

export const Title = styled.h1`
	${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
	${({ color }) => color && `color: ${color}`};
	${({ margin }) => margin && `margin: ${margin}`};
	text-transform: capitalize;
`;

export const SubTitle = styled.p`
	${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
	${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
	${({ color }) => color && `color: ${color}`};
	${({ margin }) => margin && `margin: ${margin}`};
`;

export const Button = styled.button`
	${({ width }) => width && `width: ${width}`};
	${({ margin }) => margin && `margin: ${margin}`};

	@media ${devices.tablet} {
		width: inherit;
	}
`;
