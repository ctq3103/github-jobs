import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import storage from 'local-storage-fallback';
import { useEffect } from 'react';

export const ThemeToggleContext = createContext();

const getInitialTheme = () => {
	const savedTheme = storage.getItem('theme');
	return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' };
};

export const ThemeContextProvider = ({ children }) => {
	const [themeState, setThemeState] = useState(getInitialTheme);

	const toggle = () => {
		const mode = themeState.mode === 'light' ? `dark` : `light`;
		setThemeState({ mode: mode });
	};

	useEffect(() => {
		storage.setItem('theme', JSON.stringify(themeState));
	}, [themeState]);

	return (
		<ThemeToggleContext.Provider value={{ themeState, toggle: toggle }}>
			<ThemeProvider theme={{ mode: themeState.mode }}>
				{children}
			</ThemeProvider>
		</ThemeToggleContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeToggleContext);
