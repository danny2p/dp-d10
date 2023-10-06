import { type ReactNode } from 'react';
import { type ChildrenFunction } from '../../typings/index';
import { type CodeType, type OrderCodeType } from '../../reducers/OrderReducer';
import type { Order } from '@commercelayer/sdk';
interface ChildrenProps extends Omit<Props, 'children' | 'onClick'> {
    codeType?: OrderCodeType;
    hide?: boolean;
    handleClick?: () => void;
}
type Props = {
    type?: CodeType;
    children?: ChildrenFunction<ChildrenProps>;
    label?: string | ReactNode;
    onClick?: (response: {
        success: boolean;
        order?: Order;
    }) => void;
} & Omit<JSX.IntrinsicElements['button'], 'type' | 'onClick'>;
export declare function GiftCardOrCouponRemoveButton(props: Props): JSX.Element | null;
export default GiftCardOrCouponRemoveButton;
