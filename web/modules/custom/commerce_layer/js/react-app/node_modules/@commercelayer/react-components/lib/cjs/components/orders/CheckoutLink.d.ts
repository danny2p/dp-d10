import { type ChildrenFunction } from '../../typings/index';
interface ChildrenProps extends Omit<Props, 'children'> {
    checkoutUrl: string;
    href: string;
}
interface Props extends Omit<JSX.IntrinsicElements['a'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
    label?: string;
    hostedCheckout?: boolean;
}
export declare function CheckoutLink(props: Props): JSX.Element;
export default CheckoutLink;
