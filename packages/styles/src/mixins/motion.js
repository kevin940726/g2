import { REDUCED_MOTION_MODE_ATTR } from '@wp-g2/create-styles';

import { css } from '../style-system';

/**
 * @param {any} strings
 * @param {any[]} interpolations
 */
export function reducedMotion(strings, ...interpolations) {
	const interpolatedStyles = css(strings, ...interpolations);

	return css`
		@media (prefers-reduced-motion) {
			transition: none !important;
			${interpolatedStyles};
		}
		${REDUCED_MOTION_MODE_ATTR} & {
			transition: none !important;
			${interpolatedStyles};
		}
	`;
}
