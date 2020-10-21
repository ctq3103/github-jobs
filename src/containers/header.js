import React from 'react';
import { Header } from '../components';

export function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Logo to="/" />
			<Header.ThemeSwitcher />
			{children}
		</Header>
	);
}
