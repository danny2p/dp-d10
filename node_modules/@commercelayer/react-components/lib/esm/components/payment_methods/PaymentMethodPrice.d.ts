import { type BaseAmountComponent } from '../../typings/index';
interface Props extends BaseAmountComponent {
    type?: 'amount';
    labelFree?: string;
}
export declare function PaymentMethodPrice(props: Props): JSX.Element;
export default PaymentMethodPrice;
