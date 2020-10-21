import React from 'react';
import ReactDom from 'react-dom';
import {
	CheckboxContainer,
	CheckboxGroup,
	CheckboxInput,
	Checkmark,
	Container,
	FilterGroup,
	FilterInput,
	SearchGroup,
	SearchInput,
	Text,
	Button,
	Overlay,
	Modal,
	ModalButton,
} from './styles/filter-form';

export default function FilterForm({ children, ...props }) {
	return (
		<Container className="container" {...props}>
			{children}
		</Container>
	);
}

FilterForm.SearchGroup = function FilterFormSearchGroup({
	children,
	...props
}) {
	return <SearchGroup {...props}>{children}</SearchGroup>;
};

FilterForm.SearchInput = function FilterFormSearchInput({
	children,
	...props
}) {
	return (
		<>
			<SearchInput
				className="full-text"
				name="description"
				placeholder="Filter by title, companies, expertise..."
				{...props}
			>
				{children}
			</SearchInput>
			<SearchInput
				className="short-text"
				placeholder="Filter by title..."
				name="description"
				{...props}
			>
				{children}
			</SearchInput>
		</>
	);
};

FilterForm.FilterGroup = function FilterFormFilterGroup({
	children,
	...props
}) {
	return <FilterGroup {...props}>{children}</FilterGroup>;
};

FilterForm.FilterInput = function FilterFormFilterInput({
	children,
	...props
}) {
	return (
		<FilterInput name="location" placeholder="Filter by location..." {...props}>
			{children}
		</FilterInput>
	);
};

FilterForm.CheckboxGroup = function FilterFormCheckboxGroup({
	children,
	...props
}) {
	return <CheckboxGroup {...props}>{children}</CheckboxGroup>;
};

FilterForm.Checkbox = function FilterFormCheckbox({ children, ...props }) {
	return (
		<CheckboxContainer>
			<Text className="full-text">Full Time Only</Text>
			<Text className="short-text">Full Time</Text>
			<CheckboxInput name="full_time" type="checkbox" {...props} />

			<Checkmark />
		</CheckboxContainer>
	);
};

FilterForm.Button = function FilterFormButton({ children, ...props }) {
	return <Button {...props}>{children}</Button>;
};

FilterForm.Modal = function FilterFormModal({ open, children, onClose }) {
	if (!open) return null;

	return ReactDom.createPortal(
		<>
			<Overlay />
			<Modal>
				<ModalButton>
					<i onClick={onClose} className="icon fas fa-times"></i>
				</ModalButton>
				{children}
			</Modal>
		</>,
		document.getElementById('portal')
	);
};
