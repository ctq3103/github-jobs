import React, { useState, useEffect } from 'react';
import { Container } from './styles/scrollTop';
import { useWindowScroll } from 'react-use';

export default function ScrollTopArrow() {
	const { y: pageYOffset } = useWindowScroll();
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		if (pageYOffset > 400) {
			setShowScroll(true);
		} else {
			setShowScroll(false);
		}
	}, [pageYOffset]);

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (!showScroll) return false;

	return (
		<Container
			onClick={scrollTop}
			style={{ display: showScroll ? 'flex' : 'none' }}
		>
			<i className="icon fas fa-chevron-up"></i>
		</Container>
	);
}
