import React from 'react';

import { MTLoader, Star, Bar, Circle, LoaderText, LoadingDots } from './style';

const MTLogoLoader = () => {
	return (
		<MTLoader>
			<Circle>
				<Bar />
				<Star />
			</Circle>
			<LoaderText centered={false}>
				Loading
				<LoadingDots />
			</LoaderText>
		</MTLoader>
	);
};

const MTTextLoader = () => {
	return (
		<MTLoader>
			<Circle>
				<LoaderText centered={true}>
					Loading
					<LoadingDots />
				</LoaderText>
			</Circle>
		</MTLoader>
	);
};

const MTLogoTextLoader = () => {
	return (
		<MTLoader>
			<Circle />
			<LoaderText centered={false}>
				Loading
				<LoadingDots />
			</LoaderText>
		</MTLoader>
	);
};

export default MTLogoLoader;

export { MTTextLoader, MTLogoTextLoader };
