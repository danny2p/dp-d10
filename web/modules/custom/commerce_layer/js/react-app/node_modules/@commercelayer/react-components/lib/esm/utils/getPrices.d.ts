import { type Price } from '@commercelayer/sdk';
import { type PTemplateProps } from '../components/utils/PriceTemplate';
export declare function getPriceByCode(skuPrices: Price[], code?: string): Price | undefined;
export declare function getPricesComponent(skuPrices: Price[], props: PTemplateProps): JSX.Element[] | JSX.Element;
export default function getPrices<P extends Price>(prices: P[]): Record<string, P[]>;
