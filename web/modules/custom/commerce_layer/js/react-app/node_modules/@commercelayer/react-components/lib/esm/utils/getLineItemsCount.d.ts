import type { TLineItem } from '../components/line_items/LineItem';
import type { LineItem } from '@commercelayer/sdk';
export type TypeAccepted = Extract<TLineItem, 'skus' | 'gift_cards' | 'bundles' | 'adjustments'>;
interface Args {
    lineItems: LineItem[];
    quantity?: number;
    typeAccepted?: TypeAccepted[];
}
export default function getLineItemsCount({ lineItems, quantity, typeAccepted }: Args): number;
export {};
