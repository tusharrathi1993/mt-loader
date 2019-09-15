import React from 'react';

import { MTLoader, Star, Bar, Circle, LoaderText, LoadingDots } from './style';

const Loader = () => {
	return (
		<MTLoader>
			<Circle>
				{/* <Bar />
				<Star /> */}
				<LoaderText centered={true}>
					Loading
					<LoadingDots />
				</LoaderText>
			</Circle>

			<LoaderText centered={false}>
				Loading
				<LoadingDots />
			</LoaderText>
		</MTLoader>
	);
};

export default Loader;
