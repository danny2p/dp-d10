import { type BaseInputComponentProps } from '../../typings/index';
import { type OrderCodeType } from '../../reducers/OrderReducer';
type Props = {
    name?: 'gift_card_or_coupon_code';
    type?: 'text';
    placeholderTranslation?: (codeType: OrderCodeType) => string;
} & Omit<BaseInputComponentProps, 'name' | 'type'> & Omit<JSX.IntrinsicElements['input'], 'children'> & Omit<JSX.IntrinsicElements['textarea'], 'children'>;
export declare function GiftCardOrCouponInput(props: Props): JSX.Element;
export default GiftCardOrCouponInput;
