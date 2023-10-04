import { type PriceProps } from '../prices/Price';
export type PTemplateProps = {
    formattedAmount?: string;
    formattedCompare?: string;
} & Omit<PriceProps, 'children'>;
export declare function PriceTemplate(props: PTemplateProps): JSX.Element;
export default PriceTemplate;
