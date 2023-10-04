import { type Dispatch } from 'react';
import { type BaseError } from '../typings/errors';
import type { Address, AddressCreate, AddressUpdate, Customer, CustomerPaymentSource, Order, OrderSubscription } from '@commercelayer/sdk';
import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
import { type updateOrder } from './OrderReducer';
import { type ListResponse } from '@commercelayer/sdk/lib/cjs/resource';
export type CustomerActionType = 'setErrors' | 'setCustomerEmail' | 'setAddresses' | 'setPayments' | 'setOrders' | 'setSubscriptions';
export interface CustomerActionPayload {
    addresses: Address[] | null;
    payments: CustomerPaymentSource[] | null;
    customerEmail: string;
    errors: BaseError[];
    orders: ListResponse<Order>;
    subscriptions: ListResponse<OrderSubscription> | null;
    isGuest: boolean;
    customers: Customer;
}
export type CustomerState = Partial<CustomerActionPayload>;
export interface CustomerAction {
    type: CustomerActionType;
    payload: Partial<CustomerActionPayload>;
}
export type SetSaveOnBlur = (args: {
    saveOnBlur: boolean;
    dispatch: Dispatch<CustomerAction>;
}) => void;
export interface SaveCustomerUser {
    /**
     * The Commerce Layer Config
     */
    config: CommerceLayerConfig;
    /**
     * The customer email
     */
    customerEmail: string;
    /**
     * The Customer dispatch function
     */
    dispatch: Dispatch<CustomerAction>;
    /**
     * The Commerce Layer Order resource
     */
    order?: Order;
    /**
     * The function to update the order resource
     */
    updateOrder: typeof updateOrder;
}
export declare function saveCustomerUser({ customerEmail, order, updateOrder }: SaveCustomerUser): Promise<void>;
export type SetCustomerErrors = <V extends BaseError[]>(errors: V, dispatch?: Dispatch<CustomerAction>) => void;
export declare function setCustomerErrors(
/**
 * @param errors - An array of errors
 */
errors: BaseError[], 
/**
 * @param dispatch - The dispatch function
 */
dispatch?: Dispatch<CustomerAction>): void;
export declare function setCustomerEmail(
/**
 * @param customerEmail The email address of the customer
 */
customerEmail: string, 
/**
 * @param dispatch The dispatch function
 */
dispatch?: Dispatch<CustomerAction>): void;
export interface GetCustomerAddresses {
    /**
     * The Commerce Layer config
     */
    config: CommerceLayerConfig;
    /**
     * The Customer dispatch function
     */
    dispatch: Dispatch<CustomerAction>;
    /**
     * Order details
     */
    isOrderAvailable?: boolean;
}
export declare function getCustomerAddresses({ config, dispatch, isOrderAvailable }: GetCustomerAddresses): Promise<void>;
export interface DeleteCustomerAddress {
    config?: CommerceLayerConfig;
    dispatch?: Dispatch<CustomerAction>;
    customerAddressId: string;
    addresses?: Address[] | null;
}
export declare function deleteCustomerAddress({ config, dispatch, customerAddressId, addresses }: DeleteCustomerAddress): Promise<void>;
export interface GetCustomerPaymentSources {
    /**
     * The Customer dispatch function
     */
    dispatch?: Dispatch<CustomerAction>;
    /**
     * The Commerce Layer Order resource
     */
    order?: Order;
}
export declare function getCustomerPaymentSources(params?: GetCustomerPaymentSources): void;
interface GetCustomerOrdersProps {
    /**
     * The Commerce Layer config
     */
    config: CommerceLayerConfig;
    /**
     * The Customer dispatch function
     */
    dispatch: Dispatch<CustomerAction>;
    /**
     * The page size
     */
    pageSize?: number;
    /**
     * The page number
     */
    pageNumber?: number;
}
export declare function getCustomerOrders({ config, dispatch, pageSize, pageNumber }: GetCustomerOrdersProps): Promise<void>;
export declare function getCustomerSubscriptions({ config, dispatch, pageSize, pageNumber }: GetCustomerOrdersProps): Promise<void>;
export type TCustomerAddress = AddressCreate & AddressUpdate;
interface TCreateCustomerAddress {
    /**
     * Customer address dispatch function
     */
    dispatch?: Dispatch<CustomerAction>;
    /**
     * The Commerce Layer Config
     */
    config?: CommerceLayerConfig;
    /**
     * The address to create or update if there is an id
     */
    address: TCustomerAddress;
    /**
     * Current state of the customer
     */
    state?: CustomerState;
}
export declare function createCustomerAddress({ address, config, dispatch, state }: TCreateCustomerAddress): Promise<void>;
interface GetCustomerPaymentsParams extends GetCustomerOrdersProps {
}
export declare function getCustomerPayments({ config, dispatch }: GetCustomerPaymentsParams): Promise<void>;
export declare const customerInitialState: CustomerState;
declare const customerReducer: (state: CustomerState, reducer: CustomerAction) => CustomerState;
export default customerReducer;
