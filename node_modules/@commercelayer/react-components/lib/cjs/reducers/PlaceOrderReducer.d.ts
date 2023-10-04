import type { Dispatch, RefObject } from 'react';
import type { CommerceLayerConfig } from '../context/CommerceLayerContext';
import type { BaseError } from '../typings/errors';
import type { Order } from '@commercelayer/sdk';
import { type PaymentResource, type PaymentSourceType } from './PaymentMethodReducer';
export type PlaceOrderActionType = 'setErrors' | 'setPlaceOrderPermitted' | 'setButtonRef';
export interface PlaceOrderOptions {
    paypalPayerId?: string;
    adyen?: {
        MD?: string;
        PaRes?: string;
        redirectResult?: string;
    };
    checkoutCom?: {
        session_id: string;
    };
    stripe?: {
        redirectStatus: string;
    };
}
export interface PlaceOrderActionPayload {
    errors: BaseError[];
    isPermitted: boolean;
    paymentType: PaymentResource;
    paymentSecret: string;
    paymentId: string;
    paymentSource: PaymentSourceType;
    options?: PlaceOrderOptions;
    placeOrderButtonRef?: RefObject<HTMLButtonElement>;
}
export declare function setButtonRef(ref: RefObject<HTMLButtonElement>, dispatch: Dispatch<PlaceOrderAction>): void;
export type PlaceOrderState = Partial<PlaceOrderActionPayload>;
export interface PlaceOrderAction {
    type: PlaceOrderActionType;
    payload: Partial<PlaceOrderActionPayload>;
}
export declare const placeOrderInitialState: PlaceOrderState;
export declare function setPlaceOrderErrors<V extends BaseError[]>(errors: V, dispatch: Dispatch<PlaceOrderAction>): void;
interface TPlaceOrderPermittedParams {
    config?: CommerceLayerConfig;
    dispatch: Dispatch<PlaceOrderAction>;
    order?: Order;
    options?: PlaceOrderOptions;
}
export declare function placeOrderPermitted({ config, order, dispatch, options }: TPlaceOrderPermittedParams): void;
interface TSetPlaceOrderParams {
    config?: CommerceLayerConfig;
    order?: Order;
    state?: PlaceOrderState;
    setOrderErrors?: (errors: BaseError[]) => void;
    paymentSource?: PaymentSourceType;
    include?: string[];
    setOrder?: (order: Order) => void;
}
export declare function setPlaceOrder({ state, order, config, setOrderErrors, paymentSource, setOrder, include }: TSetPlaceOrderParams): Promise<{
    placed: boolean;
    errors?: BaseError[];
    order?: Order;
}>;
declare const placeOrderReducer: (state: PlaceOrderState, reducer: PlaceOrderAction) => PlaceOrderState;
export default placeOrderReducer;
