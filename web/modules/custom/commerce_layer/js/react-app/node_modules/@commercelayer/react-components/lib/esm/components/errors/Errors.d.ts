import type { CodeErrorType } from '../../typings/errors';
import { type ChildrenFunction } from '../../typings/index';
export type TResourceError = 'addresses' | 'billing_address' | 'gift_cards' | 'gift_card_or_coupon_code' | 'line_items' | 'orders' | 'payment_methods' | 'prices' | 'shipments' | 'shipping_address' | 'customer_address' | 'sku_options' | 'variant' | 'in_stock_subscriptions';
type ErrorChildrenComponentProps = ChildrenFunction<Omit<TErrorComponent, 'children'> & {
    errors: string[];
}>;
export interface TErrorComponent extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    /**
     * Resource which get the error
     */
    resource: TResourceError;
    children?: ErrorChildrenComponentProps;
    /**
     * Field which get the error
     */
    field?: string;
    /**
     * Error message which you can translate
     */
    messages?: Array<{
        code: CodeErrorType;
        message: string;
        resource?: TResourceError;
        field?: string;
        id?: string;
    }>;
}
type Props = TErrorComponent;
export declare function Errors(props: Props): JSX.Element;
export default Errors;
