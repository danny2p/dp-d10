import { type LoaderType } from '../../typings/index';
import { type CustomerCardsTemplateChildren } from '../utils/PaymentCardsTemplate';
export interface CustomerCardsProps {
    handleClick: () => void;
}
export interface CustomerSaveToWalletProps {
    name: 'save_payment_source_to_customer_wallet';
}
export interface PaymentSourceProps extends Omit<JSX.IntrinsicElements['div'], 'children'> {
    children?: JSX.Element | JSX.Element[];
    readonly?: boolean;
    templateCustomerCards?: CustomerCardsTemplateChildren;
    onClickCustomerCards?: () => void;
    templateCustomerSaveToWallet?: (props: CustomerSaveToWalletProps) => JSX.Element;
    loader?: LoaderType;
}
export declare function PaymentSource(props: PaymentSourceProps): JSX.Element;
export default PaymentSource;
