/// <reference types="react" />
import { type LineItemState } from '../reducers/LineItemReducer';
import { type LineItem } from '@commercelayer/sdk';
export interface LineItemContextValue extends LineItemState {
    lineItems?: LineItem[] | null;
}
declare const LineItemContext: import("react").Context<LineItemContextValue>;
export default LineItemContext;
