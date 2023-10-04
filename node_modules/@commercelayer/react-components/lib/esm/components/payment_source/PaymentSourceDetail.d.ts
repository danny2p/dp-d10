import type { ChildrenFunction } from '../../typings/index';
export type PaymentSourceDetailType = 'last4' | 'exp_year' | 'exp_month';
interface ChildrenProps extends Omit<Props, 'children'> {
    text: string;
}
interface Props extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
    /**
     * Type of detail to display
     */
    type: PaymentSourceDetailType;
}
export declare function PaymentSourceDetail({ type, children, ...p }: Props): JSX.Element;
export default PaymentSourceDetail;
