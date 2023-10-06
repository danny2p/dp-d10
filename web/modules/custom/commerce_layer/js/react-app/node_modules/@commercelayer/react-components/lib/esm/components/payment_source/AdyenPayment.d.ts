import { type CSSProperties } from 'react';
import { type PaymentSourceProps } from './PaymentSource';
type Styles = Partial<{
    base: CSSProperties;
    error: CSSProperties;
    placeholder: CSSProperties;
    validated: CSSProperties;
}>;
type PaypalStyle = Partial<{
    /**
     * @see {@link https://developer.paypal.com/docs/checkout/integration-features/customize-button/#color}
     */
    color: 'gold' | 'blue' | 'silver' | 'white' | 'black';
    /**
     * @see {@link https://developer.paypal.com/docs/checkout/integration-features/customize-button/#shape}
     */
    shape: 'rect' | 'pill';
    /**
     * @see {@link https://developer.paypal.com/docs/checkout/integration-features/customize-button/#height}
     */
    height: string | number;
    /**
     * @see {@link https://developer.paypal.com/docs/checkout/integration-features/customize-button/#label}
     */
    label: 'paypal' | 'checkout' | 'buynow' | 'pay';
    /**
     * @see {@link https://developer.paypal.com/docs/checkout/integration-features/customize-button/#tagline}
     */
    tagline: boolean;
    /**
     * @see {@link https://developer.paypal.com/docs/checkout/integration-features/customize-button/#layout}
     */
    layout: 'vertical' | 'horizontal';
}>;
interface PaymentMethodsStyle {
    card?: Styles;
    paypal?: PaypalStyle;
}
export interface AdyenPaymentConfig {
    cardContainerClassName?: string;
    threeDSecureContainerClassName?: string;
    placeOrderCallback?: (response: {
        placed: boolean;
    }) => void;
    styles?: PaymentMethodsStyle;
}
interface Props {
    clientKey?: string;
    config?: AdyenPaymentConfig;
    templateCustomerSaveToWallet?: PaymentSourceProps['templateCustomerSaveToWallet'];
    locale?: string;
    environment?: string;
}
export declare function AdyenPayment({ clientKey, config, templateCustomerSaveToWallet, environment, locale }: Props): JSX.Element | null;
export default AdyenPayment;
