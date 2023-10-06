import type { LoaderType } from '../../typings/index';
import type { Order, PaymentMethod as PaymentMethodType } from '@commercelayer/sdk';
import type { PaymentResource } from '../../reducers/PaymentMethodReducer';
import type { DefaultChildrenType } from '../../typings/globals';
interface TOnClickParams {
    payment?: PaymentMethodType | Record<string, any>;
    order?: Order;
}
type Props = {
    /**
     * Hide payment methods by an array of strings or a function that returns a boolean
     */
    hide?: PaymentResource[] | ((payment: PaymentMethodType) => boolean);
    children: DefaultChildrenType;
    /**
     * Set CSS classes when the payment method is selected
     */
    activeClass?: string;
    /**
     * Customize the loader component
     */
    loader?: LoaderType;
    /**
     * Auto select the payment method when there is only one available
     */
    autoSelectSinglePaymentMethod?: boolean | (() => void);
    /**
     * Enable express payment. Other payment methods will be disabled.
     */
    expressPayments?: boolean;
} & Omit<JSX.IntrinsicElements['div'], 'onClick' | 'children'> & ({
    clickableContainer: true;
    onClick?: (params?: TOnClickParams) => void;
} | {
    clickableContainer?: never;
    onClick?: never;
});
export declare function PaymentMethod({ children, className, activeClass, loader, clickableContainer, autoSelectSinglePaymentMethod, expressPayments, hide, onClick, ...p }: Props): JSX.Element;
export default PaymentMethod;
