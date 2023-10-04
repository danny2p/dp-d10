import { type ConditionalElement } from '../../typings/index';
import { type TGenericChildrenProps, type TResources } from '../utils/GenericFieldComponent';
type SkuFieldChildrenProps = TGenericChildrenProps<TResources['Sku']>;
type TCondition = ConditionalElement<Exclude<TResources['Sku'], 'resource'>>;
type Props = {
    children?: (props: SkuFieldChildrenProps) => JSX.Element;
} & TCondition;
/**
 * @param props {@link Props}
 * @returns
 */
export declare function SkuField<P extends Props>(props: P): JSX.Element;
export default SkuField;
