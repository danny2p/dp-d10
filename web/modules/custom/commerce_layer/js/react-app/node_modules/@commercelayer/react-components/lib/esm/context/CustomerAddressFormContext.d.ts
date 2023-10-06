/// <reference types="react" />
import { type AddressCountrySelectName, type AddressInputName } from '../typings/index';
import { type AddressField } from '../reducers/AddressReducer';
export interface DefaultContextAddress {
    validation?: void;
    setValue?: (name: AddressField | AddressInputName | AddressCountrySelectName, value: any) => void;
    errors?: Record<string, {
        code: string;
        message: string;
        error: boolean;
    }>;
    errorClassName?: string;
    requiresBillingInfo?: boolean;
    resetField?: (name: string) => void;
    values?: Record<string, any>;
}
declare const CustomerAddressFormContext: import("react").Context<DefaultContextAddress>;
export default CustomerAddressFormContext;
