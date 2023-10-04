/// <reference types="react" />
import { type Sku } from '@commercelayer/sdk';
export type InitialSkuContext = Partial<{
    sku: Sku;
}>;
declare const SkuChildrenContext: import("react").Context<Partial<{
    sku: Sku;
}>>;
export default SkuChildrenContext;
