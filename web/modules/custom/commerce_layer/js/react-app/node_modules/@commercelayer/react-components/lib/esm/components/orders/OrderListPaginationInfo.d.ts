import { type ChildrenFunction } from '../../typings/index';
type TAsComponent = keyof Pick<JSX.IntrinsicElements, 'p' | 'span' | 'div'>;
type ChildrenProps<A extends TAsComponent> = Omit<Props<A>, 'children'> & {
    /**
     * Current number of the first page row to display
     */
    firstRow: number;
    /**
     * Current number of the last page row to display
     */
    lastRow: number;
    /**
     * Total number of rows to display
     */
    totRows: number;
};
type Props<A extends TAsComponent> = {
    children?: ChildrenFunction<ChildrenProps<A>>;
    /**
     * HTML Tag to display
     */
    as?: TAsComponent;
} & Omit<JSX.IntrinsicElements[A], 'children' | 'ref'>;
export declare function OrderListPaginationInfo<A extends TAsComponent = 'span'>({ as, children, ...props }: Props<A>): JSX.Element | null;
export declare namespace OrderListPaginationInfo {
    var displayName: string;
}
export default OrderListPaginationInfo;
