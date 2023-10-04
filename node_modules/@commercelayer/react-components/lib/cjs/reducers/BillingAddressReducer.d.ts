import { type Dispatch } from 'react';
import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
import { type Order } from '@commercelayer/sdk';
import { type AddressResource } from './AddressReducer';
export type BillingAddressActionType = 'setBillingAddress' | 'setBillingCustomerAddressId' | 'cleanup';
export interface BillingAddressActionPayload {
    _billing_address_clone_id: string;
    billingCustomerAddressId: string;
}
export type BillingAddressState = Partial<BillingAddressActionPayload>;
export interface BillingAddressAction {
    type: BillingAddressActionType;
    payload: Partial<BillingAddressActionPayload>;
}
export declare const billingAddressInitialState: BillingAddressState;
export type SetBillingAddress = (id: string, options?: {
    config: CommerceLayerConfig;
    dispatch: Dispatch<BillingAddressAction>;
    order?: Order;
    shipToDifferentAddress?: boolean;
    customerAddressId?: string;
}) => Promise<void>;
export declare const setBillingAddress: SetBillingAddress;
interface SetBillingCustomerAddressIdParams {
    dispatch: Dispatch<BillingAddressAction>;
    order: Order;
    setCloneAddress: (id: string, resource: AddressResource) => void;
}
export declare function setBillingCustomerAddressId({ dispatch, order, setCloneAddress }: SetBillingCustomerAddressIdParams): void;
declare const billingAddressReducer: (state: BillingAddressState, reducer: BillingAddressAction) => BillingAddressState;
export default billingAddressReducer;
