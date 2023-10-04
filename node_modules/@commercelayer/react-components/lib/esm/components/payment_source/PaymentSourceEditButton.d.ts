import { type ReactNode } from 'react';
import { type ChildrenFunction } from '../../typings/index';
interface CustomComponent extends Omit<Props, 'children'> {
}
type Props = {
    children?: ChildrenFunction<CustomComponent>;
    label?: string | ReactNode;
} & Omit<JSX.IntrinsicElements['button'], 'onClick'>;
export declare function PaymentSourceEditButton({ children, label, ...props }: Props): JSX.Element | null;
export default PaymentSourceEditButton;
