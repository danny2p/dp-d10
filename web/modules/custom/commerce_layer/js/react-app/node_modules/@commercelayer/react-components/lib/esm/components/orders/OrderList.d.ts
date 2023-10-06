import { type TOrderList, type InitialOrderListContext, type OrderListContent } from '../../context/OrderListChildrenContext';
import { type ColumnDef, type SortingState } from '@tanstack/react-table';
import type { DefaultChildrenType, TRange } from '../../typings/globals';
type OrderListColumn<T extends TOrderList = 'orders'> = ColumnDef<OrderListContent<T>> & {
    className?: string;
    titleClassName?: string;
};
export type TOrderListColumn<T extends TOrderList = 'orders'> = OrderListColumn<T>;
type PaginationProps = {
    /**
     * Show table pagination. Default is false.
     */
    showPagination: true;
    /**
     * Number of rows per page. Default is 10. Max is 25.
     */
    pageSize?: TRange<1, 26>;
} | {
    /**
     * Show table pagination. Default is false.
     */
    showPagination?: false;
    pageSize?: never;
};
type Props = {
    /**
     * Type of list to render
     */
    type?: TOrderList;
    /**
     * Children components to render
     */
    children: DefaultChildrenType;
    /**
     * Columns to show
     */
    columns: Array<OrderListColumn<TOrderList>>;
    /**
     * Custom loader component
     */
    loadingElement?: string | JSX.Element;
    /**
     * Function to assign as custom row renderer
     */
    actionsComponent?: InitialOrderListContext['actionsComponent'];
    /**
     * Class name to assign to the custom row container
     */
    actionsContainerClassName?: string;
    /**
     * Show actions column. Default is false.
     */
    showActions?: boolean;
    /**
     * Sort by column. Default is `number` column descending.
     */
    sortBy?: SortingState;
    /**
     * Class name to assign to pagination container.
     */
    paginationContainerClassName?: string;
    /**
     * Class name to assign to the table header.
     */
    theadClassName?: string;
    /**
     * Class name to assign to the table row.
     */
    rowTrClassName?: string;
} & Omit<JSX.IntrinsicElements['table'], 'children'> & PaginationProps;
export declare function OrderList({ type, children, columns, loadingElement, showActions, showPagination, sortBy, pageSize, paginationContainerClassName, actionsComponent, actionsContainerClassName, theadClassName, rowTrClassName, ...p }: Props): JSX.Element;
export default OrderList;
