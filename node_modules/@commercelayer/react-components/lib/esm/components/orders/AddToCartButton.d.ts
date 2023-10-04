import { type PropsWithoutRef } from 'react';
import { type ChildrenFunction } from '../../typings/index';
import { type AddToCartReturn, type CustomLineItem, type LineItemOption } from '../../reducers/OrderReducer';
interface TAddToCartButton extends Omit<Props, 'children'> {
    handleClick: () => AddToCartReturn;
}
type BuyNowMode = {
    buyNowMode: true;
    checkoutUrl?: string;
} | {
    buyNowMode?: false;
    checkoutUrl?: never;
};
type THostedCart = {
    redirectToHostedCart: true;
    hostedCartUrl?: string;
} | {
    redirectToHostedCart?: false;
    hostedCartUrl?: never;
};
type TButton = PropsWithoutRef<Omit<JSX.IntrinsicElements['button'], 'children'>>;
type Props = {
    /**
     * Code of a bundle
     */
    bundleCode?: string;
    children?: ChildrenFunction<TAddToCartButton>;
    /**
     * Disable the cart button
     */
    disabled?: boolean;
    /**
     * Label to display
     */
    label?: string | JSX.Element;
    /**
     * Line item which allow you customize the cart item
     */
    lineItem?: CustomLineItem;
    /**
     * Line item option to add to cart
     */
    lineItemOption?: LineItemOption;
    /**
     * Quantity of the item
     */
    quantity?: string;
    /**
     * SKU code to add to cart
     */
    skuCode?: string;
    /**
     * SKU list to add to cart
     */
    skuListId?: string;
} & TButton & BuyNowMode & THostedCart;
export declare function AddToCartButton(props: Props): JSX.Element;
export default AddToCartButton;
