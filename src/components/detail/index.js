import React from 'react';
import {
	AfterContent,
	Button,
	Container,
	Content,
	Footer,
	Group,
	Header,
	Image,
	SubTitle,
	Title,
} from './styles/detail';

export default function Detail({ children, ...props }) {
	return (
		<Container className="detailpage-container" {...props}>
			{children}
		</Container>
	);
}

Detail.Group = function DetailGroup({ children, ...props }) {
	return <Group {...props}>{children}</Group>;
};

Detail.Header = function DetailHeader({ children, ...props }) {
	return <Header {...props}>{children}</Header>;
};

Detail.Content = function DetailContent({ children, ...props }) {
	return <Content {...props}>{children}</Content>;
};

Detail.AfterContent = function DetailAfterContent({ children, ...props }) {
	return <AfterContent {...props}>{children}</AfterContent>;
};

Detail.Footer = function DetailFooter({ children, ...props }) {
	return <Footer {...props}>{children}</Footer>;
};

Detail.Image = function DetailImage({ children, ...props }) {
	return <Image {...props} />;
};

Detail.Title = function DetailTitle({ children, ...props }) {
	return <Title {...props}>{children}</Title>;
};

Detail.SubTitle = function DetailSubTitle({ children, ...props }) {
	return <SubTitle {...props}>{children}</SubTitle>;
};

Detail.Button = function DetailButton({ children, ...props }) {
	return <Button {...props}>{children}</Button>;
};
