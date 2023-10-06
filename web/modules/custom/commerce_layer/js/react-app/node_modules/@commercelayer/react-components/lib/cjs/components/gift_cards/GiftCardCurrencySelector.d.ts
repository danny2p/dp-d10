import { type BaseSelectComponentProps } from '../../typings/index';
type Props = Omit<BaseSelectComponentProps, 'options' | 'name'> & {
    required?: boolean;
} & Pick<JSX.IntrinsicElements['select'], 'className' | 'id' | 'style'>;
export declare function GiftCardCurrencySelector(props: Props): JSX.Element;
export default GiftCardCurrencySelector;
