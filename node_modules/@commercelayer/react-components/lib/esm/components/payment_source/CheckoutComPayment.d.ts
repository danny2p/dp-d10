import { type PaymentMethodConfig } from '../../reducers/PaymentMethodReducer';
import { type PaymentSourceProps } from './PaymentSource';
import { type FramesStyle } from 'frames-react';
export interface CheckoutComConfig {
    containerClassName?: string;
    hintLabel?: string;
    name?: string;
    success_url?: string;
    failure_url?: string;
    options?: {
        style: FramesStyle;
    };
    [key: string]: unknown;
}
type Props = PaymentMethodConfig['checkoutComPayment'] & JSX.IntrinsicElements['div'] & {
    show?: boolean;
    publicKey: string;
    locale?: string;
    templateCustomerSaveToWallet?: PaymentSourceProps['templateCustomerSaveToWallet'];
};
export declare function CheckoutComPayment({ publicKey, options, locale, ...p }: Props): JSX.Element | null;
export default CheckoutComPayment;
