import { type ChildrenFunction } from '../../typings/index';
import type { Parcel } from '@commercelayer/sdk';
interface ChildrenProps extends Omit<Props, 'children'> {
    /**
     * Shipments of the current order
     */
    parcels?: Parcel[] | null;
    /**
     * Quantity of the parcels
     */
    quantity: number;
}
interface Props extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
}
export declare function ParcelsCount({ children, ...p }: Props): JSX.Element;
export default ParcelsCount;
