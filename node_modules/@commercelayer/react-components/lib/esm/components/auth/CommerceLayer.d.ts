import type { DefaultChildrenType } from '../../typings/globals';
interface Props {
    children: DefaultChildrenType;
    accessToken: string;
    endpoint: string;
}
export declare function CommerceLayer(props: Props): JSX.Element;
export default CommerceLayer;
