import type { LineItem } from '@commercelayer/sdk';
import { type ChildrenFunction } from '../../typings/index';
export interface TLineItemName extends Omit<Props, 'children'> {
    label: string;
    lineItem: LineItem;
}
interface Props extends Omit<JSX.IntrinsicElements['p'], 'children'> {
    children?: ChildrenFunction<TLineItemName>;
}
export declare function LineItemName(props: Props): JSX.Element;
export default LineItemName;
