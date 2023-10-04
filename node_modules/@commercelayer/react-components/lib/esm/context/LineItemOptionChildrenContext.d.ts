/// <reference types="react" />
import type { LineItemOption } from '@commercelayer/sdk';
export interface TLineItemOptions extends LineItemOption {
}
export interface InitialLineItemContext {
    lineItemOption: Partial<TLineItemOptions>;
    showAll?: boolean;
}
declare const LineItemOptionChildrenContext: import("react").Context<InitialLineItemContext>;
export default LineItemOptionChildrenContext;
