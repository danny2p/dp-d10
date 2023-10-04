/// <reference types="react" />
import { type AddressState, type SetAddress, type AddressResource, type saveAddresses } from '../reducers/AddressReducer';
import { type BaseError } from '../typings/errors';
type DefaultContext = {
    saveAddresses?: (customerEmail?: string) => ReturnType<typeof saveAddresses>;
    setCloneAddress: (id: string, resource: AddressResource) => void;
    setAddress: SetAddress;
    setAddressErrors: (errors: BaseError[], resource: AddressResource) => void;
} & AddressState;
export declare const defaultAddressContext: {
    setCloneAddress: () => void;
    setAddress: SetAddress;
    setAddressErrors: () => void;
};
declare const AddressesContext: import("react").Context<DefaultContext>;
export default AddressesContext;
