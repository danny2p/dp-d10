import { type Dispatch } from 'react';
import { type BaseError } from '../typings/errors';
import { type DeliveryLeadTime, type LineItem, type Order, type Shipment } from '@commercelayer/sdk';
import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
import { type getOrderContext } from './OrderReducer';
export type ShipmentActionType = 'setErrors' | 'setShipments' | 'setShippingMethod';
export type ShipmentLineItem = LineItem & {
    line_item: LineItem;
};
export interface ShipmentActionPayload {
    errors: BaseError[];
    shipments: Shipment[] | null;
    deliveryLeadTimes: DeliveryLeadTime[];
}
export type ShipmentState = Partial<ShipmentActionPayload>;
export interface ShipmentAction {
    type: ShipmentActionType;
    payload: Partial<ShipmentActionPayload>;
}
export declare const shipmentInitialState: ShipmentState;
export type SetShipmentErrors = <V extends BaseError[]>(errors: V, dispatch?: Dispatch<ShipmentAction>) => void;
export declare const setShipmentErrors: SetShipmentErrors;
type GetShipments = (args: {
    order: Order;
    dispatch: Dispatch<ShipmentAction>;
    config: CommerceLayerConfig;
}) => Promise<void>;
export declare const getShipments: GetShipments;
interface TSetShippingMethodParams {
    config: CommerceLayerConfig;
    shipmentId: string;
    shippingMethodId: string;
    order?: Order;
    getOrder?: getOrderContext;
}
export declare function setShippingMethod({ config, shipmentId, shippingMethodId, getOrder, order }: TSetShippingMethodParams): Promise<{
    success: boolean;
    order?: Order;
}>;
declare const shipmentReducer: (state: ShipmentState, reducer: ShipmentAction) => ShipmentState;
export default shipmentReducer;
