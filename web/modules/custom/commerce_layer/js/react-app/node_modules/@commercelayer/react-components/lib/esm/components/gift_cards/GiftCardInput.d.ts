import { type BaseInputComponentProps, type GiftCardInputName } from '../../typings/index';
type Props = {
    name: GiftCardInputName;
} & Omit<BaseInputComponentProps, 'name'> & Omit<JSX.IntrinsicElements['input'], 'children'> & Omit<JSX.IntrinsicElements['textarea'], 'children'>;
export declare function GiftCardInput(props: Props): JSX.Element;
export default GiftCardInput;
