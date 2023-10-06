import { type BaseError } from '../typings/errors';
import { type Sku } from '@commercelayer/sdk';
import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
import { type Dispatch } from 'react';
export interface DeliveryLeadTime {
    shipping_method: {
        name: string;
        reference: string;
        price_amount_cents: number;
        free_over_amount_cents: number;
        formatted_price_amount: string;
        formatted_free_over_amount: string;
    };
    min: LeadTimes;
    max: LeadTimes;
}
interface Level {
    delivery_lead_times: Array<Partial<DeliveryLeadTime>>;
    quantity: number;
}
interface Inventory {
    inventory: {
        available: boolean;
        quantity: number;
        levels: Level[];
    };
}
export type SkuInventory = Sku & Inventory;
export interface LeadTimes {
    hours: number;
    days: number;
}
export type AvailabilityPayload = {
    skuCode?: string;
    quantity?: number;
    errors?: BaseError[];
    parent?: boolean;
} & Partial<DeliveryLeadTime>;
export type AvailabilityState = AvailabilityPayload;
export interface AvailabilityAction {
    type: AvailabilityActionType;
    payload: AvailabilityPayload;
}
export declare const availabilityInitialState: AvailabilityState;
export declare function getAvailability({ skuCode, dispatch, config }: {
    skuCode: string;
    dispatch: Dispatch<AvailabilityAction>;
    config: CommerceLayerConfig;
}): Promise<void>;
export type AvailabilityActionType = 'setAvailability' | 'setErrors';
declare const availabilityReducer: (state: AvailabilityState, reducer: AvailabilityAction) => AvailabilityState;
export default availabilityReducer;
