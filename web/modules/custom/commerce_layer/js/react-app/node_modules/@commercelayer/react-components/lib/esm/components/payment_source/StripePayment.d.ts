import { type StripeElementLocale, type StripeElementsOptions, type StripePaymentElementOptions } from '@stripe/stripe-js';
import { type PaymentMethodConfig } from '../../reducers/PaymentMethodReducer';
import { type PaymentSourceProps } from './PaymentSource';
export interface StripeConfig {
    containerClassName?: string;
    hintLabel?: string;
    name?: string;
    options?: StripePaymentElementOptions;
    appearance?: StripeElementsOptions['appearance'];
    [key: string]: any;
}
type Props = PaymentMethodConfig['stripePayment'] & JSX.IntrinsicElements['div'] & Partial<PaymentSourceProps['templateCustomerSaveToWallet']> & {
    show?: boolean;
    publishableKey: string;
    locale?: StripeElementLocale;
    clientSecret: string;
    expressPayments?: boolean;
};
export declare function StripePayment({ publishableKey, show, options, clientSecret, locale, expressPayments, ...p }: Props): JSX.Element | null;
export default StripePayment;
