import { connect } from '@wp-g2/provider';
import { cx } from '@wp-g2/styles';
import React from 'react';
import { TooltipReference } from 'reakit/Tooltip';

import { useTooltipContext } from './Tooltip.Context';
import * as styles from './Tooltip.styles';

function TooltipTrigger({ as = 'span', className, forwardedRef, ...props }) {
	const { tooltip } = useTooltipContext();
	const classes = cx([styles.noOutline, className]);

	return (
		<TooltipReference
			{...props}
			{...tooltip}
			as={as}
			className={classes}
			ref={forwardedRef}
		/>
	);
}

export default connect(TooltipTrigger);
