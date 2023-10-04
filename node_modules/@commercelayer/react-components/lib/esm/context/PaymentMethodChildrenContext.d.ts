/// <reference types="react" />
import { type PaymentMethod } from '@commercelayer/sdk';
export interface InitialPaymentMethodChildrenContext {
    payment?: PaymentMethod;
    clickableContainer?: boolean;
    paymentSelected?: string;
    setPaymentSelected?: (paymentId: string) => void;
    expressPayments?: boolean;
}
declare const PaymentMethodChildrenContext: import("react").Context<InitialPaymentMethodChildrenContext>;
export default PaymentMethodChildrenContext;
