import { type FunctionComponent } from 'react';
type BaseFieldChildren = Omit<BaseFieldProps, 'children'>;
export interface BaseFieldProps extends Omit<JSX.IntrinsicElements['span'], 'children'> {
    attribute: 'number' | 'id';
    children?: (props: BaseFieldChildren) => JSX.Element;
}
declare const BaseField: FunctionComponent<BaseFieldProps>;
export default BaseField;
