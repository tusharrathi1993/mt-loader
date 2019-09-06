import React from 'react';

import { MTLoader, Star, Bar, Circle } from './style';

const Loader = () => {
	return (
		<MTLoader>
			<Circle>
				<Bar />
				<Star />
			</Circle>
		</MTLoader>
	);
};

export default Loader;
