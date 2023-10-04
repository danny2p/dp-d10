import { type TOrderList, type OrderListContent, type TableAccessor } from '../../context/OrderListChildrenContext';
import { type Row } from '@tanstack/react-table';
interface ChildrenProps extends Omit<Props, 'children'> {
    /**
     * The order resource
     */
    order: OrderListContent<TOrderList>;
    /**
     * The current row
     */
    row: Row<OrderListContent<TOrderList>>;
    /**
     * The current cell
     */
    cell: Array<ReturnType<Row<OrderListContent<TOrderList>>['getVisibleCells']>[number]>;
}
interface Props extends Omit<JSX.IntrinsicElements['td'], 'children'> {
    children?: (props: ChildrenProps) => JSX.Element;
    /**
     * The order field to show
     */
    field: TableAccessor<TOrderList>;
}
export declare function OrderListRow({ field, children, ...p }: Props): JSX.Element;
export declare namespace OrderListRow {
    var displayName: string;
}
export default OrderListRow;
