import { type ReactNode } from 'react';
import type { LoaderType } from '../../typings/index';
import type { Order } from '@commercelayer/sdk';
interface ShipmentProps {
    children: ReactNode;
    loader?: LoaderType;
    autoSelectSingleShippingMethod?: boolean | ((order?: Order) => void);
}
export declare function Shipment({ children, loader, autoSelectSingleShippingMethod }: ShipmentProps): JSX.Element;
export default Shipment;
