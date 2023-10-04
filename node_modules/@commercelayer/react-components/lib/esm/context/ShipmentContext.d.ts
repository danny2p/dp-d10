/// <reference types="react" />
import { type ShipmentState, type SetShipmentErrors, type setShippingMethod } from '../reducers/ShipmentReducer';
type DefaultContext = {
    setShipmentErrors: SetShipmentErrors;
    setShippingMethod?: (shipmentId: string, shippingMethodId: string) => ReturnType<typeof setShippingMethod>;
} & ShipmentState;
export declare const defaultShipmentContext: {
    setShipmentErrors: SetShipmentErrors;
};
declare const ShipmentContext: import("react").Context<DefaultContext>;
export default ShipmentContext;
