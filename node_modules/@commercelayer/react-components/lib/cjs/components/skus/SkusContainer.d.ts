import type { QueryParamsList } from '@commercelayer/sdk';
import { type ReactNode } from 'react';
interface Props {
    /**
     * An array of skus to display.
     */
    skus: string[];
    /**
     * Accept a React node, [Skus](./Skus.d.ts), and [ItemContainer](../ItemContainer.d.ts)  as children to display above the skus.
     */
    children: ReactNode;
    /**
     * An object params to query the skus resource
     */
    queryParams?: QueryParamsList;
}
export declare function SkusContainer<P extends Props>(props: P): JSX.Element;
export default SkusContainer;
