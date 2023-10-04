import React from 'react';
import { type BaseInputComponentProps } from '../../typings/index';
export type BaseInputProps = BaseInputComponentProps & Omit<JSX.IntrinsicElements['input'], 'children'> & Omit<JSX.IntrinsicElements['textarea'], 'children'>;
declare const _default: React.ForwardRefExoticComponent<Omit<BaseInputProps, "ref"> & React.RefAttributes<any>>;
export default _default;
