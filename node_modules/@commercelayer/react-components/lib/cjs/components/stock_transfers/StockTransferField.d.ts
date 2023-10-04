import { type ConditionalElement } from '../../typings/index';
import { type TGenericChildrenProps, type TResources } from '../utils/GenericFieldComponent';
type StockTransferFieldChildrenProps = TGenericChildrenProps<TResources['StockTransfer']>;
type TCondition = ConditionalElement<Exclude<TResources['StockTransfer'], 'resource'>>;
type Props = {
    children?: (props: StockTransferFieldChildrenProps) => JSX.Element;
} & TCondition;
export declare function StockTransferField<P extends Props>(props: P): JSX.Element;
export default StockTransferField;
