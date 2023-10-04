/// <reference types="react" />
import { type UpdatePaymentSource, type PaymentMethodState, type SetPaymentMethodErrors, setPaymentSource, setPaymentMethod, type DestroyPaymentSource, type SetPaymentRef, setLoading } from '../reducers/PaymentMethodReducer';
type DefaultContext = {
    setPaymentMethodErrors: SetPaymentMethodErrors;
    setPaymentMethod: typeof setPaymentMethod;
    setPaymentSource: typeof setPaymentSource;
    setPaymentRef: SetPaymentRef;
    destroyPaymentSource: DestroyPaymentSource;
    updatePaymentSource: UpdatePaymentSource;
    setLoading: typeof setLoading;
} & PaymentMethodState;
export declare const defaultPaymentMethodContext: DefaultContext;
declare const PaymentMethodContext: import("react").Context<DefaultContext>;
export default PaymentMethodContext;
