import { type IconBrand } from '../../context/PaymentSourceContext';
import { type ChildrenFunction } from '../../typings/index';
interface CustomComponent extends Omit<Props, 'children'> {
    brand: IconBrand;
}
interface Props extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    children?: ChildrenFunction<CustomComponent>;
    label?: string;
}
export declare function PaymentSourceBrandName({ children, label, ...props }: Props): JSX.Element;
export default PaymentSourceBrandName;
