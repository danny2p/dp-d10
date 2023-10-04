import { type Shipment } from '@commercelayer/sdk';
type ShipmentFieldChildrenProps = Omit<Props, 'children'> & {
    shipment: Shipment;
};
export type ShipmentAttribute = 'number' | 'currency_code' | 'status' | 'cost_amount_cents' | 'cost_amount_float' | 'formatted_cost_amount' | 'key_number';
interface Props extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    children?: (props: ShipmentFieldChildrenProps) => JSX.Element;
    name: ShipmentAttribute;
}
export declare function ShipmentField(props: Props): JSX.Element;
export default ShipmentField;
