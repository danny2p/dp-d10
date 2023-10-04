import { type LoaderType } from '../../typings/index';
import { type PaymentSourceProps } from '../payment_source/PaymentSource';
export type GatewayBaseType = Props & {
    show: boolean;
    loading: boolean;
    loaderComponent: JSX.Element;
};
type Props = PaymentSourceProps & {
    showCard: boolean;
    handleEditClick: (e: MouseEvent) => void;
    show: boolean;
    loader?: LoaderType;
};
export declare function PaymentGateway({ readonly, showCard, handleEditClick, children, templateCustomerCards, templateCustomerSaveToWallet, onClickCustomerCards, show, loader, ...p }: Props): JSX.Element | null;
export default PaymentGateway;
