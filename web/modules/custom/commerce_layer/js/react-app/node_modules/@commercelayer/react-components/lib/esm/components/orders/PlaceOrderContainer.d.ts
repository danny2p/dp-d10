import { type ReactNode } from 'react';
import { type PlaceOrderOptions } from '../../reducers/PlaceOrderReducer';
interface Props {
    children: ReactNode;
    options?: PlaceOrderOptions;
}
export declare function PlaceOrderContainer(props: Props): JSX.Element;
export default PlaceOrderContainer;
