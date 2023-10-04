import { type TypeAccepted } from '../../utils/getLineItemsCount';
import { type ChildrenFunction } from '../../typings/index';
interface ChildrenProps extends Omit<Props, 'children'> {
    quantity: number;
}
interface Props extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
    typeAccepted?: TypeAccepted[];
}
export declare function LineItemsCount(props: Props): JSX.Element;
export default LineItemsCount;
