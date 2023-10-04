import { type ChildrenFunction } from '../../typings/index';
interface Props extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    /**
     * Function allow you to customize the component
     */
    children?: ChildrenFunction<Omit<Props, 'children'>>;
    /**
     * Label to show. Default: 'No orders available.'
     */
    emptyText?: string;
}
export declare function OrderListEmpty(props: Props): JSX.Element | null;
export declare namespace OrderListEmpty {
    var displayName: string;
}
export default OrderListEmpty;
