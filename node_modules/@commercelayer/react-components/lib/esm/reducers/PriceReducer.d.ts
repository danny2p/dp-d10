import { type BaseAction, type LoaderType } from '../typings/index';
import { type Price } from '@commercelayer/sdk';
import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
import { type Dispatch } from 'react';
import { type BaseError } from '../typings/errors';
export type Prices = Record<string, Price | Price[]>;
type SkuCodesPrice = string[];
export interface PriceState {
    loading: boolean;
    prices: Prices;
    skuCodes: SkuCodesPrice;
    errors?: BaseError[];
    skuCode?: string;
    setSkuCodes?: typeof setSkuCodes;
    loader?: LoaderType;
}
export interface PriceAction extends BaseAction {
    type: PriceActionType;
}
export declare const priceInitialState: PriceState;
export declare function setSkuCodes({ skuCodes, dispatch }: {
    skuCodes: SkuCodesPrice;
    dispatch?: Dispatch<PriceAction>;
}): void;
export declare function getSkusPrice(skuCodes: SkuCodesPrice, { config, dispatch, perPage, filters }: {
    config: CommerceLayerConfig;
    dispatch: Dispatch<PriceAction>;
    perPage: number;
    filters: Record<string, any>;
}): void;
export type UnsetPriceState = (dispatch: Dispatch<PriceAction>) => void;
export declare const unsetPriceState: UnsetPriceState;
export type PriceActionType = 'setLoading' | 'setPrices' | 'setSkuCodes' | 'setErrors';
declare const priceReducer: (state: PriceState, reducer: PriceAction) => PriceState;
export default priceReducer;
