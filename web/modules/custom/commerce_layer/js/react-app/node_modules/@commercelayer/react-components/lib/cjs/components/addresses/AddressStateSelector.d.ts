import { type AddressStateSelectName, type BaseSelectComponentProps } from '../../typings/index';
type Props = Omit<BaseSelectComponentProps, 'options' | 'name'> & {
    name: AddressStateSelectName;
    required?: boolean;
    disabled?: boolean;
    inputClassName?: string;
    selectClassName?: string;
} & Pick<JSX.IntrinsicElements['select'], 'className' | 'id' | 'style'>;
export declare function AddressStateSelector(props: Props): JSX.Element;
export default AddressStateSelector;
