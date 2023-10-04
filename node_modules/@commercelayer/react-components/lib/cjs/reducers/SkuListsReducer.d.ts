import { type Dispatch } from 'react';
import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
type SkuListsActionType = 'getSkuList' | 'setSkuList';
export type SkuListsState = Partial<{
    listIds: string[];
    skuLists: Record<string, any>;
}>;
export declare const skuListsInitialState: SkuListsState;
export interface SkuListsAction {
    payload: Partial<SkuListsState>;
    type: SkuListsActionType;
}
export type GetSkuList = (params: {
    config: CommerceLayerConfig;
    dispatch: Dispatch<SkuListsAction>;
    listIds: string[];
    state: SkuListsState;
}) => Promise<void>;
export declare const getSkuList: GetSkuList;
declare const skuListsReducer: (state: SkuListsState, reducer: SkuListsAction) => SkuListsState;
export default skuListsReducer;
