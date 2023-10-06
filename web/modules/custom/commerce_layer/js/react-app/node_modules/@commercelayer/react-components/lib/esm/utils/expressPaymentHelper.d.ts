import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
import { type Order, type PaymentMethod, type QueryParamsRetrieve, type AddressCreate } from '@commercelayer/sdk';
import { type PaymentRequestShippingOption } from '@stripe/stripe-js';
import { type PaymentResource } from '../reducers/PaymentMethodReducer';
export declare function getAvailableExpressPayments(paymentMethods: PaymentMethod[]): PaymentMethod[];
interface TFakeAddressParams {
    /**
     * The order id
     */
    orderId: string;
    /**
     * The Commerce Layer config
     */
    config: Required<CommerceLayerConfig>;
    /**
     * The address resource
     */
    address: AddressCreate;
    /**
     * The customer email
     */
    email?: string;
}
export declare function setExpressFakeAddress({ orderId, config, address, email }: TFakeAddressParams): Promise<Order>;
export declare function getExpressShippingMethods(order: Order): PaymentRequestShippingOption[] | null;
type TSetExpressShippingMethodParams = {
    /**
     * The Commerce Layer config
     */
    config: CommerceLayerConfig;
    /**
     * The order id
     */
    orderId: string;
    /**
     * The query params
     */
    params?: QueryParamsRetrieve;
} & ({
    /**
     * Select the first shipping method
     */
    selectFirst: false;
    /**
     * The selected shipping method id
     */
    selectedShippingMethodId?: string;
} | {
    selectFirst?: true;
    selectedShippingMethodId?: never;
});
export declare function setExpressShippingMethod({ config, orderId, selectFirst, selectedShippingMethodId, params }: TSetExpressShippingMethodParams): Promise<Order>;
export type TSetExpressPlaceOrderParams = {
    /**
     * The Commerce Layer config
     */
    config: CommerceLayerConfig;
    /**
     * The order id
     */
    orderId: string;
} & ({
    /**
     * The payment resource
     */
    paymentResource: PaymentResource;
    /**
     * The payment source id
     */
    paymentSourceId: string;
    /**
     * Place the order
     */
    placeTheOrder?: false;
} | {
    paymentResource?: never;
    paymentSourceId?: never;
    placeTheOrder?: true;
});
export declare function setExpressPlaceOrder({ config, orderId, paymentResource, paymentSourceId, placeTheOrder }: TSetExpressPlaceOrderParams): Promise<Order>;
interface TExpressRedirectUrlParams {
    /**
     * Order resource
     */
    order: Order;
    /**
     * The Commerce Layer config
     */
    config: CommerceLayerConfig;
}
export declare function expressRedirectUrl({ order, config: { accessToken, endpoint } }: TExpressRedirectUrlParams): void;
export {};
