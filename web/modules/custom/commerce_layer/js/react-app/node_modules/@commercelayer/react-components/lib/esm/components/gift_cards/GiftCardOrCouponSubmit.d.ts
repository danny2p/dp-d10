import { type ReactNode } from 'react';
import { type ChildrenFunction } from '../../typings/index';
interface ChildrenProps extends Omit<Props, 'children'> {
}
interface Props extends Omit<JSX.IntrinsicElements['button'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
    label?: string | ReactNode;
}
export declare function GiftCardOrCouponSubmit(props: Props): JSX.Element;
export default GiftCardOrCouponSubmit;
