import { type LineItem } from '@commercelayer/sdk';
import type { ChildrenFunction } from '../../typings/index';
import { type TLineItem } from './LineItem';
export interface TLineItemImage extends Omit<Props, 'children'> {
    src: string;
    lineItem: LineItem;
}
type Props = {
    children?: ChildrenFunction<TLineItemImage>;
    width?: number;
    placeholder?: {
        [K in TLineItem]?: string;
    };
} & Omit<JSX.IntrinsicElements['img'], 'src' | 'srcSet' | 'placeholder'>;
export declare function LineItemImage(props: Props): JSX.Element | null;
export default LineItemImage;
