/// <reference types="react" />
import { type Address } from '@commercelayer/sdk';
export interface InitialAddressContext {
    address: Address | undefined;
}
declare const AddressChildrenContext: import("react").Context<InitialAddressContext>;
export default AddressChildrenContext;
