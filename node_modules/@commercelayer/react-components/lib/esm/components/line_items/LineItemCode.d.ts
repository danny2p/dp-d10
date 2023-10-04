import { type LineItem } from '@commercelayer/sdk';
import { type ChildrenFunction } from '../../typings/index';
export interface TLineItemCode extends Omit<Props, 'children'> {
    lineItem: LineItem;
    skuCode: string;
}
interface Props extends Omit<JSX.IntrinsicElements['p'], 'children'> {
    children?: ChildrenFunction<TLineItemCode>;
    type?: 'sku_code' | 'bundle_code';
}
export declare function LineItemCode({ type, children, ...p }: Props): JSX.Element;
export default LineItemCode;
