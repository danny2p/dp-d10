import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
import { type BaseAction } from '../typings/index';
import { type QueryParamsList, type Sku } from '@commercelayer/sdk';
import { type Dispatch } from 'react';
type SkuActionType = 'getSkus' | 'setLoading';
type SkuAction = BaseAction<SkuActionType, SkuState>;
export type SkuState = Partial<{
    skus: Sku[];
    loading: boolean;
    skuCodes: string[];
}>;
export declare const skuInitialState: SkuState;
interface GetSku {
    config: CommerceLayerConfig;
    skus: string[];
    dispatch: Dispatch<SkuAction>;
    queryParams?: QueryParamsList;
}
export declare function getSku<T extends GetSku>({ config, skus, dispatch, queryParams }: T): Promise<void>;
export default function skuReducer(state: SkuState, reducer: SkuAction): SkuState;
export {};
