import { type BaseInputComponentProps } from '../../typings/index';
type Props = {
    name?: 'customer_email' | string;
    type?: 'email' | string;
    saveOnBlur?: boolean;
    onBlur?: (email: string) => void;
    errorClassName?: string;
} & Omit<BaseInputComponentProps, 'name' | 'type' | 'onBlur'> & Omit<JSX.IntrinsicElements['input'], 'children'> & Omit<JSX.IntrinsicElements['textarea'], 'children'>;
export declare function CustomerInput(props: Props): JSX.Element;
export default CustomerInput;
