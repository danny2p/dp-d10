import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
import { type BaseAction } from '../typings/index';
import { type Dispatch } from 'react';
import type { BaseError } from '../typings/errors';
type InStockSubscriptionActionType = 'setErrors';
type InStockSubscriptionAction = BaseAction<InStockSubscriptionActionType, InStockSubscriptionState>;
export interface InStockSubscriptionState {
    errors?: BaseError[];
}
export declare const inStockSubscriptionInitialState: InStockSubscriptionState;
interface TSetInStockSubscriptionParams {
    /**
     * Commerce Layer config
     */
    config?: CommerceLayerConfig;
    /**
     * Customer email
     */
    customerEmail?: string;
    /**
     * Sku code
     */
    skuCode: string;
    /**
     * Dispatch function
     */
    dispatch?: Dispatch<InStockSubscriptionAction>;
}
export declare function setInStockSubscription<T extends TSetInStockSubscriptionParams>({ config, customerEmail, skuCode, dispatch }: T): Promise<{
    success: boolean;
}>;
export default function inStockSubscriptionReducer(state: InStockSubscriptionState, reducer: InStockSubscriptionAction): InStockSubscriptionState;
export {};
