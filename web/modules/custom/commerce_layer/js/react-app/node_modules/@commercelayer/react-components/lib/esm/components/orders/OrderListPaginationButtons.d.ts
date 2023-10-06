import { type OrderListPaginationContext as TOrderListPaginationContext } from '../../context/OrderListPaginationContext';
import { type ChildrenFunction } from '../../typings/index';
interface PaginationButton extends Omit<JSX.IntrinsicElements['button'], 'children' | 'disabled'> {
    /**
     * Show or hide the pagination button. Default is true.
     */
    show?: boolean;
    /**
     * Label to display
     */
    label?: string | JSX.Element;
    /**
     * Hide the pagination button when the attribute disabled is true. Default is false.
     */
    hideWhenDisabled?: boolean;
}
interface NavigationButtons extends Omit<JSX.IntrinsicElements['button'], 'children'> {
    /**
     * Show or hide the navigation buttons. Default is true.
     */
    show?: boolean;
    /**
     * Attach the class name to the current page button
     */
    activeClassName?: string;
}
type ChildrenProps = Omit<Props, 'children'> & TOrderListPaginationContext;
interface Props extends Omit<JSX.IntrinsicElements['div'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
    /**
     * Previous button props
     */
    previousPageButton?: PaginationButton;
    /**
     * Next button props
     */
    nextPageButton?: PaginationButton;
    /**
     * Navigation buttons props
     */
    navigationButtons?: NavigationButtons;
}
export declare function OrderListPaginationButtons({ previousPageButton, nextPageButton, navigationButtons, children, ...props }: Props): JSX.Element | null;
export declare namespace OrderListPaginationButtons {
    var displayName: string;
}
export default OrderListPaginationButtons;
