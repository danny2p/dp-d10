import type { DefaultChildrenType } from '../../typings/globals';
interface Props {
    children: DefaultChildrenType;
    filters?: Record<string, any>;
    loader?: JSX.Element;
}
export declare function LineItemsContainer(props: Props): JSX.Element;
export default LineItemsContainer;
