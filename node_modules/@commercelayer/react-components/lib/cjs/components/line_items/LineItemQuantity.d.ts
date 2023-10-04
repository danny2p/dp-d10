/// <reference types="react" />
import { type ChildrenFunction } from '../../typings/index';
interface ChildrenProps extends Omit<Props, 'children'> {
    quantity: number;
    handleChange: (event: React.MouseEvent<HTMLSelectElement>) => void;
}
type Props = {
    children?: ChildrenFunction<ChildrenProps>;
    max?: number;
    disabled?: boolean;
    readonly?: boolean;
} & (Omit<JSX.IntrinsicElements['select'], 'children'> & Omit<JSX.IntrinsicElements['span'], 'children'>);
export declare function LineItemQuantity(props: Props): JSX.Element;
export default LineItemQuantity;
