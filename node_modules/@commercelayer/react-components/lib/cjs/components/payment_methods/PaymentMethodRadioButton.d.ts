import { type ChangeEvent } from 'react';
import type { Order, PaymentMethod } from '@commercelayer/sdk';
import { type ChildrenFunction } from '../../typings/index';
interface ChildrenProps extends Omit<Props, 'children'> {
    checked: boolean;
    handleOnChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
}
interface TOnChangeParams {
    payment?: PaymentMethod | Record<string, any>;
    order?: Order;
}
type Props = {
    children?: ChildrenFunction<ChildrenProps>;
    onChange?: (params: TOnChangeParams) => void;
} & JSX.IntrinsicElements['input'];
export declare function PaymentMethodRadioButton(props: Props): JSX.Element;
export default PaymentMethodRadioButton;
