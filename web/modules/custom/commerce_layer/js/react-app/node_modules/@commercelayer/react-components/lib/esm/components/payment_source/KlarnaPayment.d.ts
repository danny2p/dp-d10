import { type PaymentMethodConfig } from '../../reducers/PaymentMethodReducer';
import { type PaymentSourceProps } from './PaymentSource';
type KlarnaPaymentProps = PaymentMethodConfig['klarnaPayment'] & JSX.IntrinsicElements['div'] & Partial<PaymentSourceProps['templateCustomerSaveToWallet']> & {
    show?: boolean;
    clientToken: string;
    locale?: string | null;
};
export default function KlarnaPayment({ clientToken, placeOrderCallback, locale, ...p }: KlarnaPaymentProps): JSX.Element | null;
export {};
