import { type RefObject } from 'react';
import { type PlaceOrderState, type setPlaceOrder, setPlaceOrderErrors } from '../reducers/PlaceOrderReducer';
type DefaultContext = {
    setPlaceOrderErrors?: typeof setPlaceOrderErrors;
    setPlaceOrder?: typeof setPlaceOrder;
    placeOrderPermitted?: () => void;
    setButtonRef?: (ref: RefObject<HTMLButtonElement>) => void;
} & PlaceOrderState;
export declare const defaultPlaceOrderContext: {
    setPlaceOrderErrors: typeof setPlaceOrderErrors;
};
declare const PlaceOrderContext: import("react").Context<DefaultContext>;
export default PlaceOrderContext;
