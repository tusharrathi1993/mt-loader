import styled, { keyframes, css } from 'styled-components';

import { breakPoints } from './constants';

const rorateRing = keyframes`
	0% {
			transform: rotate(0);
	}
	75% {
		transform: rotate(360deg);
	}
	100% {
		transform: rotate(360deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const boxShadowGrow = keyframes`
		0% {
			box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
		}
		25% {
			box-shadow: 0px 0px 25px 50px rgba(0, 0, 0, 0.2);
		}
		50% {
			box-shadow: 0px 0px 50px 100px rgba(0, 0, 0, 0.1);
		}
		60% {
			box-shadow: 0px 0px 75px 150px rgba(0, 0, 0, 0.05);
		}
		100% {
			box-shadow: 0px 0px 100px 200px rgba(0, 0, 0, 0);
		}
`;

const getMediaQueriesCSS = size => css`
	height: ${size + 'px'};
	width: ${size + 'px'};
	border: ${size / 10 + 'px'} solid rgba(0, 0, 0, 0.2);

	&::before {
		height: ${size + 'px'};
		width: ${size + 'px'};
		border: ${size / 10 + 'px'} solid transparent;
		border-top: ${size / 10 + 'px'} solid orange;
		top: ${-size / 10 + 'px'};
		left: ${-size / 10 + 'px'};
	}
`;

const Circle = styled.div`
	position: relative;
	text-align: center;
	margin: 0 auto;
	top: 50%;
	transform: translate(0, -50%);
	border-radius: 50%;
	background-color: white;
	animation: ${boxShadowGrow} 1s ease-in-out infinite both;

	&::before {
		position: absolute;
		content: '';
		border-radius: 50%;
		animation: ${rorateRing} 1s ease-in-out infinite both;
	}

	${breakPoints(getMediaQueriesCSS)};
`;

export default Circle;
