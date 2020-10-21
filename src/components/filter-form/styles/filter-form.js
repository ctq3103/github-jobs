import styled from 'styled-components/macro';
import { devices } from '../../../general-styles/devices';
import {
	bodyBgColor,
	cardBgColor,
	mainColor,
	textPrimaryColor,
} from '../../../general-styles/theme';

export const Container = styled.div`
	transform: translateY(-6rem);

	@media ${devices.tablet} {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const SearchGroup = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 2rem;
	border-radius: 1rem;
	background-color: ${cardBgColor};

	@media ${devices.tablet} {
		padding: 1.5rem;
		flex: 1;
		border-right: 1px solid ${bodyBgColor};
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
	}
`;

export const SearchInput = styled.input`
	border: none;
	color: ${textPrimaryColor};
	background-color: ${cardBgColor};

	@media ${devices.tablet} {
		width: 100%;
		padding: 1.2rem 4rem;
		background-image: url('/images/desktop/icon-search.svg');
		background-position: 0.5rem;
		background-repeat: no-repeat;
	}
`;

export const FilterGroup = styled.div`
	border-radius: solid 1rem;

	margin-bottom: 4rem;

	@media ${devices.tablet} {
		background-color: ${cardBgColor};
		margin-bottom: 0;
		padding: 1.5rem;
		flex: 1;
		border-right: 1px solid ${bodyBgColor};
	}
`;

export const FilterInput = styled.input`
	color: ${textPrimaryColor};
	background-color: ${cardBgColor};
	border: none;
	border-bottom: solid 0.1rem ${bodyBgColor};

	padding: 1.5rem 6rem 1rem 1rem;

	@media ${devices.tablet} {
		width: 100%;
		border-bottom: none;
		padding: 1.2rem 4rem;
		background-image: url('/images/desktop/icon-location.svg');
		background-position: 0.5rem;
		background-repeat: no-repeat;
	}
`;

export const CheckboxGroup = styled.div`
	background-color: ${cardBgColor};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	@media ${devices.tablet} {
		padding: 1.5rem;
		flex: 1;
		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}
`;

export const CheckboxContainer = styled.label`
	display: block;
	position: relative;
	padding-left: 3.5rem;
	cursor: pointer;
	color: ${textPrimaryColor};
	font-weight: 700;
	user-select: none;
`;
export const CheckboxInput = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;

export const Checkmark = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 2.5rem;
	width: 2.5rem;
	background-color: ${textPrimaryColor};
	opacity: 0.6;

	${CheckboxContainer}:hover ${CheckboxInput} ~ & {
		opacity: 1;
	}

	${CheckboxInput}:checked ~ & {
		background-color: ${mainColor};
	}

	&:after {
		content: '';
		position: absolute;
		display: none;
	}

	${CheckboxContainer} ${CheckboxInput}:checked ~ &:after {
		display: block;
	}

	${CheckboxContainer} &:after {
		left: 0.9rem;
		top: 0.5rem;
		width: 0.5rem;
		height: 1rem;
		border: solid white;
		border-width: 0 0.2rem 0.2rem 0;

		transform: rotate(45deg);
	}
`;

export const Text = styled.span``;
export const Button = styled.button``;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1000;
`;

export const Modal = styled.div`
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${cardBgColor};
	border-radius: 1rem;
	padding: 4rem 6rem;
	z-index: 1000;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ModalButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;

	& .icon {
		color: ${mainColor};
		padding: 1.5rem;
	}
`;
