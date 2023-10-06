import { type Dispatch } from 'react';
import { type CommerceLayerConfig } from '../context/CommerceLayerContext';
import { type getOrderContext } from './OrderReducer';
import { type LoaderType } from '../typings/index';
import { type BaseError } from '../typings/errors';
import { type Order, type LineItem } from '@commercelayer/sdk';
export interface UpdateLineItemParams {
    lineItemId: string;
    quantity?: number;
    dispatch: Dispatch<LineItemAction>;
    config: CommerceLayerConfig;
    getOrder: getOrderContext | undefined;
    orderId: string;
    errors: BaseError[] | undefined;
}
export type UpdateLineItem = (params: UpdateLineItemParams) => Promise<void>;
export type DeleteLineItemParam = Record<string, any> & UpdateLineItemParams;
export type DeleteLineItem = (params: DeleteLineItemParam) => Promise<void>;
export interface GetLineItemsParams {
    dispatch: Dispatch<LineItemAction>;
    config: CommerceLayerConfig;
    order: Order | null;
    filters: Record<string, any>;
}
export type GetLineItems = (params: GetLineItemsParams) => void;
export interface LineItemPayload {
    loading?: boolean;
    loader?: LoaderType;
    lineItems?: LineItem[] | null;
    errors?: BaseError[];
}
export interface LineItemState extends LineItemPayload {
    updateLineItem?: (lineItemId: string, quantity?: number) => Promise<void>;
    deleteLineItem?: (lineItemId: string) => Promise<void>;
}
export interface LineItemAction {
    type: LineItemActionType;
    payload: LineItemPayload;
}
export declare const getLineItems: GetLineItems;
export declare function updateLineItem(params: UpdateLineItemParams): Promise<void>;
export declare const deleteLineItem: DeleteLineItem;
export declare const lineItemInitialState: LineItemState;
export type LineItemActionType = 'setLineItems' | 'setErrors' | 'setLoading';
declare const lineItemReducer: (state: LineItemState, reducer: LineItemAction) => LineItemState;
export default lineItemReducer;
