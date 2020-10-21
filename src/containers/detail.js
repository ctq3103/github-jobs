import React from 'react';
import { Detail, Spinner } from '../components';
import { useJobsValue } from '../contexts';
import { timeDiff } from '../helpers/timeDiff';

export function DetailContainer({ jobId }) {
	const { jobs, loading, error } = useJobsValue();
	const job = jobs.find((job) => job.id === jobId);

	return (
		<>
			{loading && <Spinner></Spinner>}
			{error && <h1>Error. Try refreshing.</h1>}
			{job && (
				<>
					<Detail>
						<Detail.Header>
							<Detail.Image
								src={
									job.company_logo
										? job.company_logo
										: '/images/desktop/logo-color.svg'
								}
								alt={job.company}
							/>
							<Detail.Group
								margin="0 0 0 5rem"
								justifyContent="center"
								alignItems="flex-start"
							>
								<Detail.Title margin="0">{job.company}</Detail.Title>
								<Detail.SubTitle>{job.company_url}</Detail.SubTitle>
							</Detail.Group>

							<Detail.Button className="btn-inverse">
								<a href={job.company_url}>Company Site</a>
							</Detail.Button>
						</Detail.Header>

						<Detail.Content>
							<Detail.Group
								flexDirection="row"
								justifyContent="space-between"
								alignItems="center"
							>
								<Detail.Group>
									<Detail.SubTitle margin="0 0 .5rem 0">
										{timeDiff(Date.now(), Date.parse(job.created_at))} •{' '}
										{job.type}
									</Detail.SubTitle>
									<Detail.Title fontSize="2.5rem" margin="0">
										{job.title}
									</Detail.Title>
									<Detail.SubTitle color="hsl(235, 69%, 62%)" fontWeight="700">
										{job.location}
									</Detail.SubTitle>
								</Detail.Group>
								<Detail.Button className="btn" width="100%" margin="1.5rem 0">
									<a href={job.url} style={{ color: '#fff' }}>
										Apply Now
									</a>
								</Detail.Button>
							</Detail.Group>

							<Detail.Group>
								<Detail.Group
									dangerouslySetInnerHTML={{ __html: job.description }}
								></Detail.Group>
							</Detail.Group>
						</Detail.Content>

						<Detail.AfterContent>
							<Detail.Title color="#ffffff" fontSize="2.2rem">
								How To Apply
							</Detail.Title>
							<Detail.Group
								dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
							></Detail.Group>
						</Detail.AfterContent>
					</Detail>

					<Detail.Footer>
						<Detail>
							<Detail.Group className="hide-for-mobile">
								<Detail.Title margin="0">{job.title}</Detail.Title>
								<Detail.SubTitle>{job.company}</Detail.SubTitle>
							</Detail.Group>
							<Detail.Button className="btn" width="100%">
								<a href={job.url} style={{ color: '#fff' }}>
									Apply Now
								</a>
							</Detail.Button>
						</Detail>
					</Detail.Footer>
				</>
			)}
		</>
	);
}
