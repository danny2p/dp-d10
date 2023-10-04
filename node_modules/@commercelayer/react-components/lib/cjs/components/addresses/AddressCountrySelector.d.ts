import { type BaseSelectComponentProps } from '../../typings/index';
import { type AddressValuesKeys } from '../../context/BillingAddressFormContext';
type TCountryFieldName = 'billing_address_country_code' | 'shipping_address_country_code' | 'customer_address_country_code';
interface Props extends Omit<BaseSelectComponentProps, 'options' | 'name'>, Pick<JSX.IntrinsicElements['select'], 'className' | 'id' | 'style'> {
    name: Extract<AddressValuesKeys, TCountryFieldName>;
    required?: boolean;
    disabled?: boolean;
}
export declare function AddressCountrySelector(props: Props): JSX.Element;
export default AddressCountrySelector;
