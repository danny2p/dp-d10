import type { Order } from '@commercelayer/sdk';
import type { DefaultChildrenType } from '../../typings/globals';
interface Props extends Omit<JSX.IntrinsicElements['form'], 'onSubmit'> {
    children: DefaultChildrenType;
    onSubmit?: (response: {
        success: boolean;
        value: string;
        order?: Order;
    }) => void;
}
export declare function GiftCardOrCouponForm(props: Props): JSX.Element | null;
export default GiftCardOrCouponForm;
