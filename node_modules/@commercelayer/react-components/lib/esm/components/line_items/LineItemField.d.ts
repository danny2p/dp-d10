import { type ConditionalElement } from '../../typings/index';
import { type TGenericChildrenProps, type TResources } from '../utils/GenericFieldComponent';
type LineItemFieldChildrenProps = TGenericChildrenProps<TResources['LineItem']>;
type TCondition = ConditionalElement<Exclude<TResources['LineItem'], 'resource'>>;
type Props = {
    children?: (props: LineItemFieldChildrenProps) => JSX.Element;
} & TCondition;
/**
 * @param props {@link Props}
 * @returns
 */
export declare function LineItemField<P extends Props>(props: P): JSX.Element;
export default LineItemField;
