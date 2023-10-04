import { type ReactNode } from 'react';
type Props = {
    children: ReactNode;
    title?: string;
    showName?: boolean;
    titleTagElement?: keyof JSX.IntrinsicElements;
    titleClassName?: string;
} & Omit<JSX.IntrinsicElements['div'], 'children'> & ({
    skuOptionId: string;
    showAll?: never;
} | {
    skuOptionId?: never;
    showAll: true;
});
export declare function LineItemOptions(props: Props): JSX.Element;
export default LineItemOptions;
