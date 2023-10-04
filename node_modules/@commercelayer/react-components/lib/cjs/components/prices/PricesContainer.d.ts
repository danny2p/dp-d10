import { type LoaderType } from '../../typings/index';
interface Props {
    children: JSX.Element | JSX.Element[];
    filters?: object;
    loader?: LoaderType;
    perPage?: number;
    skuCode?: string;
}
export declare function PricesContainer(props: Props): JSX.Element;
export default PricesContainer;
