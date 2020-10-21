import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { JobsContextProvider, ThemeContextProvider } from './contexts';
import { GlobalStyles } from './general-styles/global-styles';

render(
	<React.StrictMode>
		<ThemeContextProvider>
			<GlobalStyles />
			<JobsContextProvider>
				<App />
			</JobsContextProvider>
		</ThemeContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
