/// <reference types="react" />
import { type SkuState } from '../reducers/SkuReducer';
export type SkuContextValue = SkuState;
declare const SkuContext: import("react").Context<Partial<{
    skus: import("@commercelayer/sdk/lib/cjs/resources/skus").Sku[];
    loading: boolean;
    skuCodes: string[];
}>>;
export default SkuContext;
