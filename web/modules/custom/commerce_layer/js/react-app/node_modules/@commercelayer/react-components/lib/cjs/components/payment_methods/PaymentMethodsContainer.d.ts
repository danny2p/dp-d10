import { type ReactNode } from 'react';
import { type PaymentMethodConfig } from '../../reducers/PaymentMethodReducer';
interface Props {
    children: ReactNode;
    config?: PaymentMethodConfig;
}
export declare function PaymentMethodsContainer(props: Props): JSX.Element;
export default PaymentMethodsContainer;
