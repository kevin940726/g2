export { ns } from '@wp-g2/styles';

/**
 * Creates a dedicated connected context namespace HTML attribute for components.
 * ns is short for "namespace"
 *
 * @example
 * ```jsx
 * <div {...cns()} />
 * ```
 *
 * @returns {object} A props object with the namespaced HTML attribute.
 */
export function cns() {
	return { 'data-g2-c16t': true };
}
