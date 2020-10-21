import React from 'react';
import { ScrollTopArrow } from '../components';
import { DetailContainer } from '../containers/detail';

export default function Detailpage({ match }) {
	return (
		<>
			<DetailContainer jobId={match.params.id} />
		</>
	);
}
