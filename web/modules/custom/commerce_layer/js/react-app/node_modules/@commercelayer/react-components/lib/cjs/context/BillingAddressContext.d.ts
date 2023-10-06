/// <reference types="react" />
import { type BillingAddressState } from '../reducers/BillingAddressReducer';
type DefaultContext = {
    setBillingAddress?: (id: string, options?: {
        customerAddressId: string;
    }) => Promise<void>;
} & BillingAddressState;
export declare const defaultBillingAddressContext: {};
declare const BillingAddressContext: import("react").Context<DefaultContext>;
export default BillingAddressContext;
