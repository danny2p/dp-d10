import { type ReactNode } from 'react';
import { type ChildrenFunction } from '../../typings/index';
import type { Order } from '@commercelayer/sdk';
interface TOnClick {
    success: boolean;
    order?: Order;
}
interface ChildrenProps extends Omit<Props, 'children'> {
}
interface Props extends Omit<JSX.IntrinsicElements['button'], 'children' | 'onClick'> {
    children?: ChildrenFunction<ChildrenProps>;
    label?: string | ReactNode;
    onClick?: (params: TOnClick) => void;
    addressId?: string;
}
export declare function SaveAddressesButton(props: Props): JSX.Element;
export default SaveAddressesButton;
