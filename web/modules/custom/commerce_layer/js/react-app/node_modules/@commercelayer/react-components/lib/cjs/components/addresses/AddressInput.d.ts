import { type BaseInputComponentProps, type AddressInputName } from '../../typings/index';
import { type AddressValuesKeys } from '../../context/BillingAddressFormContext';
type Props = {
    name: Extract<AddressValuesKeys, AddressInputName>;
} & Omit<BaseInputComponentProps, 'name'> & JSX.IntrinsicElements['input'] & Omit<JSX.IntrinsicElements['textarea'], 'children'>;
export declare function AddressInput(props: Props): JSX.Element | null;
export default AddressInput;
