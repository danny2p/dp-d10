import type { DefaultChildrenType } from '../../typings/globals';
interface Props {
    children: DefaultChildrenType;
    /**
     * Customer type
     */
    isGuest?: boolean;
}
export declare function CustomerContainer(props: Props): JSX.Element;
export default CustomerContainer;
