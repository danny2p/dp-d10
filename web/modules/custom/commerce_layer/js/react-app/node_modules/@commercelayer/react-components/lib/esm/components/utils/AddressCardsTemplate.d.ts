import type { Address } from '@commercelayer/sdk';
import AddressChildrenContext from '../../context/AddressChildrenContext';
import { type ChildrenFunction } from '../../typings/index';
export interface TAddressCards extends Pick<Props, 'customerAddresses' | 'className'> {
    AddressProvider: typeof AddressChildrenContext.Provider;
}
export interface CustomerAddress extends Address {
    onClick: () => void;
    handleSelect?: () => void;
}
export type AddressCardsTemplateChildren = ChildrenFunction<TAddressCards>;
export type HandleSelect = (k: number, addressId: string, customerAddressId: string, disabled: boolean, address: Address) => Promise<void>;
interface Props {
    customerAddresses: CustomerAddress[];
    countryLock?: string | null;
    children: AddressCardsTemplateChildren;
    selectedClassName?: string;
    disabledClassName?: string;
    deselect?: boolean;
    selected?: number | null;
    className?: string;
    handleSelect: HandleSelect;
}
export default function AddressCardsTemplate({ customerAddresses, children, deselect, countryLock, selected, selectedClassName, className, disabledClassName, handleSelect }: Props): JSX.Element;
export {};
