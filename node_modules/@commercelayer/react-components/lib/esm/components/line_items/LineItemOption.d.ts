import { type CSSProperties } from 'react';
import { type LineItemOption as LineItemOptionType } from '@commercelayer/sdk';
import { type ChildrenFunction } from '../../typings/index';
export interface TLineItemOption extends Omit<Props, 'children'> {
    lineItemOption: LineItemOptionType;
}
interface Props {
    id?: string;
    className?: string;
    key?: string;
    style?: CSSProperties;
    children?: ChildrenFunction<TLineItemOption>;
    name?: string;
    valueClassName?: string;
    tagElement?: keyof JSX.IntrinsicElements;
    tagContainer?: keyof JSX.IntrinsicElements;
}
export declare function LineItemOption(props: Props): JSX.Element;
export default LineItemOption;
