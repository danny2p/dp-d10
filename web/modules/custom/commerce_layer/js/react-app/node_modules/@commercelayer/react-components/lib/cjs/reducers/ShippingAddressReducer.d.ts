import { type Dispatch } from 'react';
import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
import type { Order } from '@commercelayer/sdk';
import { type getOrderContext } from './OrderReducer';
import { type AddressResource } from './AddressReducer';
export type ShippingAddressActionType = 'setShippingAddress' | 'setShippingCustomerAddressId' | 'cleanup';
export interface ShippingAddressActionPayload {
    _shipping_address_clone_id: string;
    shippingCustomerAddressId: string;
}
export type ShippingAddressState = Partial<ShippingAddressActionPayload>;
export interface ShippingAddressAction {
    type: ShippingAddressActionType;
    payload: Partial<ShippingAddressActionPayload>;
}
export declare const shippingAddressInitialState: ShippingAddressState;
export type SetShippingAddress = (id: string, options?: {
    config: CommerceLayerConfig;
    dispatch: Dispatch<ShippingAddressAction>;
    order?: Order | null;
    getOrder?: getOrderContext;
    customerAddressId?: string;
}) => Promise<void>;
export declare const setShippingAddress: SetShippingAddress;
interface SetShippingCustomerAddressIdParams {
    dispatch: Dispatch<ShippingAddressAction>;
    order: Order;
    setCloneAddress: (id: string, resource: AddressResource) => void;
}
export declare function setShippingCustomerAddressId({ dispatch, order, setCloneAddress }: SetShippingCustomerAddressIdParams): void;
declare const shippingAddressReducer: (state: ShippingAddressState, reducer: ShippingAddressAction) => ShippingAddressState;
export default shippingAddressReducer;
