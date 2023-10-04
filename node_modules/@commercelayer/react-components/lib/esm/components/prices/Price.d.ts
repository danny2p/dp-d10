import { type Price as PriceType } from '@commercelayer/sdk';
import { type ChildrenFunction, type LoaderType } from '../../typings/index';
interface PriceChildrenProps extends Omit<PriceProps, 'children'> {
    loading: boolean;
    loader: LoaderType;
    prices: PriceType[];
}
export interface PriceProps extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    children?: ChildrenFunction<PriceChildrenProps>;
    compareClassName?: string;
    showCompare?: boolean;
    skuCode?: string | null;
}
export declare function Price(props: PriceProps): JSX.Element;
export default Price;
