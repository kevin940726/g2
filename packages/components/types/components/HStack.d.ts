import * as React from 'react';
import { ConnectedProps, CSS } from './_shared';
import { FlexProps } from './Flex';

export declare type HStackAlignment =
	| 'bottom'
	| 'bottomLeft'
	| 'bottomRight'
	| 'center'
	| 'edge'
	| 'left'
	| 'right'
	| 'stretch'
	| 'top'
	| 'topLeft'
	| 'topRight';

export declare type HStackProps = FlexProps & {
	/**
	 * Determines how the child elements are aligned.
	 *
	 * @default 'edge'
	 */
	alignment?: HStackAlignment | CSS['alignItems'];
	/**
	 * The amount of space between each child element.
	 *
	 * @default 2
	 */
	spacing?: CSS['width'];
};

/**
 * `HStack` (Horizontal Stack) arranges child elements in a horizontal line.
 */
export declare const HStack: React.FC<ConnectedProps & HStackProps>;
