import { type ReactNode } from 'react';
interface Props {
    children: ReactNode;
    persistKey: string;
    clearWhenPlaced?: boolean;
}
export declare function OrderStorage(props: Props): JSX.Element;
export default OrderStorage;
