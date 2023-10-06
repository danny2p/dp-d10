import { type BaseAmountComponent, type BasePriceType } from '../../typings/index';
type Props = BaseAmountComponent & {
    type?: BasePriceType;
};
export declare function LineItemAmount(props: Props): JSX.Element;
export default LineItemAmount;
