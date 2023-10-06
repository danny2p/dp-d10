import { type ReactNode } from 'react';
import { type ChildrenFunction } from '../../typings/index';
interface ChildrenProps extends Omit<Props, 'children'> {
    handleClick: () => void;
}
interface Props extends Omit<JSX.IntrinsicElements['button'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
    label?: string | ReactNode;
    onClick?: () => void;
}
export declare function SaveCustomerButton(props: Props): JSX.Element;
export default SaveCustomerButton;
