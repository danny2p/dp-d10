import { type LineItem, type Shipment } from '@commercelayer/sdk';
export declare function shipmentsFilled(shipments: Shipment[]): boolean;
export declare function isDoNotShip(lineItems?: LineItem[] | null): boolean;
