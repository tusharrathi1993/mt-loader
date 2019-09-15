import styled from 'styled-components';

import Bar from './bar';
import Circle from './circle';
import Star from './star';
import LoaderText, { LoadingDots } from './loaderText';

const MTLoader = styled.div`
	position: relative;
	width: 33vw;
	height: 100vh;
	margin: auto;
	display: inline-block;
`;

export { MTLoader, Star, Bar, Circle, LoaderText, LoadingDots };
