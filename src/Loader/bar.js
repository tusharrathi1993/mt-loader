import styled, { keyframes, css } from 'styled-components';

import { breakPoints } from './constants';

const heartbeat = keyframes`
  from {
    transform: scale(1) ;
  }
  10% {
    transform: scale(0.91) ;
  }
  17% {
    transform: scale(0.98) ;
  }
  33% {
    transform: scale(0.87) ;
  }
  45% {
    transform: scale(1) ;
  }
`;

const getMediaQueriesCSS = size => css`
	top: ${size / 10 + 'px'};
	border-top: ${size / 2 + 'px'} solid black;
	border-left: ${size / 20 + 'px'} solid transparent;
	border-right: ${size / 20 + 'px'} solid transparent;
	width: ${size / 5 + 'px'};
`;

const Bar = styled.div`
	position: relative;
	display: inline-block;
	height: 0;
	animation: ${heartbeat} 2s ease-in-out infinite both;

	${breakPoints(getMediaQueriesCSS)};
`;

export default Bar;
