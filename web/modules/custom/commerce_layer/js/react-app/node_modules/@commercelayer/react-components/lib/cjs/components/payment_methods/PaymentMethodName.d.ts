import { type ChildrenFunction } from '../../typings/index';
interface ChildrenProps extends Omit<Props, 'children'> {
    labelName: string;
}
interface Props extends Omit<JSX.IntrinsicElements['label'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
}
export declare function PaymentMethodName(props: Props): JSX.Element;
export default PaymentMethodName;
