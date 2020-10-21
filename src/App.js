import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withTheme } from 'styled-components';
import { Homepage, Detailpage } from './pages';
import { HeaderContainer } from './containers/header';
import ScrollToTop from './helpers/scrollToTop';

function App() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<HeaderContainer />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/:id" component={Detailpage} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default withTheme(App);
