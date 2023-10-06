import { type PropsType } from '../../utils/PropsType';
import { type baseOrderPricePropTypes } from '../../typings/index';
export type BaseOrderPriceProps = PropsType<typeof baseOrderPricePropTypes, unknown> & Omit<JSX.IntrinsicElements['span'], 'children'>;
export declare function BaseOrderPrice(props: BaseOrderPriceProps): JSX.Element;
export default BaseOrderPrice;
