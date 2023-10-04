import { type ConditionalElement } from '../../typings/index';
import { type TGenericChildrenProps, type TResources } from '../utils/GenericFieldComponent';
type ParcelLineItemFieldChildrenProps = TGenericChildrenProps<TResources['ParcelLineItem']>;
type TCondition = ConditionalElement<Exclude<TResources['ParcelLineItem'], 'resource'>>;
type Props = {
    children?: (props: ParcelLineItemFieldChildrenProps) => JSX.Element;
} & TCondition;
/**
 * @param props {@link Props}
 * @returns
 */
export declare function ParcelLineItemField<P extends Props>(props: P): JSX.Element;
export default ParcelLineItemField;
