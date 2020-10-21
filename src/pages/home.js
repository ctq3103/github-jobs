import React from 'react';
import { ScrollTopArrow } from '../components';
import { CardsContainer } from '../containers/cards';
import { FilterFormContainer } from '../containers/filter-form';

export default function Homepage({ history }) {
	return (
		<>
			<FilterFormContainer />
			<CardsContainer history={history} />
			<ScrollTopArrow />
		</>
	);
}
