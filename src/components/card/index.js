import React from 'react';
import {
	Container,
	Group,
	Image,
	Item,
	Subtitle,
	Text,
	Title,
} from './styles/card';

export default function Card({ children, ...props }) {
	return (
		<Container justifyContent="space-between" className="container" {...props}>
			{children}
		</Container>
	);
}

Card.Item = function CardItem({ children, ...props }) {
	return <Item {...props}>{children}</Item>;
};

Card.Image = function CardImage({ ...props }) {
	return <Image {...props} />;
};

Card.Group = function CardGroup({ children, ...props }) {
	return <Group {...props}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...props }) {
	return <Title {...props}>{children}</Title>;
};

Card.Subtitle = function CardSubtitle({ children, ...props }) {
	return <Subtitle {...props}>{children}</Subtitle>;
};

Card.Text = function CardText({ children, ...props }) {
	return <Text {...props}>{children}</Text>;
};

Card.Button = function CardButton({ children, ...props }) {
	return (
		<Container justifyContent="center" className="container">
			<button className="btn" {...props}>
				{children}
			</button>
		</Container>
	);
};
