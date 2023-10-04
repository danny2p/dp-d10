/// <reference types="react" />
import { type SetCustomerErrors, type deleteCustomerAddress, type CustomerState, type getCustomerPaymentSources, type setCustomerEmail, type TCustomerAddress, type getCustomerAddresses, type getCustomerOrders, type getCustomerSubscriptions } from '../reducers/CustomerReducer';
export type InitialCustomerContext = Partial<{
    saveCustomerUser: (customerEmail: string) => Promise<void>;
    setCustomerErrors: SetCustomerErrors;
    setCustomerEmail: typeof setCustomerEmail;
    getCustomerPaymentSources: typeof getCustomerPaymentSources;
    deleteCustomerAddress: typeof deleteCustomerAddress;
    getCustomerAddresses: typeof getCustomerAddresses;
    createCustomerAddress: (address: TCustomerAddress) => Promise<void>;
    getCustomerOrders: (props: Partial<Parameters<typeof getCustomerOrders>[0]>) => Promise<void>;
    getCustomerSubscriptions: (props: Partial<Parameters<typeof getCustomerSubscriptions>[0]>) => Promise<void>;
} & CustomerState>;
export declare const defaultCustomerContext: {};
declare const CustomerContext: import("react").Context<Partial<{
    saveCustomerUser: (customerEmail: string) => Promise<void>;
    setCustomerErrors: SetCustomerErrors;
    setCustomerEmail: typeof setCustomerEmail;
    getCustomerPaymentSources: typeof getCustomerPaymentSources;
    deleteCustomerAddress: typeof deleteCustomerAddress;
    getCustomerAddresses: typeof getCustomerAddresses;
    createCustomerAddress: (address: TCustomerAddress) => Promise<void>;
    getCustomerOrders: (props: Partial<Parameters<typeof getCustomerOrders>[0]>) => Promise<void>;
    getCustomerSubscriptions: (props: Partial<Parameters<typeof getCustomerSubscriptions>[0]>) => Promise<void>;
} & Partial<import("../reducers/CustomerReducer").CustomerActionPayload>>>;
export default CustomerContext;
