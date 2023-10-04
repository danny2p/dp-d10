import { type ReactNode } from 'react';
export interface PaypalConfig {
    return_url: string;
    cancel_url: string;
    infoMessage?: {
        text?: string | ReactNode;
        className?: string;
    };
}
type Props = Omit<PaypalConfig, 'return_url' | 'cancel_url'> & JSX.IntrinsicElements['div'];
export declare function PaypalPayment({ infoMessage, ...p }: Props): JSX.Element | null;
export default PaypalPayment;
