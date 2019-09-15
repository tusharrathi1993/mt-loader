import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { breakPoints } from './constants';

const getMediaQueriesTextCSS = size => css`
	font-size: ${size / 5 + 'px'};
`;

const getMediaQueriesLoadingDotsCSS = size => css`
	width: ${size / 20 + 'px'};
	height: ${size / 20 + 'px'};
`;

const dotsKeyframe = keyframes`
  0%{
    opacity: 0;
    transform: scale(0);
  }
  75%{
    opacity: 1;
    transform: scale(1);
  }
  100%{
    opacity: 0;
    transform: scale(1);
  }
`;

const centeredCSS = css`
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const nonCenteredCSS = css`
	top: 50%;
	margin: -10px 0 0 0;
	transform: translate(0, -50%);
`;

const LoaderText = styled.div`
	position: relative;
	text-align: center;
	color: orange;

	${({ centered }) => (centered ? centeredCSS : nonCenteredCSS)};

	${breakPoints(getMediaQueriesTextCSS)};
`;

const LoadingDot = styled.span`
	background-color: orange;
	display: inline-block;
	border-radius: 50%;
	margin: 0 0 0 2px;
	${breakPoints(getMediaQueriesLoadingDotsCSS)};

	animation: ${dotsKeyframe} 2s linear infinite both;

	&.first {
		animation-delay: 0s;
	}
	&.second {
		animation-delay: 0.5s;
	}
	&.third {
		animation-delay: 1s;
	}
`;
const LoadingDots = () => {
	return (
		<React.Fragment>
			<LoadingDot className="first" />
			<LoadingDot className="second" />
			<LoadingDot className="third" />
		</React.Fragment>
	);
};

export default LoaderText;

export { LoadingDots };
