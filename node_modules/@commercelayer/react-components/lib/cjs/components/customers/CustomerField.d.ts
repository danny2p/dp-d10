import { type ConditionalElement } from '../../typings/index';
import { type TGenericChildrenProps, type TResources } from '../utils/GenericFieldComponent';
type StockTransferFieldChildrenProps = TGenericChildrenProps<TResources['Customer']>;
type TCondition = ConditionalElement<Exclude<TResources['Customer'], 'resource'>>;
type Props = {
    children?: (props: StockTransferFieldChildrenProps) => JSX.Element;
} & TCondition;
export declare function CustomerField<P extends Props>(props: P): JSX.Element;
export default CustomerField;
