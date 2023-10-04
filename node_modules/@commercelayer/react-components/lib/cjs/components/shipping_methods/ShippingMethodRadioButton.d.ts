import type { Order, ShippingMethod } from '@commercelayer/sdk';
interface ShippingMethodRadioButtonType extends Omit<Props, 'children'> {
    shippingMethod: ShippingMethod;
    shipmentId: string;
}
interface TOnChange {
    shippingMethod: ShippingMethod;
    shipmentId: string;
    order?: Order;
}
type Props = {
    children?: (props: ShippingMethodRadioButtonType) => JSX.Element;
    onChange?: (params: TOnChange) => void;
} & Omit<JSX.IntrinsicElements['input'], 'onChange'>;
export declare function ShippingMethodRadioButton(props: Props): JSX.Element;
export default ShippingMethodRadioButton;
