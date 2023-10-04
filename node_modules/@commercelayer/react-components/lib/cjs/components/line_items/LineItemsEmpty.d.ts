import { type ChildrenFunction } from '../../typings/index';
interface ChildrenProps extends Omit<Props, 'children'> {
    quantity: number;
    text: string;
}
interface Props extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    children?: ChildrenFunction<ChildrenProps>;
    text?: string;
}
export declare function LineItemsEmpty(props: Props): JSX.Element | null;
export default LineItemsEmpty;
