import { type HostedFieldFieldOptions } from 'braintree-web/modules/hosted-fields';
import { type PaymentSourceProps } from './PaymentSource';
type BraintreeHostedFields<Type> = {
    [Property in keyof Type]: {
        label?: string;
    } & Type[Property];
};
export interface BraintreeConfig {
    containerClassName?: string;
    cardContainerClassName?: string;
    expDateContainerClassName?: string;
    fieldsContainerClassName?: string;
    cvvContainerClassName?: string;
    cardDetailsContainerClassName?: string;
    fieldLabelClassName?: string;
    inputWrapperClassName?: string;
    fields?: BraintreeHostedFields<HostedFieldFieldOptions>;
    styles?: Record<string, Record<string, string>>;
}
interface Props {
    authorization: string;
    config?: BraintreeConfig;
    templateCustomerSaveToWallet?: PaymentSourceProps['templateCustomerSaveToWallet'];
    locale?: string;
}
export declare function BraintreePayment({ authorization, config, templateCustomerSaveToWallet }: Props): JSX.Element | null;
export default BraintreePayment;
