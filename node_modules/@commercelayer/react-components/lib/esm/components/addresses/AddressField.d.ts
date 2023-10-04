import { type ReactNode } from 'react';
import { type AddressFieldView } from '../../reducers/AddressReducer';
import type { Address } from '@commercelayer/sdk';
import { type ChildrenFunction } from '../../typings/index';
interface ChildrenProps extends Omit<Props, 'children' | 'name'> {
    address: Address;
}
type ChildrenProp = ChildrenFunction<ChildrenProps>;
type Props = {
    type?: 'field';
    label?: never;
    onClick?: never;
    children?: ChildrenProp;
    name: AddressFieldView;
    className?: string;
} | {
    type?: 'edit';
    label: string | ReactNode;
    onClick: (address: Address) => void;
    children?: ChildrenProp;
    name?: AddressFieldView;
    className?: string;
} | {
    type?: 'delete';
    label: string;
    onClick: () => void;
    children?: ChildrenProp;
    name?: AddressFieldView;
    className?: string;
} | {
    type?: 'edit' | 'field' | 'delete';
    label?: never;
    onClick?: never;
    children: ChildrenProp;
    name?: never;
    className?: string;
};
export declare function AddressField(props: Props): JSX.Element;
export default AddressField;
