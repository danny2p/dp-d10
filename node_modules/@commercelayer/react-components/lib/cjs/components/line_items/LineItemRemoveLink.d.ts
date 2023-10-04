import { type PropsWithoutRef } from 'react';
import { type ChildrenFunction } from '../../typings/index';
interface ChildrenProps extends Omit<Props, 'children'> {
    handleRemove: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    label?: string;
}
interface Props extends PropsWithoutRef<Omit<JSX.IntrinsicElements['a'], 'children'>> {
    children?: ChildrenFunction<ChildrenProps>;
    label?: string;
}
export declare function LineItemRemoveLink(props: Props): JSX.Element;
export default LineItemRemoveLink;
