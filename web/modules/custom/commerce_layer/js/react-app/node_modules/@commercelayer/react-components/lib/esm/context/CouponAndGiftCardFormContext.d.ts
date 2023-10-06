/// <reference types="react" />
import { type OrderCodeType } from '../reducers/OrderReducer';
interface DefaultContext {
    validation?: void;
    setValue?: (name: string, value: string) => void;
    codeType?: OrderCodeType;
}
declare const CouponAndGiftCardFormContext: import("react").Context<DefaultContext>;
export default CouponAndGiftCardFormContext;
