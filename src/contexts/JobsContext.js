import React, { createContext, useContext, useState } from 'react';
import useFetchData from '../hooks/useFetchData';

export const JobsContext = createContext();

export const JobsContextProvider = ({ children }) => {
	const [params, setParams] = useState({});
	const [page, setPage] = useState(1);
	const { jobs, loading, error, hasNextPage } = useFetchData(params, page);

	return (
		<JobsContext.Provider
			value={{
				jobs,
				loading,
				error,
				hasNextPage,
				params,
				setParams,
				page,
				setPage,
			}}
		>
			{children}
		</JobsContext.Provider>
	);
};

export const useJobsValue = () => useContext(JobsContext);
