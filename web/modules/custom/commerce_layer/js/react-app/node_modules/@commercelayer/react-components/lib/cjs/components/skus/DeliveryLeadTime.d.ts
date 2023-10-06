export type DeliveryLeadTimeField = 'min_hours' | 'max_hours' | 'min_days' | 'max_days';
export type DeliveryLeadTimeComponentChildren = Omit<Props, 'children'>;
type Props = Partial<JSX.IntrinsicElements['span']> & {
    children?: (props: DeliveryLeadTimeComponentChildren) => JSX.Element;
    type: DeliveryLeadTimeField;
    text?: string;
};
export declare function DeliveryLeadTime(props: Props): JSX.Element;
export default DeliveryLeadTime;
