import { type ReactNode } from 'react';
interface Props {
    children: ReactNode;
    shipToDifferentAddress?: boolean;
    isBusiness?: boolean;
}
export declare function AddressesContainer(props: Props): JSX.Element;
export default AddressesContainer;
