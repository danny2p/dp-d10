import { type CSSProperties } from 'react';
interface Styles {
    cart?: CSSProperties;
    container?: CSSProperties;
    background?: CSSProperties;
}
interface Props extends Omit<JSX.IntrinsicElements['div'], 'children' | 'style'> {
    /**
     * The type of the cart. Defaults to undefined.
     */
    type?: 'mini';
    /**
     * If true, the cart will open when a line item is added to the order clicking the add to cart button. Defaults to false.
     */
    openAdd?: boolean;
    /**
     * The style of the cart.
     */
    style?: Styles;
    /**
     * If true, the cart will be open. Defaults to false.
     */
    open?: boolean;
    /**
     * A function that will be called when the cart is open and the background is clicked.
     */
    handleOpen?: () => void;
}
export declare function HostedCart({ type, openAdd, style, open, handleOpen, ...props }: Props): JSX.Element | null;
export {};
