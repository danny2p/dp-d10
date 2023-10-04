import { type BaseError } from '../typings/errors';
import { type Address, type AddressCreate } from '@commercelayer/sdk';
import { type TCustomerAddress } from '../reducers/CustomerReducer';
type BillingAddressController = (params: {
    billing_address?: AddressCreate;
    billingAddressId?: string;
    errors?: BaseError[];
    requiresBillingInfo?: boolean | null;
}) => boolean;
export declare const billingAddressController: BillingAddressController;
type ShippingAddressController = (params: {
    billingDisable?: boolean;
    errors?: BaseError[];
    shipToDifferentAddress?: boolean;
    shipping_address?: AddressCreate;
    shippingAddressId?: string;
}) => boolean;
export declare const shippingAddressController: ShippingAddressController;
type CountryLockController = (params: {
    addresses?: Address[] | null;
    billing_address?: TCustomerAddress;
    billingAddressId?: string;
    countryCodeLock?: string | null;
    shipToDifferentAddress?: boolean;
    shipping_address?: AddressCreate;
    shippingAddressId?: string;
}) => boolean;
export declare const countryLockController: CountryLockController;
export {};
