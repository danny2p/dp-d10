import { type AdyenPaymentConfig } from '../components/payment_source/AdyenPayment';
import { type BraintreeConfig } from '../components/payment_source/BraintreePayment';
import { type PaypalConfig } from '../components/payment_source/PaypalPayment';
import { type StripeConfig } from '../components/payment_source/StripePayment';
import { type WireTransferConfig } from '../components/payment_source/WireTransferPayment';
import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
import { type getOrderContext, type updateOrder } from './OrderReducer';
import type { BaseError } from '../typings/errors';
import { type Order, type PaymentMethod, type StripePayment, type WireTransfer, type AdyenPayment, type BraintreePayment, type CheckoutComPayment, type ExternalPayment, type PaypalPayment, type KlarnaPayment } from '@commercelayer/sdk';
import { type Dispatch, type MutableRefObject } from 'react';
import { type CheckoutComConfig } from '../components/payment_source/CheckoutComPayment';
import { type ExternalPaymentConfig } from '../components/payment_source/ExternalPayment';
import { type ResourceKeys } from '../utils/getPaymentAttributes';
export type PaymentSourceType = Order['payment_source'];
interface Card {
    type: string;
    brand: string;
    last4: string;
    exp_year: number;
    exp_month: number;
}
export interface PaymentSourceObject {
    adyen_payments: AdyenPayment & {
        payment_request_data?: {
            payment_method?: Card;
        };
        payment_response?: {
            resultCode?: 'Authorised';
        };
    };
    braintree_payments: BraintreePayment & {
        options?: {
            card: Card;
        };
    };
    external_payments: ExternalPayment & {
        payment_source_token?: string;
    };
    paypal_payments: PaypalPayment;
    stripe_payments: StripePayment & {
        options?: {
            card: Card;
        };
        payment_method?: {
            card: Card;
            type: string | 'klarna' | 'card';
        };
    };
    wire_transfers: WireTransfer;
    checkout_com_payments: CheckoutComPayment & {
        payment_response: {
            source?: Pick<Card, 'last4'> & {
                scheme: string;
                expiry_year: number;
                expiry_month: number;
            };
        };
    };
    klarna_payments: KlarnaPayment;
}
export type PaymentMethodActionType = 'setErrors' | 'setPaymentMethods' | 'setPaymentMethodConfig' | 'setPaymentSource' | 'setPaymentRef' | 'setLoading';
export type PaymentRef = MutableRefObject<null | HTMLFormElement>;
export interface PaymentMethodActionPayload {
    errors: BaseError[];
    paymentMethods: PaymentMethod[] | null;
    currentPaymentMethodType: PaymentResource;
    currentPaymentMethodId: string;
    currentPaymentMethodRef: PaymentRef;
    config: PaymentMethodConfig;
    paymentSource: Order['payment_source'] | null;
    loading: boolean;
}
export declare function setLoading({ loading, dispatch }: {
    loading: boolean;
    dispatch?: Dispatch<PaymentMethodAction>;
}): void;
export type SetPaymentRef = (args: {
    ref: PaymentRef;
    dispatch?: Dispatch<PaymentMethodAction>;
}) => void;
export declare const setPaymentRef: SetPaymentRef;
export type PaymentMethodState = Partial<PaymentMethodActionPayload>;
export interface PaymentMethodAction {
    type: PaymentMethodActionType;
    payload: Partial<PaymentMethodActionPayload>;
}
export declare const paymentMethodInitialState: PaymentMethodState;
export type SetPaymentMethodErrors = <V extends BaseError[]>(errors: V, dispatch?: Dispatch<PaymentMethodAction>) => void;
export declare const setPaymentMethodErrors: SetPaymentMethodErrors;
type GetPaymentMethods = (args: {
    order: Order;
    dispatch: Dispatch<PaymentMethodAction>;
}) => Promise<void>;
export declare const getPaymentMethods: GetPaymentMethods;
export type PaymentResource = keyof PaymentSourceObject;
export type PaymentResourceKey = 'braintreePayment' | 'stripePayment' | 'klarnaPayment' | 'wireTransfer' | 'paypalPayment' | 'adyenPayment' | 'checkoutComPayment';
export type SDKPaymentResource = 'AdyenPayment' | 'BraintreePayment' | 'ExternalPayment' | 'PaypalPayment' | 'StripePayment' | 'WireTransfer' | 'CheckoutComPayment';
interface TSetPaymentMethodParams {
    config?: CommerceLayerConfig;
    dispatch?: Dispatch<PaymentMethodAction>;
    updateOrder?: typeof updateOrder;
    setOrderErrors?: (collection: any) => {
        success: boolean;
    };
    order?: Order;
    paymentMethodId: string;
    paymentResource?: PaymentResource;
}
export declare function setPaymentMethod({ config, dispatch, order, paymentMethodId, updateOrder, setOrderErrors, paymentResource }: TSetPaymentMethodParams): Promise<{
    success: boolean;
    order?: Order;
}>;
type PaymentSourceTypes = (StripePayment & WireTransfer) | (StripePayment | WireTransfer);
export type SetPaymentSourceResponse = {
    order: Order;
    paymentSource: PaymentSourceTypes;
} | null;
export interface SetPaymentSourceParams extends Omit<PaymentMethodState, 'config'> {
    config?: CommerceLayerConfig;
    dispatch?: Dispatch<PaymentMethodAction>;
    getOrder?: getOrderContext;
    attributes?: Record<string, unknown>;
    order?: Order;
    paymentResource: PaymentResource;
    paymentSourceId?: string;
    customerPaymentSourceId?: string;
    updateOrder?: typeof updateOrder;
}
export declare function setPaymentSource({ config, dispatch, getOrder, attributes, order, paymentResource, customerPaymentSourceId, paymentSourceId, updateOrder, errors: currentErrors }: SetPaymentSourceParams): Promise<PaymentSourceType | undefined | null>;
export type UpdatePaymentSource = (args: {
    id: string;
    attributes: Record<string, any>;
    paymentResource: PaymentResource;
    config?: CommerceLayerConfig;
    dispatch?: Dispatch<PaymentMethodAction>;
}) => Promise<void>;
export declare const updatePaymentSource: UpdatePaymentSource;
export type DestroyPaymentSource = (args: {
    paymentSourceId: string;
    paymentResource: PaymentResource;
    dispatch?: Dispatch<PaymentMethodAction>;
    updateOrder?: typeof updateOrder;
    orderId?: string;
}) => Promise<void>;
export declare const destroyPaymentSource: DestroyPaymentSource;
export interface PaymentMethodConfig {
    adyenPayment?: AdyenPaymentConfig;
    braintreePayment?: BraintreeConfig;
    checkoutComPayment?: CheckoutComConfig;
    externalPayment?: ExternalPaymentConfig;
    klarnaPayment?: Pick<AdyenPaymentConfig, 'placeOrderCallback'> & Pick<StripeConfig, 'containerClassName'>;
    paypalPayment?: PaypalConfig;
    stripePayment?: StripeConfig;
    wireTransfer?: Partial<WireTransferConfig>;
}
type SetPaymentMethodConfig = (config: PaymentMethodConfig, dispatch: Dispatch<PaymentMethodAction>) => void;
export declare const setPaymentMethodConfig: SetPaymentMethodConfig;
export declare function getPaymentConfig<R extends PaymentResource = PaymentResource, K extends PaymentMethodConfig = PaymentMethodConfig>(paymentResource: R, config: K): Pick<K, ResourceKeys<R>>;
declare const paymentMethodReducer: (state: PaymentMethodState, reducer: PaymentMethodAction) => PaymentMethodState;
export default paymentMethodReducer;
