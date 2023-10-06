/// <reference types="react" />
import { type LineItem } from '@commercelayer/sdk';
export type InitialLineItemChildrenContext = Partial<{
    lineItem: LineItem | null | undefined;
}>;
declare const LineItemChildrenContext: import("react").Context<Partial<{
    lineItem: LineItem | null | undefined;
}>>;
export default LineItemChildrenContext;
