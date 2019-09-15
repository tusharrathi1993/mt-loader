import { css } from 'styled-components';

const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
};

const DIMENTION = {
	mobileS: 50,
	tablet: 100,
	laptopL: 100,
	desktopL: 150
};

const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`
};

export const breakPoints = breakpointsCss => css`
	${breakpointsCss(DIMENTION.mobileS)};

	@media ${device.mobileS} {
		${breakpointsCss(DIMENTION.mobileS)};
	}
	@media ${device.tablet} {
		${breakpointsCss(DIMENTION.tablet)};
	}
	@media ${device.laptopL} {
		${breakpointsCss(DIMENTION.laptopL)};
	}
	@media ${device.desktopL} {
		${breakpointsCss(DIMENTION.desktopL)};
	}
`;
