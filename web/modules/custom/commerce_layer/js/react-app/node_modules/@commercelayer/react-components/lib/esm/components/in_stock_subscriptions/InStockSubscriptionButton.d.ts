import { type ChildrenFunction } from '../../typings/index';
interface Props extends Omit<JSX.IntrinsicElements['button'], 'children' | 'onClick'> {
    /**
     * The code of the sku.
     */
    skuCode: string;
    /**
     * The label to display.
     */
    label?: string | JSX.Element;
    /**
     * The label to display when the button is loading.
     */
    loadingLabel?: string | JSX.Element;
    /**
     * The email of the customer.
     */
    customerEmail?: string;
    /**
     * The children of the component.
     */
    children?: ChildrenFunction<Omit<Props, 'children'>>;
    /**
     * Show the button.
     */
    show?: boolean;
    /**
     * The callback function to call when the button is clicked.
     */
    onClick?: (response: {
        success: boolean;
    }) => void;
}
export declare function InStockSubscriptionButton({ skuCode, customerEmail, children, onClick, show, label, loadingLabel, ...props }: Props): JSX.Element | null;
export default InStockSubscriptionButton;
