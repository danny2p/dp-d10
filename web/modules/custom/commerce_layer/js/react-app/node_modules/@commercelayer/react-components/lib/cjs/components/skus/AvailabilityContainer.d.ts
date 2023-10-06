import { type ReactNode } from 'react';
interface Props {
    children: ReactNode;
    skuCode?: string;
    getQuantity?: (quantity: number) => void;
}
export declare function AvailabilityContainer({ children, skuCode, getQuantity }: Props): JSX.Element;
export default AvailabilityContainer;
