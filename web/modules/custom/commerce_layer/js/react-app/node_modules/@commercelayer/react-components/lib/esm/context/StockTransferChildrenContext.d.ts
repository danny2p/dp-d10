/// <reference types="react" />
import { type LineItem, type StockTransfer } from '@commercelayer/sdk';
export interface InitialStockTransferContext {
    stockTransfer?: StockTransfer | null | LineItem;
}
declare const StockTransferChildrenContext: import("react").Context<InitialStockTransferContext>;
export default StockTransferChildrenContext;
