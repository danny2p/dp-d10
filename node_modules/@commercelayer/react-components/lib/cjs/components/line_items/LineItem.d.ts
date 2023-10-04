export type TLineItem = 'gift_cards' | 'payment_methods' | 'promotions' | 'shipments' | 'skus' | 'bundles' | 'adjustments';
interface Props {
    children: JSX.Element | JSX.Element[];
    type?: TLineItem;
}
export declare function LineItem(props: Props): JSX.Element;
export default LineItem;
