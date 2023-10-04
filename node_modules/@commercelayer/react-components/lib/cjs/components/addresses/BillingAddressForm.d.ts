import { type ReactNode } from 'react';
type Props = {
    children: ReactNode;
    reset?: boolean;
    errorClassName?: string;
} & Omit<JSX.IntrinsicElements['form'], 'onSubmit'>;
export declare function BillingAddressForm(props: Props): JSX.Element;
export default BillingAddressForm;
