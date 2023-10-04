import { type ChildrenFunction } from '../../typings/index';
import type { Parcel } from '@commercelayer/sdk';
interface ChildrenProps extends Omit<Props, 'children'> {
    /**
     * Parcel of the current shipment
     */
    parcel?: Parcel;
    /**
     * Quantity of the parcel line items
     */
    quantity: number;
}
interface Props extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
}
export declare function ParcelLineItemsCount({ children, ...p }: Props): JSX.Element;
export default ParcelLineItemsCount;
