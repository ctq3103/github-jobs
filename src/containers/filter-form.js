import React, { useState } from 'react';
import { FilterForm } from '../components';
import { useJobsValue } from '../contexts';

export function FilterFormContainer() {
	const { setPage, setParams, params } = useJobsValue();
	const [searchTerm, setSearchTerm] = useState({});
	const [isOpen, setIsOpen] = useState(false);

	const handleSearchInput = (e) => {
		e.preventDefault();
		const { name, value } = e.target;

		setSearchTerm({ ...searchTerm, [name]: value });
	};

	const handleCheckboxInput = ({ target: { name, checked } }) => {
		setSearchTerm({ ...searchTerm, [name]: checked });
	};

	const handleSearch = (searchTerm) => {
		setPage(1);
		setParams((prevParams) => {
			return { ...prevParams, ...searchTerm };
		});
	};

	return (
		<>
			<FilterForm>
				<FilterForm.SearchGroup>
					<FilterForm.SearchInput
						defaultValue={params.description}
						onChange={handleSearchInput}
					/>

					<div>
						<img
							onClick={() => setIsOpen(true)}
							className="hide-for-tablet hide-for-laptop"
							src="/images/mobile/icon-filter.svg"
							style={{ marginRight: '2rem' }}
							alt=""
						/>
						<FilterForm.Button
							onClick={() => handleSearch(searchTerm)}
							className="hide-for-tablet hide-for-laptop btn"
						>
							<img src="/images/mobile/icon-search.svg" alt="" />
						</FilterForm.Button>
					</div>
				</FilterForm.SearchGroup>

				<FilterForm.FilterGroup className="hide-for-mobile">
					<FilterForm.FilterInput
						defaultValue={params.location}
						onChange={handleSearchInput}
					/>
				</FilterForm.FilterGroup>

				<FilterForm.CheckboxGroup className="hide-for-mobile">
					<FilterForm.Checkbox
						defaultChecked={params.full_time}
						onChange={handleCheckboxInput}
					/>

					<FilterForm.Button
						className="btn"
						onClick={() => handleSearch(searchTerm)}
					>
						Search
					</FilterForm.Button>
				</FilterForm.CheckboxGroup>
			</FilterForm>

			<FilterForm.Modal open={isOpen} onClose={() => setIsOpen(false)}>
				<FilterForm.FilterGroup>
					<FilterForm.FilterInput
						defaultValue={params.location}
						onChange={handleSearchInput}
					/>
				</FilterForm.FilterGroup>

				<FilterForm.CheckboxGroup>
					<FilterForm.Checkbox
						defaultChecked={params.full_time}
						onChange={handleCheckboxInput}
					/>

					<FilterForm.Button
						className="btn"
						onClick={() => {
							handleSearch(searchTerm);
							setIsOpen(false);
						}}
					>
						Search
					</FilterForm.Button>
				</FilterForm.CheckboxGroup>
			</FilterForm.Modal>
		</>
	);
}
