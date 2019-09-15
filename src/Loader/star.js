import React from 'react';
import styled, { keyframes, css } from 'styled-components';

import { breakPoints } from './constants';

const StarSvg = () => {
	return (
		<Star>
			<svg
				id="star"
				viewBox="0 0 16 16"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g
						transform="translate(-1340.000000, -83.000000)"
						fill="orange"
						fill-rule="nonzero"
					>
						<path
							d="M1354.77357,88.3333333 C1356.00327,88.3333333 1356.34064,89.6920816 1355.6382,90.3933537 L1355.56712,90.4549371 L1352.16507,93.0053168 L1353.55044,97.2890014 C1353.72135,97.8183965 1353.54251,98.4011596 1353.1013,98.7388803 C1352.8775,98.909619 1352.60625,99 1352.32924,99 C1352.06051,99 1351.79643,98.9137015 1351.57563,98.7517168 L1347.99937,96.1188994 L1344.42363,98.7513293 C1343.968,99.0874545 1343.35059,99.0822104 1342.8966,98.7382386 C1342.45622,98.4011596 1342.27738,97.8183965 1342.4484,97.2886795 L1343.83366,93.0053573 L1340.43099,90.4549709 L1340.35863,90.3921196 C1339.65238,89.6833386 1340.00966,88.3333333 1341.25047,88.3333333 L1345.38531,88.3333333 L1346.77866,83.8981878 C1346.9505,83.3644463 1347.44126,83 1347.99937,83 C1348.55748,83 1349.04824,83.3644463 1349.2237,83.9098107 L1350.55923,88.3333333 L1354.77357,88.3333333 Z"
							id="starFilled"
						/>
					</g>
				</g>
			</svg>
		</Star>
	);
};

const rotateScaleUp = keyframes`
  0% {
			transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
`;

const getMediaQueriesCSS = size => css`
	bottom: ${size / 10 + 'px'};
	height: ${size / 4 + 'px'};
	width: ${size / 4 + 'px'};

	svg {
		height: ${size / 4 + 'px'};
		width: ${size / 4 + 'px'};
	}
`;

const Star = styled.div`
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);

	#star {
		animation: ${rotateScaleUp} 1s linear infinite both;
	}

	${breakPoints(getMediaQueriesCSS)};
`;

export default StarSvg;
