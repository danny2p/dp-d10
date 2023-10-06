import { type ShippingMethod } from '@commercelayer/sdk';
type ChildrenProps = Omit<Props, 'children'> & {
    label: string;
    shippingMethod: ShippingMethod;
};
interface Props extends Omit<JSX.IntrinsicElements['label'], 'children'> {
    children?: (props: ChildrenProps) => JSX.Element;
}
export declare function ShippingMethodName(props: Props): JSX.Element;
export default ShippingMethodName;
