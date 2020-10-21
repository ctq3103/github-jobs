import React from 'react';
import { Card, Spinner } from '../components';
import { useJobsValue } from '../contexts';
import { timeDiff } from '../helpers/timeDiff';

export const CardsContainer = ({ history }) => {
	const { jobs, loading, error, hasNextPage, setPage } = useJobsValue();

	return (
		<>
			<Card>
				{loading && <Spinner></Spinner>}
				{error && <h1>Error. Try refreshing.</h1>}
				{!loading && !error && jobs.length === 0 && (
					<h1>Sorry, we found no job.</h1>
				)}
			</Card>

			<Card>
				{jobs &&
					jobs.map((job) => {
						return (
							<Card.Item
								onClick={() => history.push(`/${job.id}`)}
								key={job.id}
							>
								<Card.Image
									src={
										job.company_logo
											? job.company_logo
											: '/images/desktop/logo-color.svg'
									}
									alt={job.company}
								/>
								<Card.Group>
									<Card.Subtitle>
										{timeDiff(Date.now(), Date.parse(job.created_at))} •{' '}
										{job.type}
									</Card.Subtitle>
									<Card.Title>{job.title}</Card.Title>
									<Card.Subtitle>{job.company}</Card.Subtitle>
								</Card.Group>

								<Card.Text>{job.location}</Card.Text>
							</Card.Item>
						);
					})}
			</Card>
			{hasNextPage && (
				<Card.Button onClick={() => setPage((prevPage) => prevPage + 1)}>
					Load More
				</Card.Button>
			)}
		</>
	);
};
