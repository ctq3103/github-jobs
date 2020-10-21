import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
	Background,
	Group,
	Switch,
	SwitchInput,
	SwitchSlider,
} from './styles/header';
import { useTheme } from '../../contexts';

export default function Header({ children, ...props }) {
	return <Background {...props}>{children}</Background>;
}

Header.Group = function HeaderGroup({ children, ...props }) {
	return <Group {...props}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...props }) {
	return (
		<ReactRouterLink to={to}>
			<img src="/images/desktop/logo.svg" alt="logo" />
		</ReactRouterLink>
	);
};

Header.ThemeSwitcher = function HeaderThemeSwitcher({ children, ...props }) {
	const { toggle, themeState } = useTheme();
	const checked = themeState.mode === 'dark' ? true : false;

	return (
		<Group {...props}>
			<img src="/images/desktop/icon-sun.svg" alt="" />
			<Switch>
				<SwitchInput
					type="checkbox"
					onClick={() => toggle()}
					defaultChecked={checked}
				/>
				<SwitchSlider />
			</Switch>
			<img src="/images/desktop/icon-moon.svg" alt="" />
		</Group>
	);
};
