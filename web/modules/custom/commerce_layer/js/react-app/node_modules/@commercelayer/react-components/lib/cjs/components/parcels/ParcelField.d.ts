import { type ConditionalElement } from '../../typings/index';
import { type TGenericChildrenProps, type TResources } from '../utils/GenericFieldComponent';
type ParcelFieldChildrenProps = TGenericChildrenProps<TResources['Parcel']>;
type TCondition = ConditionalElement<Exclude<TResources['Parcel'], 'resource'>>;
type Props = {
    children?: (props: ParcelFieldChildrenProps) => JSX.Element;
} & TCondition;
/**
 * @param props {@link Props}
 * @returns
 */
export declare function ParcelField<P extends Props>(props: P): JSX.Element;
export default ParcelField;
