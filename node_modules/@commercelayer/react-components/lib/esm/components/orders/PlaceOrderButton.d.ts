import { type ReactNode } from 'react';
import { type ChildrenFunction } from '../../typings/index';
import type { BaseError } from '../../typings/errors';
import type { Order } from '@commercelayer/sdk';
interface ChildrenProps extends Omit<Props, 'children'> {
    /**
     * Callback function to place the order
     */
    handleClick: () => Promise<void>;
}
interface Props extends Omit<JSX.IntrinsicElements['button'], 'children' | 'onClick'> {
    children?: ChildrenFunction<ChildrenProps>;
    /**
     * The label of the button
     */
    label?: string | ReactNode;
    /**
     * If false, the button doesn't place the order automatically. Default: true
     */
    autoPlaceOrder?: boolean;
    /**
     * Callback function that is fired when the button is clicked
     */
    onClick?: (response: {
        placed: boolean;
        order?: Order;
        errors?: BaseError[];
    }) => void;
}
export declare function PlaceOrderButton(props: Props): JSX.Element;
export default PlaceOrderButton;
