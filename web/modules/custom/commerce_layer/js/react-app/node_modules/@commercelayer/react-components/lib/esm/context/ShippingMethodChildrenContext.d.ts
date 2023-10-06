/// <reference types="react" />
import { type DeliveryLeadTime, type ShippingMethod } from '@commercelayer/sdk';
export interface InitialShippingMethodContext {
    shippingMethod?: ShippingMethod;
    deliveryLeadTimeForShipment?: DeliveryLeadTime;
    currentShippingMethodId?: string;
    shipmentId?: string;
}
declare const ShippingMethodChildrenContext: import("react").Context<InitialShippingMethodContext>;
export default ShippingMethodChildrenContext;
