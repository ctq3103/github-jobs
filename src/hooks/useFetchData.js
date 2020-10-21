import { useEffect, useReducer } from 'react';
import axios from 'axios';

const ACTIONS = {
	FETCH_START: 'fetch-start',
	FETCH_FINISH: 'fetch-finish',
	FETCH_ERROR: 'fetch-error',
	HAS_NEXT_PAGE: 'has-next-page',
};

const BASE_URL =
	'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.FETCH_START:
			return {
				loading: true,
				jobs: action.payload.jobs,
			};
		case ACTIONS.FETCH_FINISH:
			return {
				...state,
				loading: false,
				jobs: [...new Set([...state.jobs, ...action.payload.jobs])],
			};
		case ACTIONS.FETCH_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				jobs: [],
			};
		case ACTIONS.HAS_NEXT_PAGE:
			return { ...state, hasNextPage: action.payload.hasNextPage };
		default:
			return state;
	}
};

export default function useFetchData(params, page) {
	const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

	useEffect(() => {
		console.log('params', params);
		const fetchData = async () => {
			//avoid making request when params change
			const cancelToken1 = axios.CancelToken.source();
			const cancelToken2 = axios.CancelToken.source();

			try {
				if (
					params.hasOwnProperty('full_time') ||
					params.hasOwnProperty('description') ||
					params.hasOwnProperty('location')
				) {
					dispatch({ type: ACTIONS.FETCH_START, payload: { jobs: [] } });
				} else {
					dispatch({
						type: ACTIONS.FETCH_START,
						payload: { jobs: state.jobs.length === 0 ? [] : [...state.jobs] },
					});
				}

				const { data } = await axios.get(BASE_URL, {
					cancelToken: cancelToken1.token,
					params: {
						page: page,
						...params,
					},
				});
				dispatch({
					type: ACTIONS.FETCH_FINISH,
					payload: { jobs: data },
				});
			} catch (err) {
				if (axios.isCancel(err)) return;
				dispatch({ type: ACTIONS.FETCH_ERROR, payload: { error: err } });
			}

			try {
				const { data } = await axios.get(BASE_URL, {
					cancelToken: cancelToken2.token,
					params: { page: page + 1, ...params },
				});
				dispatch({
					type: ACTIONS.HAS_NEXT_PAGE,
					payload: { hasNextPage: data.length !== 0 },
				});
			} catch (err) {
				if (axios.isCancel(err)) return;
				dispatch({ type: ACTIONS.FETCH_ERROR, payload: { error: err } });
			}

			return () => {
				cancelToken1.cancel();
				cancelToken2.cancel();
			};
		};

		fetchData();
	}, [params, page]);

	return state;
}
