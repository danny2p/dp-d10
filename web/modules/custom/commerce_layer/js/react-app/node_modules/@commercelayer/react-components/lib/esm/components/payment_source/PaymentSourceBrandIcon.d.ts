import { type IconBrand } from '../../context/PaymentSourceContext';
import { type ChildrenFunction } from '../../typings/index';
interface ChildrenProps extends Omit<Props, 'children'> {
    brand: IconBrand;
    defaultSrc: string;
    url: string;
}
interface Props extends Omit<JSX.IntrinsicElements['img'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
    width?: number;
    height?: number;
}
export declare function PaymentSourceBrandIcon({ src, width, children, ...p }: Props): JSX.Element;
export default PaymentSourceBrandIcon;
