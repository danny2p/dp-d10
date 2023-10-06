import { type DefaultChildrenType } from '../typings/globals';
interface Props<T> {
    children: DefaultChildrenType;
    filterBy: T[];
    componentName: string;
}
/**
 * Filter children by component display name
 */
export default function filterChildren<T = string>({ children, filterBy, componentName }: Props<T>): JSX.Element | JSX.Element[] | null;
export {};
