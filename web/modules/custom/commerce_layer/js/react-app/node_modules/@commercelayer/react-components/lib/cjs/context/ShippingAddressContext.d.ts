/// <reference types="react" />
import { type ShippingAddressState } from '../reducers/ShippingAddressReducer';
type DefaultContext = {
    setShippingAddress?: (id: string, options?: {
        customerAddressId: string;
    }) => Promise<void>;
} & ShippingAddressState;
export declare const defaultShippingAddressContext: {};
declare const ShippingAddressContext: import("react").Context<DefaultContext>;
export default ShippingAddressContext;
