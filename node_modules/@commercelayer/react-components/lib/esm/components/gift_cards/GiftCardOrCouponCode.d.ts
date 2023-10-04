import { type ChildrenFunction } from '../../typings/index';
import type { CodeType } from '../../reducers/OrderReducer';
interface ChildrenProps extends Omit<Props, 'children'> {
    code?: string | null;
    hide?: boolean;
    discountAmountCents?: number | null;
    discountAmountFloat?: number | null;
    formattedDiscountAmount?: string | null;
}
interface Props extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    type?: CodeType;
    children?: ChildrenFunction<ChildrenProps>;
}
export declare function GiftCardOrCouponCode({ children, type, ...props }: Props): JSX.Element | null;
export default GiftCardOrCouponCode;
