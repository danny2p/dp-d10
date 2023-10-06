import { type Context } from 'react';
interface TParams<C> {
    /**
     * Context to check
     */
    context: Context<C>;
    /**
     * Name of the component has the context
     */
    contextComponentName: string;
    /**
     * Name of the current component
     */
    currentComponentName: string;
    /**
     * Key of the context to check
     */
    key: string;
}
export default function useCustomContext<T>({ context, key, currentComponentName, contextComponentName }: TParams<T>): T;
export {};
