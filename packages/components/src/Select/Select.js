import { connect } from '@wp-g2/provider';
import { cx } from '@wp-g2/styles';
import { mergeRefs, noop } from '@wp-g2/utils';
import React, { useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { BaseField } from '../BaseField';
import { Flex, FlexBlock } from '../Flex';
import { Icon } from '../Icon';
import { Text } from '../Text';
import * as TextFieldStyles from '../TextField/TextField.styles';
import * as styles from './Select.styles';

const { ArrowWrapperView } = styles;
const { InputView } = TextFieldStyles;

function Select({
	className,
	forwardedRef,
	onBlur = noop,
	onFocus = noop,
	options = [],
	size,
	...props
}) {
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef();

	const handleOnRootClick = () => {
		inputRef.current.focus();
	};

	const handleOnBlur = (event) => {
		onBlur(event);
		setIsFocused(false);
	};

	const handleOnFocus = (event) => {
		onFocus(event);
		setIsFocused(true);
	};

	const classes = cx([styles.base, className]);
	const inputCx = cx([styles.select, TextFieldStyles[size]]);

	return (
		<BaseField
			{...props}
			as={Flex}
			className={classes}
			gap={0}
			isFocused={isFocused}
			onClick={handleOnRootClick}
		>
			<FlexBlock>
				<InputView
					as="select"
					cx={inputCx}
					onBlur={handleOnBlur}
					onFocus={handleOnFocus}
					ref={mergeRefs([forwardedRef, inputRef])}
				>
					{options.map((option, index) => {
						const { id, label, value, ...optionProps } = option;

						return (
							<option
								key={id || value || index}
								value={value}
								{...optionProps}
							>
								{label}
							</option>
						);
					})}
				</InputView>
			</FlexBlock>
			<ArrowWrapperView>
				<Text isBlock variant="muted">
					<Icon icon={<FiChevronDown />} size={14} />
				</Text>
			</ArrowWrapperView>
		</BaseField>
	);
}

export default connect(Select);