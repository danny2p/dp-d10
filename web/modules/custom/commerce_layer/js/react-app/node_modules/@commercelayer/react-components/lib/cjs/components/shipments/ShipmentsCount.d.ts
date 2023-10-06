import { type ChildrenFunction } from '../../typings/index';
import type { Shipment } from '@commercelayer/sdk';
interface ChildrenProps extends Omit<Props, 'children'> {
    /**
     * Shipments of the current order
     */
    shipments?: Shipment[] | null;
    /**
     * Quantity of the shipments
     */
    quantity: number;
}
interface Props extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
}
export declare function ShipmentsCount({ children, ...p }: Props): JSX.Element;
export default ShipmentsCount;
