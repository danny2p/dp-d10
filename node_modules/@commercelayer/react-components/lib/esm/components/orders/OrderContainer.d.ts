import { type BaseMetadataObject } from '../../typings/index';
import type { OrderCreate, Order } from '@commercelayer/sdk';
import type { DefaultChildrenType } from '../../typings/globals';
interface Props {
    children: DefaultChildrenType;
    /**
     * Metadata to add when creates a new order
     */
    metadata?: BaseMetadataObject;
    /**
     * Attribute to add when creates/updates an order
     */
    attributes?: OrderCreate;
    /**
     * ID of the order
     */
    orderId?: string;
    /**
     * Callback called when the order is updated
     */
    fetchOrder?: (order: Order) => void;
}
export declare function OrderContainer(props: Props): JSX.Element;
export default OrderContainer;
