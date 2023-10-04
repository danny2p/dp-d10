import { type DefaultChildrenType } from '../../typings/globals';
interface Props {
    children?: DefaultChildrenType;
    /**
     * Customize the loader content.
     */
    loader?: string | JSX.Element;
}
export declare function CustomerPaymentSource({ children, loader }: Props): JSX.Element;
export default CustomerPaymentSource;
