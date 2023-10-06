import { type BaseState } from '../../typings/index';
import type { DefaultChildrenType } from '../../typings/globals';
interface Props extends Omit<JSX.IntrinsicElements['form'], 'children'> {
    children: DefaultChildrenType;
    onSubmit?: (values: BaseState) => void;
}
export declare function GiftCard(props: Props): JSX.Element;
export default GiftCard;
